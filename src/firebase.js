import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCchw4s3Oej2Wle29ewKyOM8_lR_0adW-0",
    authDomain: "slack-clone-b4221.firebaseapp.com",
    projectId: "slack-clone-b4221",
    storageBucket: "slack-clone-b4221.appspot.com",
    messagingSenderId: "377138555368",
    appId: "1:377138555368:web:c880540e5af1cad5829c5d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore(); 
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth, provider, db}; 