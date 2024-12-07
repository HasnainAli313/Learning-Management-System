  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLCDQsNrPLJIqWXBrqdRE3HkZH3H5-mH4",
  authDomain: "elearning-1f6e4.firebaseapp.com",
  projectId: "elearning-1f6e4",
  storageBucket: "elearning-1f6e4.firebasestorage.app",
  messagingSenderId: "914545548468",
  appId: "1:914545548468:web:32fb692dadc6ff8df04be1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
