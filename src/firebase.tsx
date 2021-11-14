import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyBDoGH1bhvfAtV_-dJnXGBsGIIBExl3kNY",
    authDomain: "study-hive.firebaseapp.com",
    projectId: "study-hive",
    storageBucket: "study-hive.appspot.com",
    messagingSenderId: "596921925231",
    appId: "1:596921925231:web:f86b9a4d3a71ccc960d79a",
    measurementId: "G-LZZSEN1VQF"
})

const firestore = firebase.firestore()

const auth = firebase.auth()

export { firestore, auth }
