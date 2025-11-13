import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';
import Navbar from '@/components/Navbar';

export async function generateMetadata() {
  return {
    title: 'Contact Us | ARIS',
    description: 'Get in touch with the ARIS team. We\'re here to help with your technology needs and answer any questions.',
  };
}

export default async function ContactPage() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/contact';
  const locale = pathname.split('/')[1] || 'en';

  const t = await getTranslations('nav');

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t('contact')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                We'd love to hear from you. Get in touch with our team today.
              </p>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                View Our Services
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
                <span className="text-gray-900 dark:text-white font-medium">Contact</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Ready to start your next project? Have questions about our services?
                    We're here to help. Reach out to us through any of the channels below,
                    and we'll get back to you as soon as possible.
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="text-indigo-500 text-xl mr-4">📧</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          <a href="mailto:info@aris-homepage.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            info@aris-homepage.com
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          We typically respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="text-indigo-500 text-xl mr-4">🐙</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">GitHub</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          <a
                            href="https://github.com/Vuongsinguyen/ARIS-Homepage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          >
                            Vuongsinguyen/ARIS-Homepage
                          </a>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Check out our open source projects
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="text-indigo-500 text-xl mr-4">💼</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">Business Hours</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Monday - Friday: 9:00 AM - 6:00 PM (UTC+7)
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Weekend support available for urgent matters
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Ready to Start a Project?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Tell us about your vision and we'll help bring it to life. From initial consultation to final delivery, we're with you every step of the way.
                    </p>
                    <Link
                      href={`/${locale}/services`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/40 dark:hover:bg-indigo-900/60 transition-colors"
                    >
                      Explore Services →
                    </Link>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Send Us a Message
                  </h3>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        >
                          <option value="">Select a topic</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-apps">Mobile Applications</option>
                          <option value="ai-solutions">AI Solutions</option>
                          <option value="consulting">Consulting</option>
                          <option value="support">Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                          placeholder="Tell us about your project or question..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
                      >
                        Send Message
                      </button>
                    </form>

                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
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
