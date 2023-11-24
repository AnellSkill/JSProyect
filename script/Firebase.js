// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAJuVFAX37DItkfas7ckMlkU-Zw9yF6uEg",
    authDomain: "stripe-b8479.firebaseapp.com",
    projectId: "stripe-b8479",
    storageBucket: "stripe-b8479.appspot.com",
    messagingSenderId: "449978367263",
    appId: "1:449978367263:web:28f64c6b9176bb2405442a",
    measurementId: "G-H90K5WPHDP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();