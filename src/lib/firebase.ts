import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFYs5D_PsQzTpgQ84UrE-vj3xkpfzWIyM",
  authDomain: "toxiguard-6056c.firebaseapp.com",
  projectId: "toxiguard-6056c",
  storageBucket: "toxiguard-6056c.firebasestorage.app",
  messagingSenderId: "1088983928672",
  appId: "1:1088983928672:web:2b917235354e94212c9805",
  measurementId: "G-XYZXMBVPLT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null; 