
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();


    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider )
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        } 
    },[]);

    const logIn = (email,password) => {
        setLoading(true) 
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
           displayName:name, photoURL:photo
       })
   }

    const authInfo = {
        createUser,logIn,logOut,user,loading,updateUserProfile,googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;