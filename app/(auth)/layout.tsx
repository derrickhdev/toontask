import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@/theme';
import FooterAccount from '../components/layout/FooterAccount';

export const metadata: Metadata = {
  title: {
    template: '%s | ToonTask',
    default: 'ToonTask',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <main>{children}</main>
            <FooterAccount />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
