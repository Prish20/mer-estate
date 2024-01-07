// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a3f34.firebaseapp.com",
  projectId: "mern-estate-a3f34",
  storageBucket: "mern-estate-a3f34.appspot.com",
  messagingSenderId: "540471374826",
  appId: "1:540471374826:web:b3b7b104d9e3b1a7e9f893"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);