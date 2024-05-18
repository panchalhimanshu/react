// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVbo9LC9PiyF9CCQQ50dpYTLvtGULFqAw",
  authDomain: "todo-180f5.firebaseapp.com",
  databaseURL: "https://todo-180f5-default-rtdb.firebaseio.com",
  projectId: "todo-180f5",
  storageBucket: "todo-180f5.appspot.com",
  messagingSenderId: "998139012396",
  appId: "1:998139012396:web:a0a8ba2679983c932c7889"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 
export const data = getFirestore(app)

export const maindata = collection(data , "firestore")

