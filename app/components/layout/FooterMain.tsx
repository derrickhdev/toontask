import Link from 'next/link';
import MuiLink from '@mui/material/Link';
import { toonTips } from '../../utils/toonTips';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <Box component="footer">
      <Container>
        <Typography>TOON TIP: {toonTips[Math.floor(Math.random() * toonTips.length)]}</Typography>
        <List>
          <ListItem>
            <MuiLink href="https://bsky.app/" target="_blank" rel="noreferrer">
              Bluesky
            </MuiLink>
          </ListItem>
        </List>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
