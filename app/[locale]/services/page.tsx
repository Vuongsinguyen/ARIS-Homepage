import {getTranslations} from 'next-intl/server';
import Navbar from '@/components/Navbar';

export default async function ServicesPage() {
  const t = await getTranslations('nav');

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-5xl w-full">
          {/* H1 - Main heading for the page */}
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-4">{t('services')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Our comprehensive range of professional services
            </p>
          </header>

          <section aria-labelledby="services-heading">
            <h2 id="services-heading" className="sr-only">Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 1 */}
              <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Custom web applications built with modern technologies and best practices.
                </p>
              </article>

              {/* Service Card 2 */}
              <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Native and cross-platform mobile applications for iOS and Android.
                </p>
              </article>

              {/* Service Card 3 */}
              <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Scalable cloud infrastructure and deployment solutions.
                </p>
              </article>

              {/* Service Card 4 */}
              <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Security Consulting</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Comprehensive security audits and implementation of best practices.
                </p>
              </article>

              {/* Service Card 5 */}
              <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Business intelligence and data-driven insights for your organization.
                </p>
              </article>

              {/* Service Card 6 */}
              <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strategic digital marketing campaigns to grow your online presence.
                </p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}