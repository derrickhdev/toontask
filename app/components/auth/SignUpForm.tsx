'use client';
import { useState, useEffect, useRef } from 'react';
import FormBox from '../FormBox';
import { Typography, Box, FormControl, InputLabel, TextField, Button, Divider, Checkbox, Link as MuiLink } from '@mui/material';

import Link from 'next/link';
import PasswordField from '../PasswordField';

const SignUpForm = () => {
  return (
    <FormBox>
      <Typography variant="h1">Create your account</Typography>
      <Box component="form">
        <FormControl fullWidth>
          {/* <InputLabel>Email</InputLabel> */}
          <TextField></TextField>
        </FormControl>
        <PasswordField />
        <Button>Create account</Button>
      </Box>
      <Divider>or</Divider>
      <Typography>
        Already have an account?{' '}
        <Link href="/login" prefetch={false}>
          Log in!
        </Link>
      </Typography>
    </FormBox>
  );
};

export default SignUpForm;
