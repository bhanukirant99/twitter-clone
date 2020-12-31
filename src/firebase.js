import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHDFf98-lOtwqqnTa4y9cCWEmNzQNxPc0",
  authDomain: "twitter-clone-4d893.firebaseapp.com",
  projectId: "twitter-clone-4d893",
  storageBucket: "twitter-clone-4d893.appspot.com",
  messagingSenderId: "304999756434",
  appId: "1:304999756434:web:fe94e16f293c8d11342c4b",
  measurementId: "G-RVRDQHV0K2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
