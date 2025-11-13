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
              <div className="text-6xl mb-6">📦</div>
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Innovative Solutions
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Our product portfolio includes cutting-edge software solutions designed to streamline
                    business operations, enhance productivity, and drive digital transformation. Each product
                    is built with scalability, security, and user experience in mind.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Product Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Enterprise-grade security and compliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Scalable cloud-native architecture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Intuitive user interfaces and experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">24/7 technical support and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Regular updates and feature enhancements</span>
                    </li>
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Core Technologies
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Microservices</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">API Gateway</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Kubernetes</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Docker</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">PostgreSQL</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Redis</span>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Ready to Get Started?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Schedule a demo to see how our products can benefit your organization.
                    </p>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 dark:text-blue-400 dark:bg-blue-900/40 dark:hover:bg-blue-900/60 transition-colors"
                    >
                      Contact Sales →
                    </Link>
                  </div>
                </div>
              </div>

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
