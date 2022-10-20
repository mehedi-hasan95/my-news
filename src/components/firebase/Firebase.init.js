// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxhkbjyjsaedaSySld6O9cpljEJ3PAPNI",
  authDomain: "my-news-a07cb.firebaseapp.com",
  projectId: "my-news-a07cb",
  storageBucket: "my-news-a07cb.appspot.com",
  messagingSenderId: "593155728962",
  appId: "1:593155728962:web:c5f8e9037eb18e39666fdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;