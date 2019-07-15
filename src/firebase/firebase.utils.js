import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { async } from 'q';

const config = {
    
        apiKey: "AIzaSyCiozPGhMOneDb6a0dGrsmwOoxDGQqo2d4",
        authDomain: "e-com-ec7f5.firebaseapp.com",
        databaseURL: "https://e-com-ec7f5.firebaseio.com",
        projectId: "e-com-ec7f5",
        storageBucket: "",
        messagingSenderId: "736166978274",
        appId: "1:736166978274:web:cef39f225929997c"
    
};

export const createUserProfileDocument = async (userAuth,additionalData)=> {
        if (!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if(!snapShot.exists){
                const {displayName, email} = userAuth;
                const createdAt = new Date();

                try{
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                } catch (error) {
                        console.log('error creating user',error.message);
                }
                }
                return userRef;
        }


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;