import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAc6wv9g8MWJ9zAbPrVQDjo8QdH77tOn-w",
  authDomain: "clone-d048e.firebaseapp.com",
  projectId: "clone-d048e",
  storageBucket: "clone-d048e.appspot.com",
  messagingSenderId: "714068771530",
  appId: "1:714068771530:web:7c75953437d930aad1aa33",
  measurementId: "G-4CVHXTW5FW"
});

export const auth = getAuth(firebaseApp);
