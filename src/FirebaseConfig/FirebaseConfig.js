// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCOhgkTgslxXKxGjsiv2t5GE_h4kXj75w0",
    authDomain: "readie-cfdab.firebaseapp.com",
    databaseURL: "https://readie-cfdab-default-rtdb.firebaseio.com",
    projectId: "readie-cfdab",
    storageBucket: "readie-cfdab.appspot.com",
    messagingSenderId: "555562763403",
    appId: "1:555562763403:web:3ce1706692ce825bd3808e"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export default app