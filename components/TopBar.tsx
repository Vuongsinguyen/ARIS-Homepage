'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export default function TopBar() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const contactInfo = [
    {
      type: 'email',
      label: 'contact@aris-vn.com',
      href: 'mailto:contact@aris-vn.com',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      type: 'phone',
      label: '+84 28 3842-4483',
      href: 'tel:+842838424483',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      type: 'hours',
      label: 'Mon-Fri: 8:30AM-5:30PM',
      href: null,
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-black dark:bg-gray-900 text-white border-b border-gray-800 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">
          {/* Contact Info - Desktop */}
          <div className="hidden sm:flex items-center space-x-6">
            {/* Email - show on medium screens and up */}
            <div className="flex items-center space-x-2">
              {contactInfo[0].icon}
              {contactInfo[0].href ? (
                <Link
                  href={contactInfo[0].href}
                  className="text-xs text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
                >
                  {contactInfo[0].label}
                </Link>
              ) : (
                <span className="text-xs text-gray-300 dark:text-gray-400">{contactInfo[0].label}</span>
              )}
            </div>
            {/* Phone - only show on large screens */}
            <div className="hidden lg:flex items-center space-x-2">
              {contactInfo[1].icon}
              {contactInfo[1].href ? (
                <Link
                  href={contactInfo[1].href}
                  className="text-xs text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
                >
                  {contactInfo[1].label}
                </Link>
              ) : (
                <span className="text-xs text-gray-300 dark:text-gray-400">{contactInfo[1].label}</span>
              )}
            </div>
            {/* Hours - only show on large screens */}
            <div className="hidden lg:flex items-center space-x-2">
              {contactInfo[2].icon}
              <span className="text-xs text-gray-300 dark:text-gray-400">{contactInfo[2].label}</span>
            </div>
          </div>

          {/* Contact Info - Mobile (only email) */}
          <div className="flex sm:hidden items-center space-x-3">
            <div className="flex items-center space-x-1">
              {contactInfo[0].icon}
              {contactInfo[0].href ? (
                <Link
                  href={contactInfo[0].href}
                  className="text-xs text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
                >
                  {contactInfo[0].label}
                </Link>
              ) : (
                <span className="text-xs text-gray-300 dark:text-gray-400">{contactInfo[0].label}</span>
              )}
            </div>
          </div>

          {/* Sale Banner - Desktop */}
          <div className="hidden sm:flex flex-1 mx-4">
            <div className="relative overflow-hidden w-full" style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
            }}>
              <div
                className="whitespace-nowrap text-xs text-yellow-400"
                style={{
                  animation: 'marquee 20s linear infinite'
                }}
              >
                🎉 Happy New Year SALE OFF 10% From 12 Dec, 2025 - 12 Jan, 2026
              </div>
            </div>
          </div>

          {/* Sale Banner - Mobile */}
          <div className="flex sm:hidden flex-1 mx-2">
            <div className="relative overflow-hidden w-full" style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
            }}>
              <div
                className="whitespace-nowrap text-xs text-yellow-400"
                style={{
                  animation: 'marquee 18s linear infinite'
                }}
              >
                🎉 SALE OFF 10% (12 Dec - 12 Jan)
              </div>
            </div>
          </div>

          {/* Language Switcher - Desktop */}
          <div className="hidden sm:flex items-center">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 text-xs text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors px-3 py-1.5 rounded-md hover:bg-gray-900 dark:hover:bg-gray-800"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <span className="font-medium">{currentLanguage.name}</span>
                <svg
                  className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-50"
                    onClick={() => setDropdownOpen(false)}
                  />
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 top-full mt-1 w-40 bg-black dark:bg-gray-800 border border-gray-800 dark:border-gray-700 rounded-md shadow-xl z-60 overflow-hidden">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={pathname.replace(`/${locale}`, `/${lang.code}`)}
                        onClick={() => setDropdownOpen(false)}
                        className={`flex items-center space-x-2 px-3 py-2.5 text-xs hover:bg-gray-900 dark:hover:bg-gray-700 transition-colors ${
                          lang.code === locale ? 'bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200' : 'text-gray-300 dark:text-gray-400'
                        }`}
                      >
                        <span className="font-medium">{lang.name}</span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Language Switcher - Mobile */}
          <div className="flex sm:hidden">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 text-xs text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors px-2 py-1 rounded hover:bg-gray-900 dark:hover:bg-gray-800"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <svg
                  className={`w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-50"
                    onClick={() => setDropdownOpen(false)}
                  />
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 top-full mt-1 w-32 bg-black dark:bg-gray-800 border border-gray-800 dark:border-gray-700 rounded-md shadow-xl z-60 overflow-hidden">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={pathname.replace(`/${locale}`, `/${lang.code}`)}
                        onClick={() => setDropdownOpen(false)}
                        className={`flex items-center space-x-2 px-3 py-2 text-xs hover:bg-gray-900 dark:hover:bg-gray-700 transition-colors ${
                          lang.code === locale ? 'bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200' : 'text-gray-300 dark:text-gray-400'
                        }`}
                      >
                        <span className="font-medium">{lang.code.toUpperCase()}</span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}