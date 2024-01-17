'use client'
import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const AppTheme = ({children}) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#49BEB7',
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