import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJgDkEusrFgVIm4iqhRWlIxQ9M2SVpyJM",
  authDomain: "gopikrishnan-248.firebaseapp.com",
  projectId: "gopikrishnan-248",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
