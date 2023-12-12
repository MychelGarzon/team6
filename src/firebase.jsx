import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration
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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export const getDisplayNameByUid = async (uid) => {
  const userRef = doc(db, 'users', uid);
  const userSnapshot = await getDoc(userRef);

  if (userSnapshot.exists()) {
    return userSnapshot.data().displayName;
  } else {
    return null; // User not found in Firestore
  }
};

const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = doc(firestore, 'users', user.uid);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user profile', error.message);
    }
  }

  return userRef;
};



export { auth, firestore, createUserProfileDocument };