import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration

    const firebaseConfig = {
        apiKey: "AIzaSyDW4UFk6heXyEv0HQ7nYWMjv22PV-qRgfg",
        authDomain: "nextjs-practice-2ad9c.firebaseapp.com",
        projectId: "nextjs-practice-2ad9c",
        storageBucket: "nextjs-practice-2ad9c.appspot.com",
        messagingSenderId: "949983403903",
        appId: "1:949983403903:web:6ab09f98f87444a901444a"
      };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 