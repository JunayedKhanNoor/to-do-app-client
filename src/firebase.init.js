// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQFiczOVV0znyN570va-gOAwD_HyG8GXc",
  authDomain: "to-do-2623e.firebaseapp.com",
  projectId: "to-do-2623e",
  storageBucket: "to-do-2623e.appspot.com",
  messagingSenderId: "611384710048",
  appId: "1:611384710048:web:723ef190a81b5443a38ac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;