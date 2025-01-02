import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, InputLabel } from '@mui/material';

import FormBox from '@/app/components/FormBox';

import PasswordField from '@/app/components/PasswordField';
import SignUpForm from '@/app/components/auth/SignUpForm';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Toon The Task',
};

const page = () => {
  return (
    <>
      <Container sx={{ pt: '96px' }} maxWidth="sm">
        <Link href="/"> Toon Tips</Link>
        <SignUpForm />
      </Container>
    </>
  );
};

export default page;
