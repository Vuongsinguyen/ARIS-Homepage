'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {useSession, signOut} from 'next-auth/react';
import ChatBotMount from './ChatBotMount';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const { data: session, status } = useSession();
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
    {href: `/${locale}/services/one-stop-services`, label: 'ONE-STOP SERVICES'},
    {href: `/${locale}/services/system-development`, label: 'SYSTEM DEVELOPMENT'},
    {href: `/${locale}/services/mobile-development`, label: 'MOBILE DEVELOPMENT'},
    {href: `/${locale}/services/quality-control`, label: 'QUALITY CONTROL'},
    {href: `/${locale}/services/ui-ux-design`, label: 'UI/UX DESIGN'},
    {href: `/${locale}/services/research-development`, label: 'RESEARCH & DEVELOPMENT'},
    {href: `/${locale}/services/digital-transformation`, label: 'DIGITAL TRANSFORMATION'},
    {href: `/${locale}/services/bpo-services`, label: 'BPO SERVICES'},
    {href: `/${locale}/services/system-maintenance`, label: 'SYSTEM MAINTENANCE'},
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
                <>
                  {/* Invisible bridge to prevent dropdown from closing */}
                  <div className="absolute top-full left-0 right-0 h-2" />
                  <div className="fixed left-0 right-0 top-14 z-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl py-6 max-w-[1200px] mx-auto">
                        <div className="grid grid-cols-3 gap-6 px-6">
                    {/* Column 1 */}
                    <div className="space-y-1">
                      {servicesItems.slice(0, 3).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`group flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                            pathname === service.href
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <svg width="16" height="23" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-6 flex-shrink-0 transition-transform group-hover:scale-110">
                            <path d="M10.6066 0L21.2132 15.6066L10.6066 31.2132L-4.32723e-07 15.6066L10.6066 0Z" fill="url(#gradient)"/>
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#D9D9D9"/>
                                <stop offset="100%" stopColor="#0066ED"/>
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="leading-tight tracking-wide">{service.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-1">
                      {servicesItems.slice(3, 6).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`group flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                            pathname === service.href
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <svg width="16" height="23" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-6 flex-shrink-0 transition-transform group-hover:scale-110">
                            <path d="M10.6066 0L21.2132 15.6066L10.6066 31.2132L-4.32723e-07 15.6066L10.6066 0Z" fill="url(#gradient2)"/>
                            <defs>
                              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#D9D9D9"/>
                                <stop offset="100%" stopColor="#0066ED"/>
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="leading-tight tracking-wide">{service.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-1">
                      {servicesItems.slice(6, 9).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`group flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                            pathname === service.href
                              ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                              : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                          }`}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          <svg width="16" height="23" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-6 flex-shrink-0 transition-transform group-hover:scale-110">
                            <path d="M10.6066 0L21.2132 15.6066L10.6066 31.2132L-4.32723e-07 15.6066L10.6066 0Z" fill="url(#gradient3)"/>
                            <defs>
                              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#D9D9D9"/>
                                <stop offset="100%" stopColor="#0066ED"/>
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="leading-tight tracking-wide">{service.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                </>
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

            {/* Authentication */}
            {status === 'loading' ? (
              <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
            ) : session ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {session.user?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <span>{session.user?.name?.split(' ')[0] || 'User'}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {userMenuOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setUserMenuOpen(false)} />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20">
                      <div className="py-2">
                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {session.user?.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {session.user?.email}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            signOut({ callbackUrl: `/${locale}` });
                            setUserMenuOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link
                href={`/${locale}/auth/signin`}
                className="px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Sign in
              </Link>
            )}

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
                        className={`group flex items-center gap-3 px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                          pathname === service.href
                            ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                            : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        <svg width="16" height="23" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-5 flex-shrink-0 transition-transform group-hover:scale-110">
                          <path d="M10.6066 0L21.2132 15.6066L10.6066 31.2132L-4.32723e-07 15.6066L10.6066 0Z" fill="url(#gradientMobile)"/>
                          <defs>
                            <linearGradient id="gradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#D9D9D9"/>
                              <stop offset="100%" stopColor="#0066ED"/>
                            </linearGradient>
                          </defs>
                        </svg>
                        <span className="tracking-wide">{service.label}</span>
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

              {/* Authentication in Mobile */}
              {status === 'loading' ? (
                <div className="px-4 py-2">
                  <div className="w-full h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                </div>
              ) : session ? (
                <div className="px-4 py-2 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {session.user?.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {session.user?.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {session.user?.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: `/${locale}` });
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <Link
                  href={`/${locale}/auth/signin`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded transition-colors"
                >
                  <span className="text-base">🔐</span>
                  <span>Sign in</span>
                </Link>
              )}

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
