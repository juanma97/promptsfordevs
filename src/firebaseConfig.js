import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, logEvent, setUserProperties } from "firebase/analytics";
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

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

// Función helper mejorada para analytics
export const logAnalyticsEvent = (eventName, eventParams = {}) => {
  try {
    logEvent(analytics, eventName, eventParams);
    
    // Debug en desarrollo
    if (process.env.NODE_ENV === 'development') {
      console.group('Firebase Analytics Event');
      console.log('Event:', eventName);
      console.log('Params:', eventParams);
      console.groupEnd();
    }
  } catch (error) {
    console.error('Error logging analytics event:', error);
  }
};

// Configurar Analytics para desarrollo
if (process.env.NODE_ENV === 'development') {
  // Habilitar debug mode en desarrollo
  window.localStorage.setItem('debug', 'firebase:*');
}

// Configurar propiedades de usuario cuando se identifica
export const setUserAnalytics = (user) => {
  if (user) {
    setUserProperties(analytics, {
      user_id: user.uid,
      user_type: user.emailVerified ? 'verified' : 'unverified',
      // Otras propiedades que quieras trackear
    });
  }
};
