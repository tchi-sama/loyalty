import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc2IM53eIRFbtO_IVsAJN7NHpbxSkToSU",
  authDomain: "loyalty-84896.firebaseapp.com",
  projectId: "loyalty-84896",
  storageBucket: "loyalty-84896.appspot.com",
  messagingSenderId: "520500353649",
  appId: "1:520500353649:web:3b2f4cfeb64b417af0d9d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);