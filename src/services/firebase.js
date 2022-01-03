import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCMHgTcBTXiFFjOZhapgRFcH_doGYhH9Ko",
  authDomain: "chatty-5d4db.firebaseapp.com",
  projectId: "chatty-5d4db",
  storageBucket: "chatty-5d4db.appspot.com",
  messagingSenderId: "581625931442",
  appId: "1:581625931442:web:1c7ed11eee95019d7d4bab",
  measurementId: "G-5GV098GS2L"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
export default config;