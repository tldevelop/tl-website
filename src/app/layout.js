import Header from './components/Header/Header';
import './globals.css';
import { Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'TL webservices',
  description: 'Leading the future of marketing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
