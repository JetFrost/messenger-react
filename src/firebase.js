import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRTfBo5LDpd2oe4rUglCeJj0CTcxzlESw",
  authDomain: "react-messenger-a88d6.firebaseapp.com",
  databaseURL: "https://react-messenger-a88d6-default-rtdb.firebaseio.com",
  projectId: "react-messenger-a88d6",
  storageBucket: "react-messenger-a88d6.appspot.com",
  messagingSenderId: "1064008607633",
  appId: "1:1064008607633:web:334e78b312dd0c41655c30",
  measurementId: "G-M5PVQ49M1V"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;