// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2HzEVS_nlU4hUXWYZ5g5jScbDChPrmC4",
  authDomain: "nextjs-firebase-auth-5d94b.firebaseapp.com",
  projectId: "nextjs-firebase-auth-5d94b",
  storageBucket: "nextjs-firebase-auth-5d94b.appspot.com",
  messagingSenderId: "609947517157",
  appId: "1:609947517157:web:637324eacf8258ac8e540c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();