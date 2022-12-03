import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJOtXL2444rVLDnDiyU45cI5CxELDCCQw",
  authDomain: "clone-91b78.firebaseapp.com",
  projectId: "clone-91b78",
  storageBucket: "clone-91b78.appspot.com",
  messagingSenderId: "520757168589",
  appId: "1:520757168589:web:28e3f5b513c5487e325c84",
  measurementId: "G-WTFZXYTEEM",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
