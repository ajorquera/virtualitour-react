import { Route, RouteProps, redirect } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { FC } from "react";

export const ProtectedRoute: FC<RouteProps> = (props) => {
    const { user } = useAuth();

    return user ? <Route {...props} /> : redirect("/login") as any;
};

export default ProtectedRoute;