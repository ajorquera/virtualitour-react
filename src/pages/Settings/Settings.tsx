import { Outlet } from 'react-router-dom';
import Box, { Flex, Text } from '../../components/Box';
import Card from '../../components/Card';
import { Heading } from '../../components/Text';
import { Link } from '../../components';

const links = [
  { label: 'Perfil', href: 'profile' },
  { label: 'Planes', href: 'plans' },
]

const Settings = () => {
  return (
    <Flex justifyContent="space-around" pt={4} flexWrap="wrap">
      <Card elevation={5} width="10%" height={100} p={3}>
        <Heading variant="h3">Ajustes</Heading>
        <ul>
          {links.map((link, index) => (
            <Box as="li" my={2}>
              <Link href={link.href}>
                <Text variant='link' key={index}>

                  {link.label}
                </Text>
              </Link>
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
