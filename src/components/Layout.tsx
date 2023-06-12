import { FC } from "react";
import Header from "./Header/Header";
import { Container } from "@mui/material";
import Footer from "./Footer";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ImageIcon from '@mui/icons-material/Image';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

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
            href: '/',
            icon: SettingsIcon
        },
        {
            label: 'Salir',
            href: '/',
            icon: LogoutIcon
        }
    ],
};

interface LinkProps {
    label: string;
    href: string;
}


const links: LinkProps[] = [{ label: 'Home', href: '/' }];

const DashboardLayout: FC<any> = ({ children }) => (
    <>
        <Header title='Virtualitour' logo='./logo.svg' subtitle='Queremos darle una vision 360 a tu mundo' links={links} menu={menu} />
        <Container>
            {children}
        </Container>
        <Footer />
    </>
);

export default DashboardLayout;