import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';

import FooterMain from '@/app/components/layout/FooterMain';
import Header from '@/app/components/layout/Header';

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
            <Header />
            <main>{children}</main>
            <FooterMain />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
