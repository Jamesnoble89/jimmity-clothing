import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA8Ueo9W89SlJ_0CARNPj3VzmhPusj1nks",
    authDomain: "jimmity-clothing.firebaseapp.com",
    databaseURL: "https://jimmity-clothing.firebaseio.com",
    projectId: "jimmity-clothing",
    storageBucket: "jimmity-clothing.appspot.com",
    messagingSenderId: "289322479798",
    appId: "1:289322479798:web:ac95a5334ed51209d6b617",
    measurementId: "G-71ZZ7QKPFB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;