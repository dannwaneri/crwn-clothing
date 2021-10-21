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

  export const createUserProfileDocument = async (userAuth,additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapshot = await userRef.get();
      
      if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })

        } catch(error){
          console.log('error creating user',error.message);
        }
      }
      return userRef;
  }

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
  // creates a new collection reference(memory)in firestore with collectionKey as its name.
const collectionRef = firestore.collection(collectionKey)

// batch groups statements preserving atomicity of the firestore DB 
const batch = firestore.batch();
objectsToAdd.forEach(obj => {
  const newDocRef = collectionRef.doc();
  batch.set(newDocRef,obj);
})
return await batch.commit();
} 


export const convertCollectionsSnapshotToMap = (collections)  => {
const transformedCollection = collections.docs.map(doc => {
  const{title,items} = doc.data();
  return{
    routeName:encodeURI(title.toLowerCase()),
    id:doc.id,
    items,
    title,
  };
})
return transformedCollection.reduce((accumulator,collection) => {
accumulator[collection.title.toLowerCase()] = collection; 
return accumulator
},{})
}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;