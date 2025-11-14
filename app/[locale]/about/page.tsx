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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About ARIS Vietnam
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Leading technology company specializing in high-performance web applications, modern design solutions, and innovative software development.
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get In Touch
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
              <span className="text-gray-900 dark:text-white font-medium">About</span>
            </li>
          </ol>
        </div>
      </nav>
      {/* Navigation Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          ARIS VIETNAM
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href={`/${locale}/about/vision`}
            className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">👁️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Mission and Core Values
            </p>
          </Link>

          <Link
            href={`/${locale}/about/timeline`}
            className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Timelines
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Our journey and milestones
            </p>
          </Link>

          <Link
            href={`/${locale}/blog`}
            className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Explore Innovation
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Latest insights and trends
            </p>
          </Link>
        </div>
      </div>

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

      {/* Corporate Profile */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Corporate Profile
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Company Overview
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              ARIS Corporation is a technology solutions provider committed to delivering
              innovative software development services and digital transformation solutions.
              We specialize in creating scalable, high-performance applications that drive
              business growth and operational efficiency.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our mission is to empower businesses with cutting-edge technology solutions
              that adapt to their evolving needs and help them stay competitive in the
              digital landscape.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Core Values
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-gray-900 dark:text-white font-medium">Innovation</span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Embracing new technologies and creative solutions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-gray-900 dark:text-white font-medium">Quality</span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Delivering excellence in every project</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="text-gray-900 dark:text-white font-medium">Collaboration</span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Working closely with clients as partners</p>
                </div>
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

      {/* Our Offices */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Offices
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Vietnam - Ho Chi Minh Headquarter */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🇻🇳</div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                ARIS VIETNAM CO., LTD
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                Vietnam - Ho Chi Minh Headquarter
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-lg">📍</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">ADDRESS</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Waseco Building, 10 Pho Quang Str., Ward 2, Tan Binh Dist., Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📧</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">EMAIL</p>
                  <p className="text-gray-600 dark:text-gray-300">contact@aris-vn.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📞</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">PHONE</p>
                  <p className="text-gray-600 dark:text-gray-300">+84-28-38424483</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📠</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">FAX</p>
                  <p className="text-gray-600 dark:text-gray-300">+84-28-38424473</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hanoi Branch */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🇻🇳</div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Chi nhánh Hanoi
              </h4>
              <p className="text-green-600 dark:text-green-400 font-medium">
                Hanoi Branch
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-lg">📍</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">ADDRESS</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Coming Soon - Hanoi, Vietnam
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📧</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">EMAIL</p>
                  <p className="text-gray-600 dark:text-gray-300">hanoi@aris-vn.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📞</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">PHONE</p>
                  <p className="text-gray-600 dark:text-gray-300">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Japan Office */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg border border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🇯🇵</div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                ARIS JAPAN Inc.
              </h4>
              <p className="text-red-600 dark:text-red-400 font-medium">
                Japan Office
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-lg">📍</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">ADDRESS</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Coming Soon - Tokyo, Japan
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📧</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">EMAIL</p>
                  <p className="text-gray-600 dark:text-gray-300">info@aris-japan.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📞</span>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">PHONE</p>
                  <p className="text-gray-600 dark:text-gray-300">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Work Together?
        </h3>
        <p className="mb-6 opacity-90">
          Have a project in mind? Let's discuss how we can help bring your ideas to life.
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-50 transition-colors"
        >
          Contact Us →
        </Link>
      </div>
    </div>
  );
}
