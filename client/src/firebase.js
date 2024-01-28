


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aurora-7cd3e.firebaseapp.com",
  projectId: "aurora-7cd3e",
  storageBucket: "aurora-7cd3e.appspot.com",
  messagingSenderId: "996646391401",
  appId: "1:996646391401:web:a0db7ec8930f8364a25cf8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
