// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { Resend } from "resend"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeshDVzzjC7tvMqSi5TpOfx8AKHyetL3Y",
  authDomain: "celestial-portal.firebaseapp.com",
  projectId: "celestial-portal",
  storageBucket: "celestial-portal.firebasestorage.app",
  messagingSenderId: "654699349205",
  appId: "1:654699349205:web:f7bb2a99123cfd5a628e5c",
  measurementId: "G-PLG7Z1EG6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);