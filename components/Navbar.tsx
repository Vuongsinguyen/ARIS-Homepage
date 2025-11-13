'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';
import ChatBotMount from './ChatBotMount';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const locale = pathname.split('/')[1];

  const navItems = [
    {href: `/${locale}`, label: t('home'), icon: '🏠'},
    {href: `/${locale}/about`, label: t('about'), icon: 'ℹ️'},
    {href: `/${locale}/use-cases`, label: t('use-cases'), icon: '💼'},
    {href: `/${locale}/products`, label: t('products'), icon: '🧩'},
    {href: `/${locale}/news`, label: t('news'), icon: '📰'},
    {href: `/${locale}/blog`, label: t('blog'), icon: '�'},
    {href: `/${locale}/recruitments`, label: t('recruitments'), icon: '👥'},
    {href: `/${locale}/contact`, label: t('contact'), icon: '📧'},
  ];

  const servicesItems = [
    {href: `/${locale}/services/one-stop-services`, label: 'One-Stop Services', icon: '🏆'},
    {href: `/${locale}/services/system-development`, label: 'System Development', icon: '🖥️'},
    {href: `/${locale}/services/mobile-development`, label: 'Mobile Development', icon: '📱'},
    {href: `/${locale}/services/quality-control`, label: 'Quality Control', icon: '✅'},
    {href: `/${locale}/services/ui-ux-design`, label: 'UI/UX Design', icon: '🎨'},
    {href: `/${locale}/services/research-development`, label: 'Research & Development', icon: '🔬'},
    {href: `/${locale}/services/digital-transformation`, label: 'Digital Transformation', icon: '�'},
    {href: `/${locale}/services/bpo-services`, label: 'BPO Services', icon: '📋'},
    {href: `/${locale}/services/system-maintenance`, label: 'System Maintenance', icon: '🔧'},
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
            {/* Home Link */}
            <Link
              href={`/${locale}`}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                pathname === `/${locale}`
                  ? 'text-black dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {t('home')}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 pl-3 pr-0 py-2 text-sm font-medium rounded transition-colors ${
                  pathname.startsWith(`/${locale}/services`)
                    ? 'text-black dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <span>{t('services')}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-4 z-50">
                  <div className="grid grid-cols-3 gap-4 px-4">
                    {/* Column 1 */}
                    <div className="space-y-1">
                      {servicesItems.slice(0, 3).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                            pathname === service.href
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <span className="text-sm">{service.icon}</span>
                          <span className="text-xs leading-tight">{service.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-1">
                      {servicesItems.slice(3, 6).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                            pathname === service.href
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <span className="text-sm">{service.icon}</span>
                          <span className="text-xs leading-tight">{service.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-1">
                      {servicesItems.slice(6, 9).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                            pathname === service.href
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <span className="text-sm">{service.icon}</span>
                          <span className="text-xs leading-tight">{service.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-3 px-4">
                    <Link
                      href={`/${locale}/services`}
                      className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 rounded transition-colors"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <span className="text-sm">📋</span>
                      <span>View All Services</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  pathname === item.href
                    ? 'text-black dark:text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
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
                      ? 'text-black dark:text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}

              {/* Services Section */}
              <div className="flex flex-col">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded transition-colors ${
                    pathname.startsWith(`/${locale}/services`)
                      ? 'text-black dark:text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span>{t('services')}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {servicesItems.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded transition-colors ${
                          pathname === service.href
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                            : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        <span className="text-base">{service.icon}</span>
                        <span>{service.label}</span>
                      </Link>
                    ))}
                    <Link
                      href={`/${locale}/services`}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 rounded transition-colors"
                    >
                      <span className="text-base">📋</span>
                      <span>View All Services</span>
                    </Link>
                  </div>
                )}
              </div>
              
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
