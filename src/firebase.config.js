import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCv7M3g9dZ0F6IUgFgqqgwSb1oqFoXnb2A",
    authDomain: "food-delivery-website-45287.firebaseapp.com",
    databaseURL: "https://food-delivery-website-45287-default-rtdb.firebaseio.com",
    projectId: "food-delivery-website-45287",
    storageBucket: "food-delivery-website-45287.appspot.com",
    messagingSenderId: "1042493683594",
    appId: "1:1042493683594:web:ac385767d35b47cd093a73"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app, firestore, storage};