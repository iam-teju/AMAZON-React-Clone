import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGs72_OqkULFfw8ZDWgcCzexhmK3xGZLk",
  authDomain: "clone-67f39.firebaseapp.com",
  projectId: "clone-67f39",
  storageBucket: "clone-67f39.appspot.com",
  messagingSenderId: "521671176615",
  appId: "1:521671176615:web:a67a29fbeab7f3e7794682",
});

const auth = firebase.auth();

export { auth };
