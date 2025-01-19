import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1lO_8ARdZ5QOV3MY_1DUvnXQ_nXkb608",
    authDomain: "vue-blog-system-abf9a.firebaseapp.com",
    projectId: "vue-blog-system-abf9a",
    storageBucket: "vue-blog-system-abf9a.firebasestorage.app",
    messagingSenderId: "620849269987",
    appId: "1:620849269987:web:e9e87d632d832007a0c9d6",
    measurementId: "G-N2S3XHP9Q8"
  };

  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export{db,timestamp,auth}