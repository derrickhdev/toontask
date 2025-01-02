import { Box, Container } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <Box component="header">
      <Container>
        <nav>
          <ul>
            <li>
              <Link href="/">ToonTask</Link>
            </li>
            <li>
              <Link href="/stats/invasions">Invasions</Link>
            </li>
            <li>
              <Link href="/stats/sillymeter">Silly Meter</Link>
            </li>
            <li>
              <Link href="/stats/population">Population</Link>
            </li>
            <li>
              <Link href="/login" prefetch={false}>
                Log In
              </Link>
            </li>
            <li>
              <Link href="/signup" prefetch={false}>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </Box>
  );
};

export default Header;
