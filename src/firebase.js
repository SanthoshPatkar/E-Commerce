import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvheyNRrIPnLs2XCYyXELkx6-9Rzn_LVo",
  authDomain: "amozon-clone-112f4.firebaseapp.com",
  projectId: "amozon-clone-112f4",
  storageBucket: "amozon-clone-112f4.appspot.com",
  messagingSenderId: "1066998201433",
  appId: "1:1066998201433:web:ac086dd9116cfc0b0e8548",
  measurementId: "G-EFQR6DGXSW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
