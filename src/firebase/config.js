// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8o6tEnEOTSZfoate9CvlrgnhhF3gzyKs",
  authDomain: "celbellorin.firebaseapp.com",
  projectId: "celbellorin",
  storageBucket: "celbellorin.appspot.com",
  messagingSenderId: "655951410167",
  appId: "1:655951410167:web:71620bbc1953cf7f12f4f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);