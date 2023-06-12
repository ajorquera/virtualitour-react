// firebase wrapper 
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics'
import { getPerformance } from "firebase/performance";
import { getStorage } from "firebase/storage";
import { FIREBASE_CONFIG } from '../env';

const app = initializeApp(FIREBASE_CONFIG);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const analytics = getAnalytics(app);
export const performance = getPerformance(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider())
