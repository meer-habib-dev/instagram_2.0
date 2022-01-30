// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6E95QCV2jrP38QmiOBIl-nVNlHz1D7I8",
  authDomain: "instagram-ccd02.firebaseapp.com",
  projectId: "instagram-ccd02",
  storageBucket: "instagram-ccd02.appspot.com",
  messagingSenderId: "365809736164",
  appId: "1:365809736164:web:493e001dfe78f7ac5e4ff1",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
