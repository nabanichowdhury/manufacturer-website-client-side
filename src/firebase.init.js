import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSLsq-oV89O0D6-If92UVKcEQDix9aSNk",
  authDomain: "manufacturer-website-cb94a.firebaseapp.com",
  projectId: "manufacturer-website-cb94a",
  storageBucket: "manufacturer-website-cb94a.appspot.com",
  messagingSenderId: "365060959308",
  appId: "1:365060959308:web:df3810ee5f1e673fb998e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
