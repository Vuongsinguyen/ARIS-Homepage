import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';
import Navbar from '@/components/Navbar';

export default async function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/about';
  const locale = pathname.split('/')[1] || 'en';

  const t = await getTranslations('nav');

  const menuItems = [
    { id: 'overview', label: 'About Us', href: `/${locale}/about` },
    { id: 'ceo', label: 'CEO Message', href: `/${locale}/about/ceo` },
    { id: 'vision', label: 'Our Vision', href: `/${locale}/about/vision` },
    { id: 'mission', label: 'Our Mission', href: `/${locale}/about/mission` },
    { id: 'values', label: 'Core Values', href: `/${locale}/about/values` },
    { id: 'skills', label: 'Skill & Ability', href: `/${locale}/about/skills` },
    { id: 'timeline', label: 'Timelines', href: `/${locale}/about/timeline` },
  ];

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About ARIS
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Learn more about our company, vision, and commitment to excellence
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-900 dark:text-white font-medium">About</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Content with Sidebar */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      About ARIS
                    </h3>
                    <nav className="space-y-2">
                      {menuItems.map((item) => (
                        <Link
                          key={item.id}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-md transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}