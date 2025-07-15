// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHrl48xxExAcXG0ndW6QVefUcmcJ8mj4E",
    authDomain: "articret-coffee-shop.firebaseapp.com",
    projectId: "articret-coffee-shop",
    storageBucket: "articret-coffee-shop.firebasestorage.app",
    messagingSenderId: "261468561675",
    appId: "1:261468561675:web:03d4637959ad168525820e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
