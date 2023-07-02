import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy47ZlBIU5gZT_1-m7uAAihFZDUuM6VKs",
  authDomain: "chat-app-9249a.firebaseapp.com",
  projectId: "chat-app-9249a",
  storageBucket: "chat-app-9249a.appspot.com",
  messagingSenderId: "611655314120",
  appId: "1:611655314120:web:4910d5142ce6e4019c13fd",
  measurementId: "G-DBJ77XGPZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);