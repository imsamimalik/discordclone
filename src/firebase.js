import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCfFAQiZAEOuazkHQ7dwDpzKCtXnHG0-TE",
    authDomain: "discordbysami.firebaseapp.com",
    projectId: "discordbysami",
    storageBucket: "discordbysami.appspot.com",
    messagingSenderId: "460784330608",
    appId: "1:460784330608:web:f1367bb825646fc34bd1b5",
    measurementId: "G-JQND686G3J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
