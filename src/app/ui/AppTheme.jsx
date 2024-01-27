'use client';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const AppTheme = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#49BEB7',
        light: '#42a5f5',
        dark: '#42ADA7',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: 'E5E5E5',
        light: '#EEEEEE',
        dark: '#D0D0D0',
        contrastText: '#FFFFFF',
      },
      white: {
        main: '#FFFFFF',
      },
      lightGrey: {
        main: '#F3F3F3',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '0',
            borderRadius: '100px',
            fontSize: '16px',
            textTransform: 'capitalize',
            backgroundColor: '#49BEB7 !important',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
            padding: '27px 48px',
            fontSize: '16px'
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;
