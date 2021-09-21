import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDBzyYDU5xh0QUHiFyV4yF38hv-GMijwl0",
    authDomain: "crwn-db-bf682.firebaseapp.com",
    projectId: "crwn-db-bf682",
    storageBucket: "crwn-db-bf682.appspot.com",
    messagingSenderId: "533398162735",
    appId: "1:533398162735:web:6ee988426428b9395865da",
    measurementId: "G-PLBKG2PYH0"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;