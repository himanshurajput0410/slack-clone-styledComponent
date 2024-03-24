import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjPQMXrp3H2vHV5o7YeEdaqtpe8hn7q0o",
  authDomain: "slack-clone-1ca27.firebaseapp.com",
  projectId: "slack-clone-1ca27",
  storageBucket: "slack-clone-1ca27.appspot.com",
  messagingSenderId: "1047828885960",
  appId: "1:1047828885960:web:27607154c9dd33aae350fd",
  measurementId: "G-59TSGDWSF3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
