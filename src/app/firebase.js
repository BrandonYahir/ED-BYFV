// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFS5cvuYitHQuHI1q5GC0w_yLNmwiftjw",
  authDomain: "ed-byfv.firebaseapp.com",
  projectId: "ed-byfv",
  storageBucket: "ed-byfv.appspot.com",
  messagingSenderId: "179971843766",
  appId: "1:179971843766:web:5c57027800d0888c4ee817"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)