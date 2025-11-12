import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Providers} from '@/components/providers';
import "../globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: {
    default: "ARIS - Homepage",
    template: "%s | ARIS"
  },
  description: "High-performance, multilingual website with SEO optimization",
  keywords: ["ARIS", "website", "SEO", "multilingual"],
  authors: [{ name: "ARIS Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aris-homepage.com",
    siteName: "ARIS",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARIS Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARIS - Homepage",
    description: "High-performance, multilingual website with SEO optimization",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();
 
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
