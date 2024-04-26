// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_1,
  authDomain: import.meta.env.VITE_2,
  projectId: import.meta.env.VITE_3,
  storageBucket: import.meta.env.VITE_4,
  messagingSenderId:import.meta.env.VITE_5,
  appId: import.meta.env.VITE_6
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);