import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZI45t-5uiNXFKdQb91Hky-47uHxKejxg",
  authDomain: "twitterclone-edc53.firebaseapp.com",
  projectId: "twitterclone-edc53",
  storageBucket: "twitterclone-edc53.appspot.com",
  messagingSenderId: "273056041946",
  appId: "1:273056041946:web:d529aa695147060a3d4ee3",
  measurementId: "G-12QNTSZKBJ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
