import * as firebase from "firebase"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8s8r1oGd7TgmGHhS-R4UED8DOhtv6ayk",
  authDomain: "ecommerce-99cad.firebaseapp.com",
  projectId: "ecommerce-99cad",
  storageBucket: "ecommerce-99cad.appspot.com",
  messagingSenderId: "508353262773",
  appId: "1:508353262773:web:42f2be5976180931e3fafc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();