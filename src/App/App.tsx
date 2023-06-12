import { Footer, Header, MenuProps } from '../components';

import Routes from '../Routes';

import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Theme from '../Theme';
import { Container } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';


const menu: MenuProps = {
  links: [
    { label: 'Crear tour', href: '/tours/create', icon: AddCircleIcon },
    { label: 'Mis tours', href: '/tours', icon: PermMediaIcon },
    { label: 'Ajustes', href: '/settings', icon: Settings },
    { label: 'Salir', href: '/logout', icon: Logout, divider: true },
  ]
};

interface LinkProps {
  label: string;
  href: string;
}


const links: LinkProps[] = [{ label: 'Home', href: '/' }];

function App() {
  return (
    <div className='App'>
      <Theme>
        <Header title='Virtualitour' logo='./logo.svg' subtitle='Queremos darle una vision 360 a tu mundo' links={links} menu={menu} />
        <Container>
          <Routes />
        </Container>
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
