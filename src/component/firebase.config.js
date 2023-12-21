// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0KN92lQBVS1xqBlJ293QI-T6rR_26DNQ",
  authDomain: "task-management-5e8c2.firebaseapp.com",
  projectId: "task-management-5e8c2",
  storageBucket: "task-management-5e8c2.appspot.com",
  messagingSenderId: "258232588974",
  appId: "1:258232588974:web:cc72a36699825a1bd72b3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;