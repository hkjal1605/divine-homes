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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log(error.message);
        }

    }

    return userRef;

}

export const addCityList = async (cityKey, cityListToAdd) => {
    const cityRef = firestore.collection(cityKey);

    const batch = firestore.batch();

    cityListToAdd.forEach(obj => {
        const newDocRef = cityRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const addHouseList = async (houseKey, houseListToAdd) => {
    const houseRef = firestore.collection(houseKey);

    const batch = firestore.batch();

    houseListToAdd.forEach(obj => {
        const newDocRef = houseRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const convertCitySnapshotToMap = (citySnapshot) => {
    const transformedCityList = citySnapshot.docs.map(doc => {
        const { title, description, routeName } = doc.data();

        return {
            id: doc.id,
            routeName: encodeURI(routeName),
            title,
            description
        }
    });

    return transformedCityList.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {})
}

export const convertHouseSnapshotToMap = (houseSnapshot) => {
    const transformedHouseList = houseSnapshot.docs.map(doc => {
        const { title, houses, description } = doc.data();

        return {
            id: doc.id,
            title: title,
            routeName: encodeURI(title.toLowerCase()),
            description,
            houses
        }
    });

    return transformedHouseList.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {})
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;