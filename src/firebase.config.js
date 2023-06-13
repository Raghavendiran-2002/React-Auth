// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBedNRRbs5uW7AzFm5VfWvIooj6gjx02zg",
  authDomain: "intern-d6566.firebaseapp.com",
  projectId: "intern-d6566",
  storageBucket: "intern-d6566.appspot.com",
  messagingSenderId: "779176772739",
  appId: "1:779176772739:web:3ca0b476fb24519e2347b6",
  measurementId: "G-ZVC71FENZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
