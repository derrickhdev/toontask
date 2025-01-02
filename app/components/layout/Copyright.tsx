'use client';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';

const Copyright = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography component="span" sx={{ fontSize: 12 }}>
        © {new Date().getFullYear()} Toon Tips, All Rights Reserved.
      </Typography>
      <List sx={{ display: 'flex', gap: '0.5rem' }}>
        <ListItem>
          <Link href="/accessibility">
            <ListItemText primary="Accessibility" disableTypography sx={{ fontSize: 12 }}></ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <MuiLink href="/contact">
            <ListItemText primary="Contact" disableTypography sx={{ fontSize: 12 }}></ListItemText>
          </MuiLink>
        </ListItem>
        <ListItem>
          <ListItemText primary="Privacy" disableTypography sx={{ fontSize: 12 }}></ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText primary="Terms" disableTypography sx={{ fontSize: 12 }}></ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default Copyright;
