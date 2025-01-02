'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',

    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },

  shape: {
    borderRadius: 12,
  },

  shadows: [
    'none', // shadow for index 0
    '0 15px 35px 0 rgba( 60,66,87, .08),0 5px 15px 0 rgba(0,0,0, .12)', // shadow for index 1
    '0px 3px 5px rgba(0, 0, 0, 0.1)', // shadow for index 2
    '0px 4px 8px rgba(0, 0, 0, 0.1)', // shadow for index 3
    '0px 5px 10px rgba(0, 0, 0, 0.1)', // shadow for index 4
    '0px 6px 12px rgba(0, 0, 0, 0.1)', // shadow for index 5
    '0px 7px 14px rgba(0, 0, 0, 0.1)', // shadow for index 6
    '0px 8px 16px rgba(0, 0, 0, 0.1)', // shadow for index 7
    '0px 9px 18px rgba(0, 0, 0, 0.1)', // shadow for index 8
    '0px 10px 20px rgba(0, 0, 0, 0.1)', // shadow for index 9
    '0px 12px 24px rgba(0, 0, 0, 0.1)', // shadow for index 10
    '0px 14px 28px rgba(0, 0, 0, 0.1)', // shadow for index 11
    '0px 16px 32px rgba(0, 0, 0, 0.1)', // shadow for index 12
    '0px 18px 36px rgba(0, 0, 0, 0.1)', // shadow for index 13
    '0px 20px 40px rgba(0, 0, 0, 0.1)', // shadow for index 14
    '0px 22px 44px rgba(0, 0, 0, 0.1)', // shadow for index 15
    '0px 24px 48px rgba(0, 0, 0, 0.1)', // shadow for index 16
    '0px 26px 52px rgba(0, 0, 0, 0.1)', // shadow for index 17
    '0px 28px 56px rgba(0, 0, 0, 0.1)', // shadow for index 18
    '0px 30px 60px rgba(0, 0, 0, 0.1)', // shadow for index 19
    '0px 32px 64px rgba(0, 0, 0, 0.1)', // shadow for index 20
    '0px 34px 68px rgba(0, 0, 0, 0.1)', // shadow for index 21
    '0px 36px 72px rgba(0, 0, 0, 0.1)', // shadow for index 22
    '0px 38px 76px rgba(0, 0, 0, 0.1)', // shadow for index 23
    '0px 40px 80px rgba(0, 0, 0, 0.1)', // shadow for index 24
  ],
});

export default theme;
