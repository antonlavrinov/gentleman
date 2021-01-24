import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAaR44msio8UspZJgPHtLSeXWYCsG0hkC4",
    authDomain: "gentlemanecommerce-3d474.firebaseapp.com",
    databaseURL: "https://gentlemanecommerce-3d474.firebaseio.com",
    projectId: "gentlemanecommerce-3d474",
    storageBucket: "gentlemanecommerce-3d474.appspot.com",
    messagingSenderId: "1059027200247",
    appId: "1:1059027200247:web:a1eb2e4020782022824bf2",
    measurementId: "G-84TW250GLB"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData ) => {
 if(!userAuth) return;

 const userRef = firestore.doc(`users/${userAuth.uid}`)
 const snapShot = await userRef.get()

 if(!snapShot.exists) {
     const {displayName, email} = userAuth;
     const createdAt = new Date();

     try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
     } catch(err) {
        console.log('error creating user', err.message)
     }

     
 }
 return userRef;

 


}



export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;