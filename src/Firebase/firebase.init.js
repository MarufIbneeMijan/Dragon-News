// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA-CV5OTXJFhZ8RD-MSvVZi-m0VN0cvAQ",
  authDomain: "dragon-news-5fec5.firebaseapp.com",
  projectId: "dragon-news-5fec5",
  storageBucket: "dragon-news-5fec5.firebasestorage.app",
  messagingSenderId: "129018399891",
  appId: "1:129018399891:web:d4ce5be338a8424dc21166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;