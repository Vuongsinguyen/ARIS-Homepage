import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import type { Metadata } from "next";
import {Providers} from '@/components/providers';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import FooterBottom from '@/components/FooterBottom';
import { generateAIMetadata, generateStructuredData } from '@/lib/seo';
import { trackWebVitals, preloadCriticalResources, checkPerformanceBudget } from '@/lib/performance';
import { PerformanceTracker } from '@/components/PerformanceTracker';
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const aiMetadata = generateAIMetadata('home', locale);

  return {
    title: aiMetadata.title,
    description: aiMetadata.description,
    keywords: aiMetadata.keywords,
    authors: [{ name: "ARIS Team" }],
    creator: "ARIS",
    publisher: "ARIS",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://aris-homepage.com'),
    alternates: {
      canonical: `https://aris-homepage.com/${locale}`,
      languages: {
        'en': `https://aris-homepage.com/en`,
        'vi': `https://aris-homepage.com/vi`,
        'ja': `https://aris-homepage.com/ja`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: `https://aris-homepage.com/${locale}`,
      siteName: "ARIS",
      title: aiMetadata.title,
      description: aiMetadata.description,
      images: [
        {
          url: aiMetadata.ogImage || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: aiMetadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: aiMetadata.title,
      description: aiMetadata.description,
      creator: "@ARIS",
      images: [aiMetadata.twitterImage || "/twitter-image.jpg"],
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
    category: "technology",
  };
}

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
    <Providers>
      <NextIntlClientProvider messages={messages}>
        <PerformanceTracker />
        <TopBar />
        {children}
        <Footer />
        <FooterBottom />
      </NextIntlClientProvider>
    </Providers>
  );
}
