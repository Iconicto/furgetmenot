import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "furgetmenot-b0e6d.firebaseapp.com",
    databaseURL: "https://furgetmenot-b0e6d.firebaseio.com",
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: "furgetmenot-b0e6d.appspot.com",
    messagingSenderId: process.env.FIREBASE_MSG_ID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MES_ID
})

export const db = app.database()
export const storageRef = app.storage().ref()
export const petsRef = db.ref('pets')
export const firebase = app