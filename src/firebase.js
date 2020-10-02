import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAChDHjIZ85y9OEe1OyObFyvAwjIzHYAxw",
    authDomain: "calendar-7c2e9.firebaseapp.com",
    databaseURL: "https://calendar-7c2e9.firebaseio.com",
    projectId: "calendar-7c2e9",
    storageBucket: "calendar-7c2e9.appspot.com",
    messagingSenderId: "195965726969",
    appId: "1:195965726969:web:792dc22547b0370c317228",
    measurementId: "G-PFKBVKFYQL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase