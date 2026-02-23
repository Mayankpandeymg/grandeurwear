import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIRCbHK0pzUPLoz_xYsIn2_obVdzXTlBE",
  authDomain: "grandeur-93d1e.firebaseapp.com",
  projectId: "grandeur-93d1e",
  storageBucket: "grandeur-93d1e.firebasestorage.app",
  messagingSenderId: "726845305298",
  appId: "1:726845305298:web:dacbd4bf6273464d39980b",
  measurementId: "G-RG6Z01FN8E",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
