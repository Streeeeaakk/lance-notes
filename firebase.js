
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAGtEV1z0yBSBb-mKP5_IC3AMwPCFqYr0",
  authDomain: "react-notes-8ede3.firebaseapp.com",
  projectId: "react-notes-8ede3",
  storageBucket: "react-notes-8ede3.appspot.com",
  messagingSenderId: "1043379277521",
  appId: "1:1043379277521:web:e1527f53ab0df724f1fff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")