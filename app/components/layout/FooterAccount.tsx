import { Box, Container } from '@mui/material';
import React from 'react';
import Copyright from './Copyright';

const FooterAccount = () => {
  return (
    <Box component="footer">
      <Container>
        <Copyright></Copyright>
      </Container>
    </Box>
  );
};

export default FooterAccount;
