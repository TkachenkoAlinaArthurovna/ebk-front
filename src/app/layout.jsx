import '@/app/ui/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from '@/app/ui/home-page/header/Header';
import Footer from '@/app/ui/home-page/footer/Footer';
import AppTheme from '@/app/ui/AppTheme';
import Wrapper from '@/app/ui/Wrapper';

export const metadata = {
  title: 'EBK online store',
  description: 'Electronic Bike Kits',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppTheme>
        <body>
          <Wrapper>
            {/* <Header /> */}
            {children}
            <Footer />
          </Wrapper>
        </body>
      </AppTheme>
    </html>
  );
}
