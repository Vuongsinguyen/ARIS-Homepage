'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';
import ThemeSelector from './ThemeSelector';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = pathname.split('/')[1];

  const navItems = [
    {href: `/${locale}`, label: t('home'), icon: '🏠'},
    {href: `/${locale}/blog`, label: t('blog'), icon: '📝'},
    {href: `/${locale}/news`, label: t('news'), icon: '📰'},
    {href: `/${locale}/services`, label: t('services'), icon: '⚙️'},
    {href: `/${locale}/use-cases`, label: t('use-cases'), icon: '💼'},
    {href: `/${locale}/about`, label: t('about'), icon: 'ℹ️'},
    {href: `/${locale}/contact`, label: t('contact'), icon: '📧'},
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              ARIS
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? 'bg-accent text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <Link
              href={pathname.replace(`/${locale}`, locale === 'en' ? '/vi' : '/en')}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-secondary hover:bg-accent transition-colors"
              title={locale === 'en' ? 'Switch to Vietnamese' : 'Switch to English'}
            >
              <span className="text-base">{locale === 'en' ? '🇻🇳' : '🇬🇧'}</span>
              <span>{locale === 'en' ? 'VI' : 'EN'}</span>
            </Link>

            {/* Theme Selector */}
            <ThemeSelector />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href
                      ? 'bg-accent text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
              
              {/* Divider */}
              <div className="h-px bg-border my-2"></div>
              
              {/* Language & Theme in Mobile */}
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-muted-foreground">Language</span>
                <Link
                  href={pathname.replace(`/${locale}`, locale === 'en' ? '/vi' : '/en')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md bg-secondary hover:bg-accent transition-colors"
                >
                  <span>{locale === 'en' ? '🇻🇳' : '🇬🇧'}</span>
                  <span>{locale === 'en' ? 'Tiếng Việt' : 'English'}</span>
                </Link>
              </div>
              
              <div className="flex items-center justify-between px-4 py-2">
                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                <ThemeSelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
