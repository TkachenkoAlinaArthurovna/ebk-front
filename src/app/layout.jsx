import '@/app/ui/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Link from 'next/link'
import AppTheme from './ui/AppTheme'

export const metadata = {
  title: 'EBK online store',
  description: 'Electronic Bike Kits',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <AppTheme>
        <body>
          <ul>
            <li>
              <Link href="/cabinet/personal-information">cabinet</Link>
            </li>
            <li>
              <Link href="/cart">cart</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/contacts">contacts</Link>
            </li>
            <li>
              <Link href="/reviews">reviews</Link>
            </li>
            <li>
              <Link href="/payment-delivery">payment</Link>
            </li>
            <li>
              <Link href="/support">support</Link>
            </li> 
            <li>
                <Link href="/slug">DynamicPage</Link>
            </li>
          </ul>
          {children}
        </body>
      </AppTheme>
    </html>
  )
}
