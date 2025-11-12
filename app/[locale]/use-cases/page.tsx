import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';

export default async function UseCasesPage() {
  const t = await getTranslations('nav');

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-5xl w-full">
          {/* H1 - Main heading for the page */}
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-4">{t('use-cases')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Real-world applications and success stories
            </p>
          </header>

          <section aria-labelledby="use-cases-heading">
            <h2 id="use-cases-heading" className="sr-only">Use Cases</h2>

            <div className="space-y-12">
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
      </main>
    </>
  );
}