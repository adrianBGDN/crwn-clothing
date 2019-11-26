import firebase from 'firebase/app'; //we also need the 'firebase' keyword in order to have access to the below
import 'firebase/firestore';         //for the DB
import 'firebase/auth';              //for authentication

const config = {
    apiKey: "AIzaSyCDPsdthiFQwDC7OrgVIRlSGl-iRQK-bUo",
    authDomain: "crown-db-f5791.firebaseapp.com",
    databaseURL: "https://crown-db-f5791.firebaseio.com",
    projectId: "crown-db-f5791",
    storageBucket: "crown-db-f5791.appspot.com",
    messagingSenderId: "523376455028",
    appId: "1:523376455028:web:faca4df958bfadabc11021",
    measurementId: "G-DYFB1R7L24"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();                 //gives access the GoogleAuthProvider class from the authentication library
provider.setCustomParameters({ prompt: 'select_account' });              //to always triger the Google pop-up whenever we use the GoogleAuthProvider for authentication and sign-in
export const signInWithGoogle = () => auth.signInWithPopup(provider);    //takes the provider class to be used with Google sign-in

export default firebase;