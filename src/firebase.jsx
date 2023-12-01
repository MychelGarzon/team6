import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBsSrJC02Z89UUA-w58f22roCztOY5vqHI",
    authDomain: "t6store-5ea2a.firebaseapp.com",
    databaseURL: "https://t6store-5ea2a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "t6store-5ea2a",
    storageBucket: "t6store-5ea2a.appspot.com",
    messagingSenderId: "548741956355",
    appId: "1:548741956355:web:29948ff4104c96c0cddf36",
    measurementId: "G-ELDNB6B6Y6"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);

  console.log('Firebase is connected, and Firestore instance is created:', firestore);
  alert('Firebase is connected, and Firestore instance is created');

  
  
  export { firestore };