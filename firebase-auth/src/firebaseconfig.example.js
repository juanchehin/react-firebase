import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "",  
    authDomain: "",  
    projectId: "",  
    storageBucket: "",  
    messagingSenderId: "",  
    appId: "",  
    measurementId: ""  
  };
   
// Initialize Firebase  
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();

export {auth}