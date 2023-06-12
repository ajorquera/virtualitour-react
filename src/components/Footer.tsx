import { Box, Container, Typography } from '@mui/material';
import { useMemo } from 'react';

const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography color="textSecondary" component="span" variant="subtitle1">
          {`©${year}  — `}
        </Typography>

        <Typography color="black" component="span" variant="subtitle1">
          Virtualitour
        </Typography>



      </Container>
    </Box>
  );
};

export default Footer;
