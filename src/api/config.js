// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjUIttLXrBEGISMeuuACC2Jjs6TGKbWnU",
  authDomain: "round13-7564e.firebaseapp.com",
  projectId: "round13-7564e",
  storageBucket: "round13-7564e.appspot.com",
  messagingSenderId: "924319423191",
  appId: "1:924319423191:web:9a1881fc79e63307a56e92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore
export const db = getFirestore(app);
