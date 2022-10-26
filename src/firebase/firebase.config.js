// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZGNorAnrlVVIrcBk8jRm_b92DEEmICoo",
    authDomain: "edu-station-209b8.firebaseapp.com",
    projectId: "edu-station-209b8",
    storageBucket: "edu-station-209b8.appspot.com",
    messagingSenderId: "869279057682",
    appId: "1:869279057682:web:c03b725bd81567acd815cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;