import { useMemo } from 'react';
import Box from './Box';

const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <Box>

      {`©${year}  — `}
      Virtualitour

    </Box>
  );
};

export default Footer;
