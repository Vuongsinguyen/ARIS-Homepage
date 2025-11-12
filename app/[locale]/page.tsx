import {useTranslations} from 'next-intl';

import ThemeToggle from '@/components/ThemeToggle';
import Navbar from '@/components/Navbar';

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <ThemeToggle />
        <div className="max-w-5xl w-full">
        {/* H1 - Only one per page for SEO */}
        <h1 className="text-6xl font-bold text-center mb-4 text-balance">
          {t('title')}
        </h1>
        
        {/* Subtitle paragraph */}
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
          {t('subtitle')}
        </p>
        
        {/* Features section with semantic heading hierarchy */}
        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">⚡ {t('performance.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('performance.description')}
              </p>
            </article>
            
            <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">🌍 {t('multilingual.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('multilingual.description')}
              </p>
            </article>
            
            <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">📝 {t('cms.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('cms.description')}
              </p>
            </article>
            
            <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">🎯 {t('seo.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('seo.description')}
              </p>
            </article>
            
            <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">🎨 {t('design.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('design.description')}
              </p>
            </article>
            
            <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">🔒 {t('typesafe.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('typesafe.description')}
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
