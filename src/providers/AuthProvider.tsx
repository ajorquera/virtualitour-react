// write a firebase auth provider

import React, { useState, useEffect, useContext, createContext, Provider, useCallback } from "react";
import { auth } from '../services/firebase';
import { User } from "firebase/auth";
import { getMyUser, signInWithEmailPassword, signOutUser } from "../services/firebaseApi";

interface AuthContextInterface {
    user: User | null;
    loginWithCredentials?: any
    isLoading?: boolean;
    signOut?: any
}

// create a context
const AuthContext = createContext<AuthContextInterface>({ user: null });

// create a provider
export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<any>(null);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        getMyUser().then((user) => {
            setUser(user);


        }).finally(() => setIsloading(false));
    }, []);

    const loginWithCredentials = useCallback(signInWithEmailPassword, []);


    const signOut = useCallback(async () => {
        signOutUser();
        setUser(null);
    }, []);
    return (
        <AuthContext.Provider value={{ user, loginWithCredentials, isLoading, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};



// create a custom hook
export function useAuth() {
    return useContext(AuthContext);
}

