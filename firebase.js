// ================= Firebase =================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCg8ej80A4VnHFK2iuXx4nhEt9Wtmf4ulU",
  authDomain: "smart-farm-8d3f5.firebaseapp.com",
  projectId: "smart-farm-8d3f5",
  storageBucket: "smart-farm-8d3f5.appspot.com",
  messagingSenderId: "317371842198",
  appId: "1:317371842198:web:4765ea8c0036ae64b10cb7",
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
