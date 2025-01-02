'use client';
import { FormControl, InputLabel, TextField } from '@mui/material';
import { useState } from 'react';

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Password</InputLabel>
        <TextField></TextField>
      </FormControl>
    </>
  );
};

export default PasswordField;
