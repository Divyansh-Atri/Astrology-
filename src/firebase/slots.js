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
const formatTimeForId = (time) => time.replace(/\s+/g, '').replace(':', '-');

const formatDateForId = (dateStr) => {
  const [yyyy, mm, dd] = dateStr.split("-");
  return `${dd}_${mm}_${yyyy}`;
};

const generateAppointmentId = (date, time) =>
  `${formatDateForId(date)}-${formatTimeForId(time)}`;

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

  // 1. Validate the date
  const selectedDate = new Date(appointmentDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate < today) {
    throw new Error("Cannot book appointments for past dates");
  }

  // 2. Create custom ID: "DD_MM_YYYY-TIME"
  const appointmentId = generateAppointmentId(appointmentDate, appointmentTime);

  // 3. Check if appointment already exists
  const existingRef = doc(db, "appointments", appointmentId);
  const existingSnap = await getDoc(existingRef);
  if (existingSnap.exists() && existingSnap.data().status !== "cancelled") {
    throw new Error("This time slot is already booked.");
  }

  // 4. Look for a free slot
  const slotQuery = query(
    collection(db, "slots"),
    where("time", "==", appointmentTime),
    where("isBooked", "==", false)
  );
  const slotSnapshot = await getDocs(slotQuery);

  let slotId;

  if (!slotSnapshot.empty) {
    const slotDoc = slotSnapshot.docs[0];
    slotId = slotDoc.id;

    await updateDoc(doc(db, "slots", slotId), {
      isBooked: true,
      phone,
      email,
    });
  } else {
    const slotDoc = await addDoc(collection(db, "slots"), {
      time: appointmentTime,
      date: appointmentDate,
      isBooked: true,
      phone,
      email,
    });
    slotId = slotDoc.id;
  }

  // 5. Save appointment with custom ID
  const appointmentData = {
    patientName,
    email,
    phone,
    appointmentDate,
    appointmentTime,
    service,
    status,
    slotId,
    createdAt: new Date().toISOString(),
  };

  await setDoc(doc(db, "appointments", appointmentId), appointmentData);
  await sendEmailConfirmation({
        email,
        patientName,
        appointmentDate,
        appointmentTime
    });
send ConfirmationEmail({
"shambav.jyotish@gmail.com"
patientName,
appointmentDate,
appointmentTime
})
  return { id: appointmentId, ...appointmentData };
};
