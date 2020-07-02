import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB1sGBbn4iA8XsIXtRojmnTw4zfxMKQyzM",
    authDomain: "divine-homes-db.firebaseapp.com",
    databaseURL: "https://divine-homes-db.firebaseio.com",
    projectId: "divine-homes-db",
    storageBucket: "divine-homes-db.appspot.com",
    messagingSenderId: "915645184960",
    appId: "1:915645184960:web:649352db97703572ad6625",
    measurementId: "G-HP5SE7EX6K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;