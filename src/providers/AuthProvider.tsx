// write a firebase auth provider

import React, { useState, useEffect, useContext, createContext, Provider } from "react";
import { auth } from '../services/firebase';
import { User } from "firebase/auth";

interface AuthContextInterface {
    user: User | null;
    loginWithCredentials?: any
}

// create a context
const AuthContext = createContext<AuthContextInterface>({ user: null });

// create a provider
export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        auth.onAuthStateChanged(setUser);
    }, []);

    const loginWithCredentials = (email: string, password: string) => { }

    return (
        <AuthContext.Provider value={{ user, loginWithCredentials }}>
            {children}
        </AuthContext.Provider>
    );
};



// create a custom hook
export function useAuth() {
    return useContext(AuthContext);
}

