// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// The Firebase config object contains unique,
// but non-secret identifiers for your Firebase project.
const firebaseConfig = {
  apiKey: "AIzaSyDoFsqjNLWBBd9nUpL52tTkT9U37gFTEK4",
  authDomain: "template-4d4c9.firebaseapp.com",
  databaseURL: "https://template-4d4c9.firebaseio.com",
  projectId: "template-4d4c9",
  storageBucket: "template-4d4c9.appspot.com",
  messagingSenderId: "383050851788",
  appId: "1:383050851788:web:78b5a8d23cf2b4d3936969",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
