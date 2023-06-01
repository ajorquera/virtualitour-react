import { BottomNavigation, BottomNavigationAction, Box, Container, Grid, Paper, Typography } from '@mui/material';
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

      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Virtualitour
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`@${year}`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
