import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.init";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Google Sign In 
    const googleSignIn = (provider) => {
        setLoading(true);
        signInWithPopup(auth, provider)
    }

    // Sign Out
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {})
        .catch((error) => {});
    }

    // Registration Form
    const registrationWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Login with Email
    const loginWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Update user Name
    const updateName = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // Send varification email
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {user, googleSignIn, logOut, 
        registrationWithEmail, loginWithEmail, 
        updateName, loading, verifyEmail, setLoading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer position="top-right"/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;