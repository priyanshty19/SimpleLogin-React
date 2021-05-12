import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCYny0Fdem96wy7ue7wy9P4p5KSMZtSjfg",
    authDomain: "login-app-edead.firebaseapp.com",
    databaseURL: "https://login-app-edead-default-rtdb.firebaseio.com",
    projectId: "login-app-edead",
    storageBucket: "login-app-edead.appspot.com",
    messagingSenderId: "311134364061",
    appId: "1:311134364061:web:42d61f8e3f74b9bbeccf74",
    measurementId: "G-EYZDXMQS75"
  };
// Initialize Firebase
const fbConfig = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fbConfig;