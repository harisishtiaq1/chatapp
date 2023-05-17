import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAyGT_GztxF71-uP639C5c9IFY3eGLXJjk",
  authDomain: "chatapp-a0aec.firebaseapp.com",
  projectId: "chatapp-a0aec",
  storageBucket: "chatapp-a0aec.appspot.com",
  messagingSenderId: "395010914073",
  appId: "1:395010914073:web:7b4bfd8e14e1a02daa7788",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
