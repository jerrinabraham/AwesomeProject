import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdRRfFFyIzygT-ntivvYCXuJjBgzYlI6Y",
    authDomain: "whatsapp-b583f.firebaseapp.com",
    projectId: "whatsapp-b583f",
    storageBucket: "whatsapp-b583f.appspot.com",
    messagingSenderId: "968135201155",
    appId: "1:968135201155:web:ef50ea003270180df7e6b6",
    measurementId: "G-WX34XS7L9P"
  };

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)
}

export {firebase}