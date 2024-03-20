// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ghardekho-34216.firebaseapp.com",
  projectId: "ghardekho-34216",
  storageBucket: "ghardekho-34216.appspot.com",
  messagingSenderId: "275900231121",
  appId: "1:275900231121:web:032ca4d6af1148862344f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);