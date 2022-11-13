// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzCSh7gdGZCpcHVs9GsQ4wg9iZ8yVgp6A",
  authDomain: "blog-841f1.firebaseapp.com",
  projectId: "blog-841f1",
  storageBucket: "blog-841f1.appspot.com",
  messagingSenderId: "164502158685",
  appId: "1:164502158685:web:c93e108b621c71d117fcb4",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
