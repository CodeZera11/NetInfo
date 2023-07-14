import './globals.css'
import { Mulish } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
 
const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'NetInfo',
  description: 'Get all the info about your favourite shows/movies on NetInfo',
  icons: {
    icon: '/logo.png'
  }
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mulish.className} bg_gradient` }>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
