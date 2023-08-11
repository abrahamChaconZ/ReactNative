import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAuS-jLYy9aDXBVyP9-BtumvbxVazNbv1Q",
  authDomain: "nombredelproyecto-a769e.firebaseapp.com",
  projectId: "nombredelproyecto-a769e",
  storageBucket: "nombredelproyecto-a769e.appspot.com",
  messagingSenderId: "618853239806",
  appId: "1:618853239806:web:f94434dfeb8553857c4eaf",
  measurementId: "G-XKN14J744W"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
