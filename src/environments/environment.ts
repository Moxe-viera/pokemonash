// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const environment = {
  production: true,
  apiKey: "AIzaSyCNwhjBYomaIlt5VF6J8qdfiGkYgHCCyx0",
  authDomain: "teste-de89f.firebaseapp.com",
  projectId: "teste-de89f",
  storageBucket: "teste-de89f.appspot.com",
  messagingSenderId: "302141234427",
  appId: "1:302141234427:web:76f8b2304ab58db40fe45e",
  measurementId: "G-Y56E1Q8LJC"
};

// Initialize Firebase
const app = initializeApp(environment);
const analytics = getAnalytics(app);