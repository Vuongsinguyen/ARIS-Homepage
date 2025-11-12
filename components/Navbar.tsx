'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';
import ThemeSelector from './ThemeSelector';
import ChatBotMount from './ChatBotMount';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = pathname.split('/')[1];

  const navItems = [
    {href: `/${locale}`, label: t('home'), icon: '🏠'},
    {href: `/${locale}/services`, label: t('services'), icon: '⚙️'},
    {href: `/${locale}/about`, label: t('about'), icon: 'ℹ️'},
    {href: `/${locale}/use-cases`, label: t('use-cases'), icon: '💼'},
    {href: `/${locale}/products`, label: t('products'), icon: '🧩'},
    {href: `/${locale}/news`, label: t('news'), icon: '�'},
    {href: `/${locale}/blog`, label: t('blog'), icon: '📝'},
    {href: `/${locale}/contact`, label: t('contact'), icon: '📧'},
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="ARIS" className="h-8" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === item.href
                    ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-900'
                    : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - Desktop */}
          <div className="hidden sm:flex items-center gap-2">
            {/* ChatBot Button */}
            <div id="chatbot-root" />
            <ChatBotMount />
            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              className="ml-2 px-4 py-1.5 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden py-3 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded transition-colors ${
                    pathname === item.href
                      ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-900'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
              
              {/* Divider */}
              <div className="h-px bg-gray-200 dark:bg-gray-800 my-2"></div>
              
              {/* ChatBot in Mobile */}
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{t('chatWithAI')}</span>
                <div id="chatbot-root-mobile" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
