// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth,onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING,
  appId: import.meta.env.VITE_APP_APP_ID,
  // measurementId: "G-TQ76Y68M9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

//creating a new user
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

//logging in a user
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

//signout a user
export const logout = () => {
  return signOut(auth)
}

//getting the login user details
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(false)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => 
      setCurrentUser(user)
    )
    return unsubscribe; // unsubscribe on unmount
  }, [])
}