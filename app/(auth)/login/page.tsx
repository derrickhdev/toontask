import FormBox from '@/app/components/FormBox';
import { Box, Button, Container, Divider, FormControl, InputLabel, TextField, Typography } from '@mui/material';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Log In',
  description: 'Toon The Task',
};

const page = () => {
  return (
    <>
      <Container sx={{ pt: '96px' }} maxWidth="sm">
        <Link href="/"> Toon Tips</Link>
        <FormBox>
          <Typography variant="h1">Log in to your account</Typography>

          <Box component="form">
            <FormControl>
              <InputLabel>Email</InputLabel>
              <TextField></TextField>
            </FormControl>
            <FormControl>
              <InputLabel>Password</InputLabel>
              <TextField></TextField>
            </FormControl>
            <Button>Log in</Button>
          </Box>
          <Divider>or</Divider>
          <Typography>
            Need an account?{' '}
            <Link href="/signup" prefetch={false}>
              Sign up!
            </Link>
          </Typography>
          <Typography>
            <Link href="/forgot">Forgot your password?</Link>
          </Typography>
        </FormBox>
      </Container>
    </>
  );
};

export default page;
