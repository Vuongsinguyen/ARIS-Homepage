import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';
import Navbar from '@/components/Navbar';

export async function generateMetadata() {
  return {
    title: 'Use Cases | ARIS',
    description: 'Discover how our solutions drive success across diverse industries and applications.',
  };
}

export default async function UseCasesPage() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/use-cases';
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
                {t('use-cases')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover how our solutions drive success across diverse industries and applications
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Discuss Your Project
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
                <span className="text-gray-900 dark:text-white font-medium">Use Cases</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Use Cases Grid */}
              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Use Case 1 */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏥</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Healthcare Management System</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      Comprehensive patient management with appointment scheduling, EHR, and telemedicine integration.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        React
                      </span>
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                        Node.js
                      </span>
                      <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                        PostgreSQL
                      </span>
                    </div>
                  </div>

                  {/* Use Case 2 */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏪</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">E-commerce Platform</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      Scalable e-commerce solution with inventory management, payment processing, and analytics.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        Next.js
                      </span>
                      <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
                        Stripe
                      </span>
                      <span className="text-xs px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full">
                        Redis
                      </span>
                    </div>
                  </div>

                  {/* Use Case 3 */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🎓</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Learning Management System</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      Online education platform with course management, video streaming, and certification features.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        React
                      </span>
                      <span className="text-xs px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full">
                        AWS
                      </span>
                      <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full">
                        MongoDB
                      </span>
                    </div>
                  </div>

                  {/* Use Case 4 */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">FinTech Application</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      Secure financial application with real-time trading, portfolio management, and analytics.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        TypeScript
                      </span>
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                        Python
                      </span>
                      <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
                        Docker
                      </span>
                    </div>
                  </div>

                  {/* Use Case 5 */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🚛</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Logistics & Supply Chain</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      Advanced logistics platform with route optimization, inventory tracking, and real-time monitoring.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        React
                      </span>
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                        Python
                      </span>
                      <span className="text-xs px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                        PostgreSQL
                      </span>
                    </div>
                  </div>

                  {/* Use Case 6 */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏭</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Manufacturing ERP</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      Complete manufacturing ERP system with production planning, quality control, and IoT integration.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        Angular
                      </span>
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                        .NET
                      </span>
                      <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                        SQL Server
                      </span>
                    </div>
                  </div>
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