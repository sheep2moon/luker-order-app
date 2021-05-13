import 'firebase/firestore';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyBZ7K9CeuSjob6yEeQnsOKn8KkkrnHEzvY',
  authDomain: 'luker-shop.firebaseapp.com',
  projectId: 'luker-shop',
  storageBucket: 'luker-shop.appspot.com',
  messagingSenderId: '475928953712',
  appId: '1:475928953712:web:94c4a71384fa9bb9b045b5',
  measurementId: 'G-1E78VRKRSD',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); //Jeżeli juz zainicjalizowana
}

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp, auth };
