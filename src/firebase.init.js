// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCecT6uyyoFmNQ3Oi9GpRirYJAWrllMChA",
  authDomain: "car-manufacturer-afec8.firebaseapp.com",
  projectId: "car-manufacturer-afec8",
  storageBucket: "car-manufacturer-afec8.appspot.com",
  messagingSenderId: "364114648660",
  appId: "1:364114648660:web:d2632e372f30a8f190d7c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
export const db = getFirestore(app);
