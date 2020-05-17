import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DBURL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BKT,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MSG_ID,
    appId: process.env.VUE_APP_FIREBASE_APPID,
    measurementId: process.env.VUE_APP_FIREBASE_MES_ID
})

export const db = app.database()
export const storageRef = app.storage().ref()
export const petsRef = db.ref('pets')
export const firebase = app
