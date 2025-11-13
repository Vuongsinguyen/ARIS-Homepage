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
        <section className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">🎯</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('use-cases')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover how our solutions drive success across diverse industries and applications
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Real-World Applications
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Our solutions have been successfully implemented across various industries, helping businesses
                    transform their operations and achieve remarkable results. Each use case demonstrates our
                    commitment to delivering tailored solutions that drive real business value.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Industries We Serve
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Healthcare & Medical</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">E-commerce & Retail</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Education & E-learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Financial Services & FinTech</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Manufacturing & Logistics</span>
                    </li>
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Technologies We Use
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">React</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Next.js</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Node.js</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Python</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">AWS</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                      <span className="text-gray-900 dark:text-white font-medium">Docker</span>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Have a Similar Project?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Let's discuss how we can adapt our solutions to meet your specific business needs.
                    </p>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-orange-600 bg-orange-50 hover:bg-orange-100 dark:text-orange-400 dark:bg-orange-900/40 dark:hover:bg-orange-900/60 transition-colors"
                    >
                      Contact Us →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Use Cases Grid */}
              <section aria-labelledby="use-cases-heading">
                <h2 id="use-cases-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Featured Use Cases
                </h2>

                <div className="space-y-8">
                  {/* Use Case 1 */}
                  <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">🏥</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">Healthcare Management System</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          A comprehensive patient management system for a large hospital network, featuring appointment scheduling,
                          electronic health records, and telemedicine integration.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                            React
                          </span>
                          <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                            Node.js
                          </span>
                          <span className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                            PostgreSQL
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Use Case 2 */}
                  <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">🏪</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">E-commerce Platform</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          A scalable e-commerce solution for a retail chain with inventory management,
                          payment processing, and customer analytics dashboard.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                            Next.js
                          </span>
                          <span className="text-xs px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
                            Stripe
                          </span>
                          <span className="text-xs px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full">
                            Redis
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Use Case 3 */}
                  <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">🎓</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">Learning Management System</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          An online education platform with course management, video streaming,
                          progress tracking, and certification features for educational institutions.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                            React
                          </span>
                          <span className="text-xs px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full">
                            AWS
                          </span>
                          <span className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full">
                            MongoDB
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>

                  {/* Use Case 4 */}
                  <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-8 hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">🚀</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">FinTech Application</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          A secure financial application with real-time trading, portfolio management,
                          and advanced analytics for investment firms.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                            TypeScript
                          </span>
                          <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                            Python
                          </span>
                          <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
                            Docker
                          </span>
                        </div>
                      </div>
                    </div>
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
                className="inline-flex items-center text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300 transition-colors"
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