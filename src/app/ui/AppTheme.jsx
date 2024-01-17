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
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '16px',
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