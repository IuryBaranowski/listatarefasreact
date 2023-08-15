import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCrWoH7npSXGHX5z3KmyEtkN3-dumqfk7A",
    authDomain: "cursoreact-eb15f.firebaseapp.com",
    projectId: "cursoreact-eb15f",
    storageBucket: "cursoreact-eb15f.appspot.com",
    messagingSenderId: "379872590939",
    appId: "1:379872590939:web:8453cc6c867ef794d3937e",
    measurementId: "G-JQSWB629F1"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };