import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrbGkl9FZNPzOyGEWWKWPF_V2AVBWS_zc",
  authDomain: "chatapp-b7af1.firebaseapp.com",
  projectId: "chatapp-b7af1",
  storageBucket: "chatapp-b7af1.appspot.com",
  messagingSenderId: "549720874162",
  appId: "1:549720874162:web:ccabe86e07dab77dd8bdab",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
