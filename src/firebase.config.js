// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWMGB9nn37atoNz70FtmeeQv4bktTwbMo",
  authDomain: "house-marketplace-118c6.firebaseapp.com",
  projectId: "house-marketplace-118c6",
  storageBucket: "house-marketplace-118c6.appspot.com",
  messagingSenderId: "1028308628919",
  appId: "1:1028308628919:web:646d2dab46288c13e62432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
