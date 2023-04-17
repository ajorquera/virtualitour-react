import { Footer, Header, LinkProps, MenuProps } from '../components';

import Routes from '../Routes';

import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const menu: MenuProps = {
  label: 'Menu',
  image: '',
};

const links: LinkProps[] = [{ label: 'Home', href: '/' }];

function App() {
  return (
    <div className='App'>
      <Header title='Virtualitour' logo='./logo.svg' subtitle='' links={links} menu={menu} />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
