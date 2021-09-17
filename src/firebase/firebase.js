import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBMtd_8D5b4GAXJYMZI9psCIFmSPnRTI0",
  authDomain: "whatsapp-clone-reactjs-17106.firebaseapp.com",
  projectId: "whatsapp-clone-reactjs-17106",
  storageBucket: "whatsapp-clone-reactjs-17106.appspot.com",
  messagingSenderId: "444166551178",
  appId: "1:444166551178:web:b5d750a76f765ce4d39f73",
  measurementId: "G-4SXKQ7TYDH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
