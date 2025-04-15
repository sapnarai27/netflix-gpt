// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4ZY6jaUmvjXgYujbxIs-MXdcQ3JFOmRA",
  authDomain: "netflixgpt-bf570.firebaseapp.com",
  projectId: "netflixgpt-bf570",
  storageBucket: "netflixgpt-bf570.firebasestorage.app",
  messagingSenderId: "271039385709",
  appId: "1:271039385709:web:7a8424e6c2f39718586f64",
  measurementId: "G-1M7B9SF9D8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// keeping here it globally to access across the application
export const auth = getAuth();