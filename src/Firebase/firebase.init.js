// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuHQdvaDjoxDyQUoiUXqij-uGnQwg1GzE",
  authDomain: "coffee-store-app-e6753.firebaseapp.com",
  projectId: "coffee-store-app-e6753",
  storageBucket: "coffee-store-app-e6753.firebasestorage.app",
  messagingSenderId: "180086525122",
  appId: "1:180086525122:web:0e1fe8d54bf6a529bfff5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);