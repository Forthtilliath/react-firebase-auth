import firebase from "firebase";

const firebaseConfig = {
    apiKey: 'AIzaSyC49CgAePVLr12mlrS4FOJRXeIwXoqcEO8',
    authDomain: 'react-firebase-auth-f967e.firebaseapp.com',
    // projectId: 'react-firebase-auth-f967e',
    // storageBucket: 'react-firebase-auth-f967e.appspot.com',
    // messagingSenderId: '514381706551',
    // appId: '1:514381706551:web:86ec64e02f8b70cd6b16b2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;