import {useTranslations} from 'next-intl';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about ARIS',
};

export default function AboutPage() {
  const t = useTranslations('nav');
  
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-4xl w-full">
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-4">{t('about')}</h1>
            <p className="text-xl text-muted-foreground">
              About ARIS Homepage Project
            </p>
          </header>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                ARIS Homepage is a high-performance, multilingual website built with the latest web technologies. 
                We focus on delivering exceptional user experience, optimal SEO, and modern design principles.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Next.js 16 with App Router</li>
                    <li>React 19</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Features</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>SEO Optimized</li>
                    <li>Dark/Light Mode</li>
                    <li>Multilingual (i18n)</li>
                    <li>Sanity CMS</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg text-muted-foreground">
                Have questions or want to get in touch? Visit our{' '}
                <a href={`/${t('contact')}`} className="text-primary hover:underline">
                  contact page
                </a>
                .
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
