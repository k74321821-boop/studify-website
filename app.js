import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlUahSYdr19cnL92HUb01G2cs2o8hh6q8",
  authDomain: "studify-net.firebaseapp.com",
  projectId: "studify-net",
  storageBucket: "studify-net.firebasestorage.app",
  messagingSenderId: "783702670387",
  appId: "1:783702670387:web:86f0a7e2b10afc2f5b7746",
  measurementId: "G-FDVF1WRR7G"
};

// Firebase starten
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Firebase geladen");
