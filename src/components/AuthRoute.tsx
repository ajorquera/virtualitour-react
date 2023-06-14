import { Outlet, Route, RouteProps, redirect } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { FC, useCallback } from "react";

interface Props {
    path: string;
    children: React.ReactNode;
}

export const AuthRoute: FC<Props> = ({ path, children }) => {
    const { user, isLoading } = useAuth();

    const loader = useCallback(() => {
        if (!isLoading && !user) {
            return redirect('/login');
        }
    }, [user]);

    return <Route loader={loader} path={path}>{children}</Route>;
};

export default AuthRoute;