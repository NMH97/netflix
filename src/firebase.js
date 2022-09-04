// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbtC2pY81iVyAHK66jQXSN6Q-BX1wohCQ",
  authDomain: "netflix-6ca6c.firebaseapp.com",
  projectId: "netflix-6ca6c",
  storageBucket: "netflix-6ca6c.appspot.com",
  messagingSenderId: "134821580712",
  appId: "1:134821580712:web:b8a52b7e9afca47185979d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
