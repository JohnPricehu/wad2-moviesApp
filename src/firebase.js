import { initializeApp } from "firebase/app";
// import {
//     getAuth
//   } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPmkQAwK9LcQym6EJiX0irEpPOmgl1t5U",
  authDomain: "movies-app-e298c.firebaseapp.com",
  projectId: "movies-app-e298c",
  storageBucket: "movies-app-e298c.appspot.com",
  messagingSenderId: "258401266257",
  appId: "1:258401266257:web:494514be44cd6f65536670",
  measurementId: "${config.measurementId}",
  databaseURL: "https://movies-app-e298c-default-rtdb.europe-west1.firebasedatabase.app/",
};
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
// const app = firebase.initializeApp(firebaseConfig);   
// Initialize Firebase
// export const auth = getAuth()
export default app