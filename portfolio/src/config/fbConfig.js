import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjZczcOHRrE2lzp773Y5mpUUvgeB6QW_g",
    authDomain: "react-portfolio-87e64.firebaseapp.com",
    databaseURL: "https://react-portfolio-87e64.firebaseio.com",
    projectId: "react-portfolio-87e64",
    storageBucket: "",
    messagingSenderId: "293528077390",
    appId: "1:293528077390:web:2226942210e6aa312baf1f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots:true });

  export default firebase;