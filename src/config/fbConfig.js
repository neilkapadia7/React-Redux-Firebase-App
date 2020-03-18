import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyC7sdpPa0JrJ2zxnBJrV1NtS_NXvdpfazY",
    authDomain: "project-app-d0780.firebaseapp.com",
    databaseURL: "https://project-app-d0780.firebaseio.com",
    projectId: "project-app-d0780",
    storageBucket: "project-app-d0780.appspot.com",
    messagingSenderId: "463286915599",
    appId: "1:463286915599:web:997ef6b667648953f6c97a",
    measurementId: "G-Y10D38PQ9X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;