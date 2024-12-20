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
import Script from 'next/script';

export const metadata = {
  title: 'Eco-bike Інтернет магазин електровелосипедів',
  description:
    'Електровелосипеди, запчастини для електровелосипедів, запчастини для велосипедів, комплекти для електровелосипедів, акумулятори, мотори, мотор-колеса',
  link: { href: './output.css', rel: 'stylesheet' },
  icons: {
    icon: ['/logo.svg'],
  },
  meta: [
    {
      name: 'google-site-verification',
      content: '2LR5wL71gyJKjjdf9DX3McPUcCF8uvxNJQsxyENEnL8',
    },
  ],
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {metadata.meta.map((metaTag, index) => (
          <meta key={index} name={metaTag.name} content={metaTag.content} />
        ))}
        <meta
          name="google-site-verification"
          content="hTfGShUkpZKjucY-59FvZp375bldG98fgfXdRtNQjOo"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K2V60VER2N"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K2V60VER2N');
        `}
        </Script>
      </head>
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
