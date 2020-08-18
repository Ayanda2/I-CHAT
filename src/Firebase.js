import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDeih4YnP-Op0uBpI4nPeXNCJDylat21LY",
  authDomain: "chatter-c0317.firebaseapp.com",
  databaseURL: "https://chatter-c0317.firebaseio.com",
  projectId: "chatter-c0317",
  storageBucket: "chatter-c0317.appspot.com",
  messagingSenderId: "640053511262",
  appId: "1:640053511262:web:0e38ca7ba8769ff525a0cf",
  measurementId: "G-Z5NBG4811M",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
