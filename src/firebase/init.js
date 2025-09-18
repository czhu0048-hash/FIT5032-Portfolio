import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAK-0cHNSHF6kMlYVzllouQzbws4tfvOBE",
  authDomain: "fit5032-week6-fd434.firebaseapp.com",
  projectId: "fit5032-week6-fd434",
  storageBucket: "fit5032-week6-fd434.firebasestorage.app",
  messagingSenderId: "428927775539",
  appId: "1:428927775539:web:50d41c6662c3de9d7bc446"
};

initializeApp(firebaseConfig);
const db = getFirestore();
export default db;