import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';
import Navbar from '@/components/Navbar';

export default async function ServicesPage() {
  const t = await getTranslations('nav');

  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/services';
  const locale = pathname.split('/')[1] || 'en';

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">⚡</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('services')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Our comprehensive range of professional services designed to accelerate your digital transformation
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
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
                <span className="text-gray-900 dark:text-white font-medium">Services</span>
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
                    Professional Services Overview
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    We offer a comprehensive suite of digital services to help businesses thrive in the modern world. From web and mobile development to cloud solutions and data analytics, our expert team delivers cutting-edge solutions tailored to your specific needs.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Why Choose Our Services?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Expert team with years of industry experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Latest technologies and best practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Scalable and maintainable solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">24/7 support and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Competitive pricing and flexible packages</span>
                    </li>
                  </ul>
                </div>

                {/* Service Categories */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Service Categories
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <span className="text-gray-900 dark:text-white font-medium">🚀 Development Services</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <span className="text-gray-900 dark:text-white font-medium">☁️ Cloud & Infrastructure</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <span className="text-gray-900 dark:text-white font-medium">🔒 Security & Compliance</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <span className="text-gray-900 dark:text-white font-medium">📊 Data & Analytics</span>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <span className="text-gray-900 dark:text-white font-medium">🎯 Digital Marketing</span>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Need a Custom Solution?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Don't see exactly what you need? We can create custom solutions tailored to your specific requirements.
                    </p>
                    <Link
                      href={`/${locale}/contact`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 dark:text-blue-400 dark:bg-blue-900/40 dark:hover:bg-blue-900/60 transition-colors"
                    >
                      Contact Us →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <section aria-labelledby="services-heading">
                <h2 id="services-heading" className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Service Card 1 */}
                  <Link href={`${pathname}/one-stop-services`} className="block">
                    <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors h-full">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">ONE-STOP SERVICES</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Comprehensive end-to-end software development and deployment solutions
                      </p>
                    </article>
                  </Link>

                  {/* Service Card 2 */}
                  <Link href={`${pathname}/system-development`} className="block">
                    <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors h-full">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">�</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">SYSTEM/APPLICATION DEVELOPMENT</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Custom system and application development services
                      </p>
                    </article>
                  </Link>

                  {/* Service Card 3 */}
                  <Link href={`${pathname}/mobile-development`} className="block">
                    <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors h-full">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">📱</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">MOBILE DEVELOPMENT</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Mobile application development across various domains
                      </p>
                    </article>
                  </Link>

                  {/* Service Card 4 */}
                  <Link href={`${pathname}/quality-control`} className="block">
                    <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors h-full">
                      <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">✅</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">QUALITY CONTROL</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Comprehensive software testing and quality assurance
                      </p>
                    </article>
                  </Link>

                  {/* Service Card 5 */}
                  <Link href={`${pathname}/ui-ux-design`} className="block">
                    <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors h-full">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">UI/UX DESIGN</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        User interface and user experience design services
                      </p>
                    </article>
                  </Link>

                  {/* Service Card 6 */}
                  <Link href={`${pathname}/research-development`} className="block">
                    <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors h-full">
                      <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">�</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">COOPERATIVE RESEARCH AND DEVELOPMENT</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Collaborative research and prototype development
                      </p>
                    </article>
                  </Link>

                  {/* Service Card 7 */}
                  <Link href={`${pathname}/digital-transformation`} className="block">
                    <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors h-full">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">DIGITAL TRANSFORMATION SOLUTIONS</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Digital transformation and technology integration
                      </p>
                    </article>
                  </Link>

                  {/* Service Card 8 */}
                  <Link href={`${pathname}/bpo-services`} className="block">
                    <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors h-full">
                      <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">📋</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">BUSINESS PROCESS OUTSOURCING (BPO) SERVICES</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Business process digitization and outsourcing
                      </p>
                    </article>
                  </Link>

                  {/* Service Card 9 */}
                  <Link href={`${pathname}/system-maintenance`} className="block">
                    <article className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-colors h-full">
                      <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🔧</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">SYSTEM MAINTENANCE & OPERATION</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        System maintenance and operational support
                      </p>
                    </article>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}