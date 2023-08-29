import { FC, useEffect } from "react";
import Header from "./Header/Header";

import Footer from "./Footer";

import { Navigate, Outlet, redirect } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import Card from "./Card/Card";
import Box, { Flex, Text } from "./Box";
import Logo from '../assets/logo.png'
import { style } from "styled-system";
import styled from "styled-components";
import { theme } from "styled-tools";

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

const PageContainer = styled.div`
    padding: 0 20px;
    background-color: ${theme('colors.surface', 'white')};
`;


const DashboardLayout: FC<{}> = () => {
    const { user, isLoading } = useAuth();
    if (isLoading) return null

    if (!user) return <Navigate to='/login' />

    return (<Box bg="surface" height="100vh">
        <Header
            title='Virtualitour'
            logo='./logo.svg'
            subtitle='Queremos darle una vision 360 a tu mundo'
            links={links}
            menu={menu}
        />

        <PageContainer>
            <Outlet />

            <Footer />

        </PageContainer>
    </Box>)
};

export const AccessLayout = () => {
    const { user, isLoading } = useAuth();

    if (!isLoading && user) return <Navigate to='/' />

    return (
        <Flex justifyContent="center" alignItems="center" height="100vh" bg="surface" >
            <Box>
                <Box mb={3}>

                    <img width={300} src={Logo} alt="Virtualitour" />
                    <Text textAlign="center" as="div" variant="h1">Virtualitour</Text>

                </Box>
                <Card elevation={5} p={4}>
                    <Outlet />
                </Card>
            </Box>
        </Flex>
    )
}

export default DashboardLayout;