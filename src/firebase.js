import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCiszZv9fLmlvzkosLPVyeKKba6b7VpO70",
    authDomain: "benjamin-woollens.firebaseapp.com",
    databaseURL: "https://benjamin-woollens.firebaseio.com",
    projectId: "benjamin-woollens",
    storageBucket: "benjamin-woollens.appspot.com",
    messagingSenderId: "978038356212",
    appId: "1:978038356212:web:bc1ae4f88fbfd48034c6a1",
    measurementId: "G-1TJSY9PRM5"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const storage = firebase.storage()