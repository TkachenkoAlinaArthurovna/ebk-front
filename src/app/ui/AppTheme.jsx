'use client'
import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const AppTheme = ({children}) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#49BEB7',
        light: '#42a5f5',
        dark: '#42ADA7',
        contrastText: '#FFFFFF'
      },
      secondary: {
        main: '#E5E5E5',
        light: '#EEEEEE',
        dark: '#D0D0D0',
        contrastText: '#FFFFFF'
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '12px 40px',
            borderRadius: '100px',
            fontSize: '16px',
            textTransform: 'capitalize',
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default AppTheme