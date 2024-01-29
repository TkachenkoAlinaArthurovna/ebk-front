import '@/app/ui/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from '@/app/ui/Header';
import Footer from '@/app/ui/Footer/Footer';
import AppTheme from '@/app/ui/AppTheme';
import Wrapper from '@/app/ui/Wrapper';
import { Box } from '@mui/material';

export const metadata = {
  title: 'EBK online store',
  description: 'Electronic Bike Kits',
  link: ' href="./output.css" rel="stylesheet"',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppTheme>
        <body>
          <Wrapper>
            <Header />
            <Box sx={{ flex: '1 1 auto' }}>{children}</Box>
            <Footer />
          </Wrapper>
        </body>
      </AppTheme>
    </html>
  );
}
