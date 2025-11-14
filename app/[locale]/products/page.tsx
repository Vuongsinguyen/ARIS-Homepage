import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';
import Navbar from '@/components/Navbar';

export async function generateMetadata() {
  return {
    title: 'Products | ARIS',
    description: 'Discover our innovative product offerings designed to transform your business operations.',
  };
}

export default async function ProductsPage() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/products';
  const locale = pathname.split('/')[1] || 'en';

  const t = await getTranslations('nav');

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('products')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover our innovative product offerings designed to transform your business operations
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Request Demo
              </Link>
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
                <span className="text-gray-900 dark:text-white font-medium">Products</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

              {/* Products Grid */}
              <section aria-labelledby="products-heading">
                <h2 id="products-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Our Products
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <article className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                      <span className="text-3xl">🏢</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">ARIS Platform</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      A comprehensive enterprise platform that integrates all your business applications
                      into a unified, intelligent system. Streamline operations, improve collaboration,
                      and drive digital transformation across your organization.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        Enterprise
                      </span>
                      <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                        Integration
                      </span>
                      <span className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                        Analytics
                      </span>
                    </div>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      Learn more →
                    </Link>
                  </article>

                  <article className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                      <span className="text-3xl">📊</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">ARIS Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Powerful business intelligence and analytics platform that transforms your data
                      into actionable insights. Create stunning dashboards, generate comprehensive reports,
                      and make data-driven decisions with confidence.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        BI Tools
                      </span>
                      <span className="text-xs px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
                        Dashboards
                      </span>
                      <span className="text-xs px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full">
                        Reporting
                      </span>
                    </div>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors font-medium"
                    >
                      Learn more →
                    </Link>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
