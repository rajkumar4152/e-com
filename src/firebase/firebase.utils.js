import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyCiozPGhMOneDb6a0dGrsmwOoxDGQqo2d4",
        authDomain: "e-com-ec7f5.firebaseapp.com",
        databaseURL: "https://e-com-ec7f5.firebaseio.com",
        projectId: "e-com-ec7f5",
        storageBucket: "",
        messagingSenderId: "736166978274",
        appId: "1:736166978274:web:cef39f225929997c"
    
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;