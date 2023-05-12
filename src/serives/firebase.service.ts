import { initializeApp } from "firebase/app";
import { config } from "./firebase.config";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = config;

// Initialize Firebase
initializeApp(firebaseConfig);
