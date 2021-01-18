import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// information from firebase website
const config = {
    apiKey: "AIzaSyAuzX00zi9FWxGBdbczxn28ytures4LoZY",
    authDomain: "crwn-db-db8b0.firebaseapp.com",
    projectId: "crwn-db-db8b0",
    storageBucket: "crwn-db-db8b0.appspot.com",
    messagingSenderId: "424434570591",
    appId: "1:424434570591:web:163af932072510498f12ea",
    measurementId: "G-G1LG54M1HV"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


// setup google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

