import React, { useCallback, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { useParams } from "react-router-dom";

export const Login = () => {
    const { loginWithCredentials } = useAuth();
    const [email] = useState("");
    const [password] = useState("");

    const queryParams = useParams<{ redirect: string }>();
    const onLogin = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        loginWithCredentials(email, password);
    }, [email, password, loginWithCredentials]);

    return (
        <>
            <h1>Login</h1>

            <div>
                <form onSubmit={onLogin}>
                    <div>
                        <input type="email" placeholder="email" />
                    </div>
                    <div>

                        <input type="password" placeholder="password" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
};