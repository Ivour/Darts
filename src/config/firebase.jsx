// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYY0LyoBWhGxjAZcEygAHo31YAqAJa4sQ",
  authDomain: "darts-18325.firebaseapp.com",
  projectId: "darts-18325",
  storageBucket: "darts-18325.appspot.com",
  messagingSenderId: "645563881222",
  appId: "1:645563881222:web:9a8f1dfa6e255dbbabb087",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // pokud háže err, že není firebase initialized, tak je pravděpodobně příkaz na firebase spuštěn dřív než inicializace
//funguje to když exportujeme auth a použijeme v app, ne auth z firebase..

export default app;
