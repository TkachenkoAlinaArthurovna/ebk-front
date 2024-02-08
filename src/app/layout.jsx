import '@/app/ui/globals.css';
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

export const metadata = {
  title: 'Електровелосипеди Eco-bike Інтернет магазин електровелосипедів',
  description:
    'Електровелосипеди, запчастини для електровелосипедів, запчастини для велосипедів, комплекти для електровелосипедів, акумулятори, мотори, мотор-колеса',
  link: ' href="./output.css" rel="stylesheet"',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppTheme>
        <body>
          <Providers>
            <Wrapper>
              <Header />
              <Box sx={{ flex: '1 1 auto' }}>{children}</Box>
              <Footer />
            </Wrapper>
          </Providers>
        </body>
      </AppTheme>
    </html>
  );
}
