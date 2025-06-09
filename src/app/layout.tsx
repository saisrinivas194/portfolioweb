import './globals.css'
import { Inter } from 'next/font/google'
import ParallaxWrapper from './ParallaxWrapper'
import { metadata } from './metadata'
import StyledComponentsRegistry from '../lib/registry'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ParallaxWrapper>
            {children}
          </ParallaxWrapper>
        </StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  )
} 