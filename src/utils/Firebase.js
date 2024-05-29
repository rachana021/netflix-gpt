// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALFq0mXXl5dSP2QWWO65f7Xee_KbTPRnk",
  authDomain: "netflixgpt-a4fad.firebaseapp.com",
  projectId: "netflixgpt-a4fad",
  storageBucket: "netflixgpt-a4fad.appspot.com",
  messagingSenderId: "556473436147",
  appId: "1:556473436147:web:68a8660cf0082ced3df486",
  measurementId: "G-5VNXDWCMNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();