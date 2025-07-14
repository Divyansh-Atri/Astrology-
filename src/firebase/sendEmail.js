import emailjs from "emailjs-com";

const SERVICE_ID = "service_w8g2rz8";
const TEMPLATE_ID = "template_b0y73co";
const USER_ID = "Wx4WR-5YSya-lJJsk";


export const sendEmailConfirmation = async ({ email, patientName, appointmentDate, appointmentTime }) => {
  const templateParams = {
    to_email: email,
    to_name: patientName,
    appointment_date: appointmentDate,
    appointment_time: appointmentTime,
  };

  try {
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    console.log("EmailJS success:", result.text);
    return result;
  } catch (error) {
    console.error("EmailJS error:", error);
    throw new Error("Failed to send confirmation email.");
  }
};
