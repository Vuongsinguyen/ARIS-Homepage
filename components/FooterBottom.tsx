'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';

export default function FooterBottom() {
  const pathname = usePathname();
  const t = useTranslations('footer');
  const locale = pathname.split('/')[1];

  return (
    <div className="mt-8 pt-[10px] pb-[10px] border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t('copyright')}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex space-x-6">
              <Link
                href={`/${locale}/privacy`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('privacyPolicy')}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('termsOfService')}
              </Link>
            </div>

            {/* Theme Selector */}
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => {
                  document.documentElement.classList.remove('dark');
                  localStorage.setItem('theme', 'light');
                }}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Light mode"
                title="Light mode"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('theme');
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                }}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="System mode"
                title="System mode"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <button
                onClick={() => {
                  document.documentElement.classList.add('dark');
                  localStorage.setItem('theme', 'dark');
                }}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Dark mode"
                title="Dark mode"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}