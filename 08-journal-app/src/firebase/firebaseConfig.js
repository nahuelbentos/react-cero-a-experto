import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyDNJyaV1gQ4uKCoVZCrBAdiJD-GZmu6OdE',
  authDomain: 'react-app-curso-nbentos.firebaseapp.com',
  projectId: 'react-app-curso-nbentos',
  storageBucket: 'react-app-curso-nbentos.appspot.com',
  messagingSenderId: '425434689587',
  appId: '1:425434689587:web:93d0c4fe72f2f6c6c3b346',
};

 const firebaseConfigTesting = {
   apiKey: 'AIzaSyDu6bqKrobFWeClhgib3q2hEPcgquMOWU8',
   authDomain: 'redux-demo-nbentos.firebaseapp.com',
   projectId: 'redux-demo-nbentos',
   storageBucket: 'redux-demo-nbentos.appspot.com',
   messagingSenderId: '262105611463',
   appId: '1:262105611463:web:8ef984519ab349f38592e2',
 };


if( process.env.NODE_ENV === 'test' ) {
    // testing
    firebase.initializeApp(firebaseConfigTesting);
} else {
//dev/prod
firebase.initializeApp(firebaseConfig);
}


const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}