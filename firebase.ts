import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDziNV4UPJUu11KpQZD5vt5jO-AioHL7J8",
  authDomain: "smartplug2024.firebaseapp.com",
  databaseURL: "https://smartplug2024-default-rtdb.firebaseio.com",
  projectId: "smartplug2024",
  storageBucket: "smartplug2024.appspot.com",
  messagingSenderId: "993196356479",
  appId: "1:993196356479:web:ebc533929c68ce8481204a",
  measurementId: "G-CR83J0DYWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getFirestore } from "firebase/firestore";
const database = getFirestore(app);
const auth = getAuth(app);

export { database, app, auth };
