import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.init";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    // Google Sign In 
    const googleSignIn = (provider) => {
        signInWithPopup(auth, provider)
    }

    // Sign Out
    const logOut = () => {
        signOut(auth).then(() => {})
        .catch((error) => {});
    }

    // Registration Form
    const registrationWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    // Login with Email
    const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

    // Update user Name
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            console.log("Display Name Updated");
          }).catch((error) => {
            console.error("Ho No...")
          });
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {user, googleSignIn, logOut, registrationWithEmail, loginWithEmail, updateName}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;