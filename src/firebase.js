// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzua0DIAWF5Vm55i7Dg9nKE5-kRomv-As",
  authDomain: "inventory-management-a93c6.firebaseapp.com",
  projectId: "inventory-management-a93c6",
  storageBucket: "inventory-management-a93c6.appspot.com",
  messagingSenderId: "295515909446",
  appId: "1:295515909446:web:af91929268c815bcd70947",
  measurementId: "G-XMP1KXCQ0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}