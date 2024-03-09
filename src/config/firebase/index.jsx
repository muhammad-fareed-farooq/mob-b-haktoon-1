// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8bs75niApNGhj9cU-JSZjGdEg6WdokiI",
    authDomain: "webapp-bacf0.firebaseapp.com",
    projectId: "webapp-bacf0",
    storageBucket: "webapp-bacf0.appspot.com",
    messagingSenderId: "427745467410",
    appId: "1:427745467410:web:356512e0a20411b1d14ccb"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const auth = getAuth()
const database = getDatabase()

export { auth, database }