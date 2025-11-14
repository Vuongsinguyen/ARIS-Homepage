import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';

export async function generateMetadata() {
  return {
    title: 'Our Vision | ARIS',
    description: 'Discover ARIS vision for the future of technology and innovation.',
  };
}

export default async function VisionPage() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/about/vision';
  const locale = pathname.split('/')[1] || 'en';

  return (
    <div className="space-y-8">
      {/* Vision Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Vision
          </h2>
          <p className="text-xl opacity-90">
            Shaping the Future of Technology
          </p>
        </div>
      </div>

      {/* Vision Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              To Be the Leading Force in Digital Innovation
            </h3>

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="leading-relaxed">
                We envision a world where technology seamlessly integrates with human needs,
                creating solutions that are not just functional, but transformative. Our vision
                is to be at the forefront of this digital revolution, pioneering technologies
                that empower businesses and individuals alike.
              </p>

              <p className="leading-relaxed">
                By 2030, we aim to be recognized globally as the premier technology partner
                for organizations seeking innovative, scalable, and sustainable digital solutions.
                We will lead the industry in adopting emerging technologies and setting new
                standards for excellence.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Key Vision Elements
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Global Leadership</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Become a globally recognized technology leader</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Innovation Hub</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Create cutting-edge solutions for tomorrow's challenges</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Sustainable Growth</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Drive sustainable business growth through technology</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Community Impact</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Make a positive impact on communities worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Future Goals */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Our Future Goals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Technology Leadership
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Lead the adoption of emerging technologies like AI, blockchain, and quantum computing
              in enterprise solutions.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Global Expansion
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Expand our presence to new markets and establish strategic partnerships worldwide.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Innovation Ecosystem
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Build a comprehensive innovation ecosystem that fosters creativity and collaboration.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Social Responsibility
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Commit to social responsibility initiatives that create positive change in communities.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Join Us in Shaping the Future
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Be part of our journey to create innovative solutions that make a difference.
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
        >
          Get Involved →
        </Link>
      </div>
    </div>
  );
}