import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBvdVB_wp6cq4E3wd3pKVkvRH32XIGmzHU",
    authDomain: "olx-clone-6363f.firebaseapp.com",
    projectId: "olx-clone-6363f",
    storageBucket: "olx-clone-6363f.appspot.com",
    messagingSenderId: "922640468694",
    appId: "1:922640468694:web:a76658e77e253d729cd777",
    measurementId: "G-KFH8MFDHFW"
  };

 export default firebase.initializeApp(firebaseConfig)