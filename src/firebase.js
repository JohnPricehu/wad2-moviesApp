import firebase from "firebase";
require('firebase/auth');
// must be listed before other Firebase SDKs
require('firebase/app');
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPmkQAwK9LcQym6EJiX0irEpPOmgl1t5U",
  authDomain: "movies-app-e298c.firebaseapp.com",
  databaseURL: "https://movies-app-e298c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movies-app-e298c",
  storageBucket: "movies-app-e298c.appspot.com",
  messagingSenderId: "258401266257",
  appId: "1:258401266257:web:494514be44cd6f65536670",
  measurementId: "G-ZWH7F9SHPE"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;