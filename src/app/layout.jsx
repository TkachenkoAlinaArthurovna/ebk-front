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

export const metadata = {
  title: 'Eco-bike Інтернет магазин електровелосипедів',
  description:
    'Електровелосипеди, запчастини для електровелосипедів, запчастини для велосипедів, комплекти для електровелосипедів, акумулятори, мотори, мотор-колеса',
  link: ' href="./output.css" rel="stylesheet"',
  icons: {
    icon: ['/logo.svg'],
  },
};

const getCategories = () =>
  fetch('https://stage.eco-bike.com.ua/api/categories', {
    next: { revalidate: 3600 },
  }).then((response) => response.json());

export default async function RootLayout({ children }) {
  const catalog = await getCategories();

  return (
    <html lang="en">
      <AppTheme>
        <body>
          <Providers>
            <Wrapper>
              <Header catalog={catalog} />
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
