import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1CdwX02t43v3cQw3DkpenCI-I-jAMJAk",
    authDomain: "promptsfordevs.firebaseapp.com",
    projectId: "promptsfordevs",
    storageBucket: "promptsfordevs.firebasestorage.app",
    messagingSenderId: "238266728311",
    appId: "1:238266728311:web:ce794da6c9330f9a812b72",
    measurementId: "G-H5HS96ZCB7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db, analytics };
