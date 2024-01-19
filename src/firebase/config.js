import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBaNt2u-sip5t3SWteZ4asEQX3UiygfM1I",
    authDomain: "book-store-ead21.firebaseapp.com",
    projectId: "book-store-ead21",
    storageBucket: "book-store-ead21.appspot.com",
    messagingSenderId: "562955292833",
    appId: "1:562955292833:web:08359dc28503f2011a20e0"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const storage = firebase.storage;

export { projectFirestore, projectAuth, timestamp, storage }