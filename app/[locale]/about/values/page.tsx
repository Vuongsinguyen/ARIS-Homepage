import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';

export async function generateMetadata() {
  return {
    title: 'Core Values | ARIS',
    description: 'Discover the core values that guide ARIS in everything we do.',
  };
}

export default async function ValuesPage() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/about/values';
  const locale = pathname.split('/')[1] || 'en';

  const values = [
    {
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices. Trust is the foundation of all our relationships.',
      icon: '🛡️',
      color: 'blue'
    },
    {
      title: 'Innovation',
      description: 'We continuously seek new ways to solve problems and embrace emerging technologies to deliver cutting-edge solutions.',
      icon: '💡',
      color: 'green'
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in everything we do, maintaining the highest standards of quality and performance.',
      icon: '⭐',
      color: 'yellow'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with our clients and partners to achieve shared success.',
      icon: '🤝',
      color: 'purple'
    },
    {
      title: 'Customer-Centric',
      description: 'Our clients are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.',
      icon: '❤️',
      color: 'red'
    },
    {
      title: 'Continuous Learning',
      description: 'We are committed to ongoing professional development and staying ahead of industry trends and best practices.',
      icon: '📚',
      color: 'indigo'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Values Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-xl opacity-90">
            The Principles That Guide Everything We Do
          </p>
        </div>
      </div>

      {/* Values Introduction */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Guiding Principles for Success
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Our core values are the foundation of our company culture and guide every decision we make.
            They shape how we work with our clients, how we treat each other, and how we approach
            challenges and opportunities. These values are not just words – they are the principles
            that drive our daily actions and long-term vision.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
            <div className="text-center mb-4">
              <div className={`w-16 h-16 bg-${value.color}-100 dark:bg-${value.color}-900/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-3xl">{value.icon}</span>
              </div>
              <h4 className={`text-xl font-semibold text-${value.color}-600 dark:text-${value.color}-400 mb-2`}>
                {value.title}
              </h4>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {/* Values in Action */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Our Values in Action
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              How We Live Our Values
            </h4>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-medium text-gray-900 dark:text-white">Integrity in Practice</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We maintain transparent communication and deliver on our promises, building trust through consistent, honest actions.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h5 className="font-medium text-gray-900 dark:text-white">Innovation Through Learning</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Our team dedicates time to research and experimentation, ensuring we stay at the forefront of technology trends.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h5 className="font-medium text-gray-900 dark:text-white">Collaboration Across Teams</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We foster cross-functional teamwork and knowledge sharing to deliver comprehensive solutions.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Client-Centric Approach
            </h4>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h5 className="font-medium text-gray-900 dark:text-white">Understanding Needs</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We take time to deeply understand our clients' challenges and goals before proposing solutions.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h5 className="font-medium text-gray-900 dark:text-white">Excellence in Delivery</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Every project receives our full attention to detail and commitment to quality results.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h5 className="font-medium text-gray-900 dark:text-white">Continuous Improvement</h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We regularly seek feedback and implement improvements to better serve our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Commitment */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Commitment to These Values
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            These core values are not just guidelines – they are our promise to our clients,
            our team, and our community. We hold ourselves accountable to these principles
            and continuously work to embody them in everything we do.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-${value.color}-100 dark:bg-${value.color}-900/20 text-${value.color}-700 dark:text-${value.color}-300 rounded-full text-sm font-medium`}
              >
                {value.title}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Experience Our Values in Action
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          See how our commitment to these values translates into exceptional service and results.
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
        >
          Work With Us →
        </Link>
      </div>
    </div>
  );
}