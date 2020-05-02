import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyB-MJJ5Iw8RpgJXPzhEtMhxJO3OsRckIWs",
    authDomain: "furgetmenot-b0e6d.firebaseapp.com",
    databaseURL: "https://furgetmenot-b0e6d.firebaseio.com",
    projectId: "furgetmenot-b0e6d",
    storageBucket: "furgetmenot-b0e6d.appspot.com",
    messagingSenderId: "571796988398",
    appId: "1:571796988398:web:17aac64603d7bc2bb9aeff",
    measurementId: "G-ZHRH4PRZ9E"
})

export const db = app.database()
export const storageRef = app.storage().ref()
export const listingsRef = db.ref('listings')
export const firebase = app
//export const storageRef = storage.ref().child('pets')