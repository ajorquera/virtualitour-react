import { Outlet } from 'react-router-dom';
import MenuCard from '../../components/MenuCard';
import Box, { Flex, Text } from '../../components/Box';
import Card from '../../components/Card';
import { Heading } from '../../components/Text';


const menu = {
  title: 'Ajustes',
  subItems: [
    { label: 'Perfil', path: '/settings/profile' },
    { label: 'Planes', path: '/settings/plans' }
  ]
};

const links = [
  { label: 'Profile', href: 'profile' },
  { label: 'Plans', href: 'plans' },
]

const Settings = () => {
  return (
    <Flex justifyContent="space-around" pt={4} flexWrap="wrap">
      <Card elevation={5} width="10%" height={100} p={3}>
        <Heading variant="h3">Ajustes</Heading>
        <ul>
          {links.map((link, index) => (
            <Box as="li" my={2}>
              <Text as="a" variant='link' href={link.href} key={index}>{link.label}</Text>
            </Box>
          ))}
        </ul>
      </Card>
      <Card elevation={2} p={4} width="60%">
        <Outlet />
      </Card>
    </Flex>
  );
};

export default Settings;
