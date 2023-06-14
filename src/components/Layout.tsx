import { FC, useEffect } from "react";
import Header from "./Header/Header";
import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ImageIcon from '@mui/icons-material/Image';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate, Outlet, redirect } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import Card from "./Card";

const menu: any = {
    links: [
        {
            label: 'Crear',
            href: '/',
            icon: FiberNewIcon
        },
        {
            label: 'Tours',
            href: '/',
            icon: ImageIcon
        },
        {
            label: 'Ajustes',
            href: '/settings',
            icon: SettingsIcon
        },
        {
            label: 'Salir',
            href: '/logout',
            icon: LogoutIcon,
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
        <Container>
            <Outlet />
        </Container>
        <Footer />
    </>)
};

export const AccessLayout = () => {
    const { user, isLoading } = useAuth();

    if (!isLoading && user) return <Navigate to='/' />

    return (
        <Box sx={{ height: '100vh' }} display="flex" alignItems="center" justifyContent="center">
            <Card sx={{ width: 500 }}>
                <Outlet />
            </Card>
        </Box>
    )
}

export default DashboardLayout;