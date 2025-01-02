'use client';

import { styled } from '@mui/material/styles';
const FormBox = styled('div')(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

export default FormBox;
