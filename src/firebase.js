import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBxCwoJmQkMsnjFfsAnySj3i1fyW63xqVs",
    authDomain: "clone-b905e.firebaseapp.com",
    projectId: "clone-b905e",
    storageBucket: "clone-b905e.appspot.com",
    messagingSenderId: "3470098492",
    appId: "1:3470098492:web:03809656280e03cfdf0339",
    measurementId: "G-365KDD9CN5"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
