import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// components
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pov Sokny - DevOps Engineer & Full Stack Developer',
  description: 'Welcome to my portfolio! I am Pov Sokny, a passionate DevOps Engineer and Full Stack Developer with expertise in building scalable, efficient, and secure systems. Explore my projects, skills, and experience in Cloud Computing (using GCP, Digital Ocean, AWS), CI/CD pipelines, Containerization (Docker) and full-stack development.',
  keywords: [
    'DevOps Engineer',
    'Full Stack Developer',
    'Cloud Infrastructure',
    'CI/CD Pipelines',
    'Web Development',
    'System Automation',
    'Cloud Computing',
    'Pov Sokny Portfolio',
  ],
  authors: [{ name: 'Pov Sokny' }],
  openGraph: {
    title: 'Pov Sokny - DevOps Engineer & Full Stack Developer',
    description: 'Welcome to my portfolio! I am Pov Sokny, a passionate DevOps Engineer and Full Stack Developer with expertise in building scalable, efficient, and secure systems.',
    url: 'https://sokny.devkh.asia', // Replace with your actual portfolio URL
    siteName: 'Pov Sokny Portfolio',
    images: [
      {
        url: 'https://yourportfolio.com/og-image.jpg', // Replace with your Open Graph image URL
        width: 1200,
        height: 630,
        alt: 'Pov Sokny Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pov Sokny - DevOps Engineer & Full Stack Developer',
    description: 'Welcome to my portfolio! I am Pov Sokny, a passionate DevOps Engineer and Full Stack Developer with expertise in building scalable, efficient, and secure systems.',
    images: ['https://yourportfolio.com/og-image.jpg'], // Replace with your Twitter image URL
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}