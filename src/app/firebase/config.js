import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdYsbC1tkuKnVnEC28g7wELdbSL2Wfjfw",
  authDomain: "sammies-6c2a6.firebaseapp.com",
  projectId: "sammies-6c2a6",
  storageBucket: "sammies-6c2a6.appspot.com",
  messagingSenderId: "295507731612",
  appId: "1:295507731612:web:1615fd6a9a7833ff2ef959",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };
