import '@/app/ui/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import AppTheme from './ui/AppTheme'
import Wrapper from './ui/Wrapper'
import Content from './ui/Content'

export const metadata = {
  title: 'EBK online store',
  description: 'Electronic Bike Kits',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <AppTheme>
        <body>
          <Wrapper>
           <Content>
            {/* <Header /> */}
              {children}
           </Content>
           {/* <Footer /> */}
          </Wrapper>
        </body>
      </AppTheme>
    </html>
  )
}
