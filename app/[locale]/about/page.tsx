import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';

export async function generateMetadata() {
  return {
    title: 'About Us | ARIS',
    description: 'Learn more about ARIS - A high-performance, multilingual website built with modern technologies.',
  };
}

export default async function AboutOverviewPage() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/about';
  const locale = pathname.split('/')[1] || 'en';

  const t = await getTranslations('nav');

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to ARIS
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              ARIS is a leading technology company specializing in high-performance web applications,
              modern design solutions, and innovative software development. With over 15 years of
              experience, we deliver quality solutions that drive real business value.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our team combines technical expertise with creative vision to build scalable,
              user-friendly applications that meet the evolving needs of our clients across
              various industries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Quick Facts
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Founded:</span>
                <span className="text-gray-900 dark:text-white font-medium">2009</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Headquarters:</span>
                <span className="text-gray-900 dark:text-white font-medium">Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Team Size:</span>
                <span className="text-gray-900 dark:text-white font-medium">50+ Experts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Projects Completed:</span>
                <span className="text-gray-900 dark:text-white font-medium">500+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          What We Do
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Web Development
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              High-performance web applications built with modern technologies
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              UI/UX Design
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Beautiful, intuitive designs that enhance user experience
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Mobile Apps
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Cross-platform mobile applications for iOS and Android
            </p>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Technologies We Use
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            'Next.js', 'React', 'TypeScript', 'Node.js',
            'Python', 'PostgreSQL', 'MongoDB', 'AWS'
          ].map((tech) => (
            <div key={tech} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
              <span className="text-gray-900 dark:text-white font-medium text-sm">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Work Together?
        </h3>
        <p className="mb-6 opacity-90">
          Have a project in mind? Let's discuss how we can help bring your ideas to life.
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-gray-50 transition-colors"
        >
          Contact Us →
        </Link>
      </div>
    </div>
  );
}
