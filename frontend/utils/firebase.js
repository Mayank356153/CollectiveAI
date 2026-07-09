// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "collectiveai-bdf40.firebaseapp.com",
  projectId: "collectiveai-bdf40",
  storageBucket: "collectiveai-bdf40.firebasestorage.app",
  messagingSenderId: "99612106334",
  appId: "1:99612106334:web:36fa55891f5f9a6885decf",
  measurementId: "G-MYSG3NXRDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app