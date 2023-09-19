// write a firebase auth provider

import React, { useState, useEffect, useContext, createContext, useCallback } from "react";
import { User } from "firebase/auth";
import { getMyUser, signInWithEmailPassword, signOutUser } from "../services/firebaseApi";
import LoadingScreen from "../pages/LoadingScreen";

interface AuthContextInterface {
    user: User | null;
    loginWithCredentials?: any
    isLoading?: boolean;
    signOut?: any
}

// create a context
const AuthContext = createContext<AuthContextInterface>({ user: null });

const FAKE_LOADING_TIME = 2000;

// create a provider
export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<any>(null);
    const [isLoadingUser, setIsloading] = useState(false);
    const [isFakeLoading, setIsFakeloading] = useState(true);

    useEffect(() => {
        setIsloading(true);
        getMyUser().then((user) => {
            setUser(user);
        }).finally(() => setIsloading(false));
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsFakeloading(false);
        }, FAKE_LOADING_TIME);
    }, []);

    const loginWithCredentials = useCallback(signInWithEmailPassword, []);

    const isLoading = isLoadingUser || isFakeLoading;


    const signOut = useCallback(async () => {
        signOutUser();
        setUser(null);
    }, []);
    return (
        <AuthContext.Provider value={{ user, loginWithCredentials, isLoading, signOut }}>
            {isLoading ? <LoadingScreen /> : children}
        </AuthContext.Provider>
    );
};



// create a custom hook
export function useAuth() {
    return useContext(AuthContext);
}

