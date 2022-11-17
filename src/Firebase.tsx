//
//
//
//
//
//
//
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSXDrhFMMb2cMR7b4s8T0asLnBZfZzpZo",
  authDomain: "portfolio-6c5b9.firebaseapp.com",
  projectId: "portfolio-6c5b9",
  storageBucket: "portfolio-6c5b9.appspot.com",
  messagingSenderId: "1017848547449",
  appId: "1:1017848547449:web:2f46be01ed0154bc6deca8",
  measurementId: "G-CY59RZCLBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const database = getDatabase(app);

