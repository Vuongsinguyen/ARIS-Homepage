import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import AuthProvider from '@/components/AuthProvider'
import { HtmlLangSetter } from '@/components/HtmlLangSetter'

const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'ARIS VIETNAM - Technology Solutions & Digital Innovation',
  description: 'Leading technology company specializing in web development, mobile apps, and digital transformation solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <HtmlLangSetter />
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}