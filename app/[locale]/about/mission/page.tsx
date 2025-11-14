import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';

export async function generateMetadata() {
  return {
    title: 'Our Mission | ARIS',
    description: 'Discover ARIS mission to deliver exceptional technology solutions and build lasting partnerships.',
  };
}

export default async function MissionPage() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/about/mission';
  const locale = pathname.split('/')[1] || 'en';

  return (
    <div className="space-y-8">
      {/* Mission Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-8 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-xl opacity-90">
            Empowering Businesses Through Technology Excellence
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            "To Deliver Exceptional Technology Solutions That Drive Real Business Value"
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are committed to excellence in every aspect of our work, ensuring that our solutions
            not only meet but exceed our clients' expectations while building lasting partnerships
            based on trust and mutual success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              What We Do
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Build High-Performance Applications</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Create scalable, fast, and reliable software solutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Implement Modern Design</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Design beautiful, intuitive user experiences</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Optimize for Performance</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Ensure optimal speed, security, and scalability</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 text-xl mr-3">✓</span>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Provide Ongoing Support</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Offer continuous maintenance and improvement</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              How We Do It
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">🔍</span>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Deep Understanding</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Thoroughly understand client needs and challenges</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">🎯</span>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Strategic Planning</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Develop comprehensive, actionable strategies</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">⚡</span>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Agile Execution</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Deliver results efficiently with agile methodologies</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 text-xl mr-3">🤝</span>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Collaborative Partnership</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Work closely with clients throughout the process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Pillars */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Our Mission Pillars
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Excellence
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Striving for perfection in every solution we deliver, maintaining the highest
              standards of quality and performance.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🤝</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Partnership
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Building long-term relationships with our clients, working as trusted partners
              in their success journey.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🚀</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Innovation
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Continuously exploring new technologies and methodologies to deliver
              cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Our Impact
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}