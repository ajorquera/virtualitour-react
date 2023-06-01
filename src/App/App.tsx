import { Footer, Header, MenuProps } from '../components';

import Routes from '../Routes';

import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Theme from '../Theme';
import { Container } from '@mui/material';

const menu: MenuProps = {
  label: 'Menu',
  image: '',
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
        <Header title='Virtualitour' logo='./logo.svg' subtitle='' links={links} menu={menu} />
        <Container>
          <Routes />
        </Container>
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
