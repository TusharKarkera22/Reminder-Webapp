import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0phlvyxgvbtOjg_XoelPghYggh61dzis",
  authDomain: "remainder-app-6a34d.firebaseapp.com",
  projectId: "remainder-app-6a34d",
  storageBucket: "remainder-app-6a34d.appspot.com",
  messagingSenderId: "15333226574",
  appId: "1:15333226574:web:3abc98a8d412151bcceb1f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
