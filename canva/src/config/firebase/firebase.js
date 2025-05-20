import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCo9KRFHNnFfmUOqzdvHQA6gXZyAfHTMGI",
  authDomain: "canva-clone-e9314.firebaseapp.com",
  projectId: "canva-clone-e9314",
  storageBucket: "canva-clone-e9314.firebasestorage.app",
  messagingSenderId: "245641046050",
  appId: "1:245641046050:web:965f412554f931b6aa027b",
  measurementId: "G-G99DTWNDQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
// export const temp = new
