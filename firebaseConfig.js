import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCR3zS99IuQT-B7TuB5cSF1rGhO-4WBpuw',
  authDomain: 'stockflow-21586.firebaseapp.com',
  databaseURL: 'https://stockflow-21586-default-rtdb.firebaseio.com',
  projectId: 'stockflow-21586',
  storageBucket: 'stockflow-21586.appspot.com',
  messagingSenderId: '15800466130',
  appId: '1:15800466130:web:a6b3f29ee9576ba951cb0b',
  measurementId: 'G-VP1Q99J115'
}

export const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
