import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA6l3_EDFYz3w-4eecLCbkjeqnMB1KHwZ8',
  authDomain: 'crwn-clothing-db-2a103.firebaseapp.com',
  projectId: 'crwn-clothing-db-2a103',
  storageBucket: 'crwn-clothing-db-2a103.appspot.com',
  messagingSenderId: '634523110547',
  appId: '1:634523110547:web:bc6bb9b5c9bb5453155166',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log(`error creating user: ${err}`);
    }
  }
  return userDocRef;
};
