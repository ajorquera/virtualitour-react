import { FC, useEffect } from "react";
import Header from "./Header/Header";

import Footer from "./Footer";

import { Navigate, Outlet, redirect } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import Card from "./Card/Card";
import Box, { Flex } from "./Box";

const menu: any = {
    links: [
        {
            label: 'Crear',
            href: '/',

        },
        {
            label: 'Tours',
            href: '/',

        },
        {
            label: 'Ajustes',
            href: '/settings',

        },
        {
            label: 'Salir',
            href: '/logout',

            divider: true
        }
    ],
};

interface LinkProps {
    label: string;
    href: string;
}


const links: LinkProps[] = [{ label: 'Home', href: '/' }];

const DashboardLayout: FC<{}> = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) return null

    if (!user) return <Navigate to='/login' />

    return (<>
        <Header
            title='Virtualitour'
            logo='./logo.svg'
            subtitle='Queremos darle una vision 360 a tu mundo'
            links={links}
            menu={menu}
        />

        <Outlet />

        <Footer />
    </>)
};

export const AccessLayout = () => {
    const { user, isLoading } = useAuth();

    if (!isLoading && user) return <Navigate to='/' />

    return (
        <Flex justifyContent="center">
            <Card>
                <Outlet />
            </Card>
        </Flex>
    )
}

export default DashboardLayout;