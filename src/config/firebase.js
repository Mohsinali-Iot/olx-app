import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
   var firebaseConfig = {
    apiKey: "AIzaSyAbrrxZkXIKDB5qGUQQXj1d3qpuRcT53Gs",
    authDomain: "reactapp-f2960.firebaseapp.com",
    databaseURL: "https://reactapp-f2960.firebaseio.com",
    projectId: "reactapp-f2960",
    storageBucket: "reactapp-f2960.appspot.com",
    messagingSenderId: "5193920757",
    appId: "1:5193920757:web:9201df559774acc11495bc",
    measurementId: "G-0QKZWWYTQ9"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;