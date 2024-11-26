/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_PJYizrQjD_mpNDq1l9KOUp3nrdpYvrE",
  authDomain: "netflix-271f4.firebaseapp.com",
  projectId: "netflix-271f4",
  storageBucket: "netflix-271f4.firebasestorage.app",
  messagingSenderId: "633397645051",
  appId: "1:633397645051:web:add251961bf2bcb089aa5e",
  measurementId: "G-LQZVK2LWL3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();