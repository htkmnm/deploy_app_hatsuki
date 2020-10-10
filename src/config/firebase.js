import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

// mydatacreate
export const mydataCreate = async (first, last, born) => {
    await db
        .collection('user')
        .add({
            first: first,
            last: last,
            born: born,
        })
        .then(function (docRef) {
            console.log('Document written with ID:', docRef.id);
        })
        .catch(function (error) {
            console.error('Error adding document:', error);
        });
};

// create
export const createData = async () => {
    await db
        .collection('user')
        .add({
            first: 'Ada',
            last: 'Lovelase',
            born: 1815,
        })
        .then(function (docRef) {
            console.log('Document written with ID:', docRef.id);
        })
        .catch(function (error) {
            console.error('Error adding document:', error);
        });
};

// read
export const readData = async () => {
    await db
        .collection('user')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`first:${doc.data().first}`);
                console.log(`last:${doc.data().last}`);
                console.log(`born:${doc.data().born}`);
            });
        });
};

// update
export const updateData = async () => {
    const ref = await db
        .collection('user')
        .doc('MJhMsl4PHWYuSvTH7qlL');
    // Set the "capital" field of the city 'DC
    return ref
        .update({
            first: 'hatsuki',
            last: 'minami',
            born: 1992,
        })
        .then(function () {
            console.log('Document successfully updated!');
        })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error('Error updating document:', error);
        });
};
// delete
export const deleteData = async () => {
    await db
        .collection("user")
        .doc('MJhMsl4PHWYuSvTH7qlL')
        .delete()
        .then(function () {
            console.log("Document successfully deleted!");
        })
        .catch(function (error) {
            console.error("Error removing document: ", error);
        });
};

export default firebase;