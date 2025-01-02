import Image from 'next/image';
import type { Metadata } from 'next';
import { Container, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Toon The Task',
};

export default function Home() {
  return (
    <>
      <Typography variant="h1">Home</Typography>
    </>
  );
}
