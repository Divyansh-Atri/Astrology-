import { db } from "./firebase";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
  addDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { sendEmailConfirmation } from "./sendEmail";

// Helper function to format time for generating an ID
const formatTimeForId = (time) => time.replace(/\s+/g, '').replace(':', '-');

// Helper function to format date for generating an ID (DD_MM_YYYY)
const formatDateForId = (dateStr) => {
  const [yyyy, mm, dd] = dateStr.split("-");
  return `${dd}_${mm}_${yyyy}`;
};

// Generates a unique appointment ID based on date and time
const generateAppointmentId = (date, time) =>
  `${formatDateForId(date)}-${formatTimeForId(time)}`;

/**
 * Creates a new appointment in Firestore, manages time slots, and sends confirmation emails.
 * @param {Object} formData - The data for the new appointment.
 * @param {string} formData.patientName - The name of the patient.
 * @param {string} formData.email - The patient's email address.
 * @param {string} formData.phone - The patient's phone number.
 * @param {string} formData.appointmentDate - The date of the appointment (YYYY-MM-DD).
 * @param {string} formData.appointmentTime - The time of the appointment (HH:MM AM/PM).
 * @param {string} [formData.service="Astrology Reading"] - The service booked.
 * @param {string} [formData.status="upcoming"] - The status of the appointment.
 * @returns {Object} An object containing the appointment ID and data.
 * @throws {Error} If the appointment date is in the past or the time slot is already booked.
 */
export const createAppointment = async (formData) => {
  const {
    patientName,
    email,
    phone,
    appointmentDate,
    appointmentTime,
    service = "Astrology Reading",
    status = "upcoming",
  } = formData;

  // 1. Validate the date: Ensure the appointment date is not in the past.
  const selectedDate = new Date(appointmentDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today's date to start of the day
  if (selectedDate < today) {
    throw new Error("Cannot book appointments for past dates");
  }

  // 2. Create a custom ID for the appointment: "DD_MM_YYYY-TIME"
  const appointmentId = generateAppointmentId(appointmentDate, appointmentTime);

  // 3. Check if an appointment with this custom ID already exists and is not cancelled.
  const existingRef = doc(db, "appointments", appointmentId);
  const existingSnap = await getDoc(existingRef);
  if (existingSnap.exists() && existingSnap.data().status !== "cancelled") {
    throw new Error("This time slot is already booked.");
  }

  // 4. Look for an existing free slot or create a new one if needed.
  const slotQuery = query(
    collection(db, "slots"),
    where("time", "==", appointmentTime),
    where("isBooked", "==", false)
  );
  const slotSnapshot = await getDocs(slotQuery);

  let slotId;

  if (!slotSnapshot.empty) {
    // If a free slot is found, mark it as booked.
    const slotDoc = slotSnapshot.docs[0];
    slotId = slotDoc.id;

    await updateDoc(doc(db, "slots", slotId), {
      isBooked: true,
      phone,
      email,
    });
  } else {
    // If no free slot is found, create a new slot and mark it as booked.
    const slotDoc = await addDoc(collection(db, "slots"), {
      time: appointmentTime,
      date: appointmentDate,
      isBooked: true,
      phone,
      email,
    });
    slotId = slotDoc.id;
  }

  // 5. Save the main appointment details with the custom ID.
  const appointmentData = {
    patientName,
    email,
    phone,
    appointmentDate,
    appointmentTime,
    service,
    status,
    slotId, // Link to the booked slot
    createdAt: new Date().toISOString(), // Timestamp for when the appointment was created
  };

  await setDoc(doc(db, "appointments", appointmentId), appointmentData);

  // 6. Send confirmation email to the patient.
  await sendEmailConfirmation({
    email,
    patientName,
    appointmentDate,
    appointmentTime
  });

  // 7. Send a confirmation email to the admin/service provider (assuming "shambav.jyotish@gmail.com" is the recipient).
  await sendEmailConfirmation({
    email: "shambav.jyotish@gmail.com", // Admin's email
    patientName, // Patient's name for context in admin email
    appointmentDate,
    appointmentTime,
    // You might want to add more details here for the admin, e.g., patient's phone
  });

  // Return the newly created appointment's ID and data.
  return { id: appointmentId, ...appointmentData };
};
