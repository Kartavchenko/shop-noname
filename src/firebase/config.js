import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBnn7szfhtCngMID8yk6x46YkuAm5x3FYI",
  authDomain: "shop-noname.firebaseapp.com",
  projectId: "shop-noname",
  storageBucket: "shop-noname.appspot.com",
  messagingSenderId: "1098966021718",
  appId: "1:1098966021718:web:d3d23d18e0f28fea6eadf7",
  measurementId: "G-200XPN4XZ5"
});

export const auth = getAuth(app);

export const fireDB = getFirestore(app);
