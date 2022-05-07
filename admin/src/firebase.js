// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwEUijeEDRpiItqWe-C7Qyz4PnXHeFk58",
  authDomain: "shop-33428.firebaseapp.com",
  projectId: "shop-33428",
  storageBucket: "shop-33428.appspot.com",
  messagingSenderId: "653455401710",
  appId: "1:653455401710:web:d4948098cb98c768d649ff",
  measurementId: "G-3ZF87KRRKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
