import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAQYIjv3NchSNr2eJfKCMaDMfyvqA2ashc",
  authDomain: "geekster-ecom-20a07.firebaseapp.com",
  projectId: "geekster-ecom-20a07",
  storageBucket: "geekster-ecom-20a07.appspot.com",
  messagingSenderId: "1028832296818",
  appId: "1:1028832296818:web:2311f53634c4b48d33a7eb"
};

// initialize firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);