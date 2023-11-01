import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from './components/Navbar'


export const metadata: Metadata = {
  title: 'Clamor',
  description: 'Comment Anywhere with Clamor: A Private, Anonymous Web Layer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <main className='main-container'>
          {/* <Navbar/> */}
          {children}
        </main>
      </body>
    </html>
  )
}
