'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {usePathname} from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = pathname.split('/')[1];

  const footerNavItems = [
    {href: `/${locale}`, label: tNav('home')},
    {href: `/${locale}/blog`, label: tNav('blog')},
    {href: `/${locale}/news`, label: tNav('news')},
    {href: `/${locale}/services`, label: tNav('services')},
    {href: `/${locale}/use-cases`, label: tNav('use-cases')},
    {href: `/${locale}/about`, label: tNav('about')},
    {href: `/${locale}/contact`, label: tNav('contact')},
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center mb-4 hover:opacity-80 transition-opacity">
              <img src="/logo.svg" alt="ARIS" className="h-8" />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              EMPOWERING BUSINESSES THROUGH INNOVATIVE SOFTWARE SOLUTIONS FOR OVER 15 YEARS
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t('navigation')}</h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-muted-foreground">{t('webDevelopment')}</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">{t('mobileDevelopment')}</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">{t('cloudSolutions')}</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">{t('securityConsulting')}</span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">{t('dataAnalytics')}</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">{t('contact')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@aris-vn.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@aris-vn.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+842838424483"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +84 28 3842-4483
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  123 Business St<br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
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
    </footer>
  );
}