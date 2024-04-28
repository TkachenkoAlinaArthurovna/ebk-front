import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer/Footer';
import AppTheme from '@/app/ui/AppTheme';
import Wrapper from '@/app/ui/Wrapper';
import Providers from '@/redux/Provider';
import { Box } from '@mui/material';
import ModalCart from '@/app/ui/ModalCart';
import Authorization from '@/app/ui/AuthModal/Authorization';
import React from 'react';
import GoogleTag from '@/app/ui/GoogleTag/GoogleTag';

export const metadata = {
  title: 'Eco-bike Інтернет магазин електровелосипедів',
  description:
    'Електровелосипеди, запчастини для електровелосипедів, запчастини для велосипедів, комплекти для електровелосипедів, акумулятори, мотори, мотор-колеса',
  link: ' href="./output.css" rel="stylesheet"',
  icons: {
    icon: ['/logo.svg'],
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTag></GoogleTag>
      <AppTheme>
        <body>
          <Providers>
            <Wrapper>
              <Header />
              <Box sx={{ flex: '1 1 auto' }}>
                {children}
                <ModalCart />
                <Authorization />
              </Box>
              <Footer />
            </Wrapper>
          </Providers>
        </body>
      </AppTheme>
    </html>
  );
}
