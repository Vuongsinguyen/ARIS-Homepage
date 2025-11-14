import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import {headers} from 'next/headers';

export async function generateMetadata() {
  return {
    title: 'Company Timeline | ARIS',
    description: 'Explore ARIS journey from founding to present day - key milestones and achievements.',
  };
}

export default async function TimelinePage() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/en/about/timeline';
  const locale = pathname.split('/')[1] || 'en';

  const timelineEvents = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'ARIS was established in Ho Chi Minh City, Vietnam, with a vision to deliver exceptional software solutions.',
      icon: '🚀',
      type: 'milestone'
    },
    {
      year: '2010',
      title: 'First Major Project',
      description: 'Successfully delivered our first enterprise-level web application for a Fortune 500 company.',
      icon: '💼',
      type: 'achievement'
    },
    {
      year: '2012',
      title: 'Team Expansion',
      description: 'Grew from 5 founding members to 15 skilled professionals, establishing our core development team.',
      icon: '👥',
      type: 'growth'
    },
    {
      year: '2014',
      title: 'International Recognition',
      description: 'Received first international client from Japan, marking our entry into the global market.',
      icon: '🌍',
      type: 'milestone'
    },
    {
      year: '2015',
      title: 'Technology Innovation',
      description: 'Adopted modern web technologies including React and Node.js, revolutionizing our development process.',
      icon: '💡',
      type: 'innovation'
    },
    {
      year: '2016',
      title: 'Tokyo Office Opening',
      description: 'Established our first international office in Tokyo, Japan, to better serve our growing client base.',
      icon: '🏢',
      type: 'expansion'
    },
    {
      year: '2017',
      title: '100 Projects Milestone',
      description: 'Celebrated completion of our 100th project, demonstrating consistent quality and client satisfaction.',
      icon: '🎉',
      type: 'achievement'
    },
    {
      year: '2018',
      title: 'Mobile App Revolution',
      description: 'Launched our mobile development division, expanding services to include iOS and Android applications.',
      icon: '📱',
      type: 'innovation'
    },
    {
      year: '2019',
      title: 'Cloud Migration Services',
      description: 'Introduced comprehensive cloud migration and DevOps services, helping clients modernize their infrastructure.',
      icon: '☁️',
      type: 'service'
    },
    {
      year: '2020',
      title: 'Remote Work Excellence',
      description: 'Successfully transitioned to fully remote operations during global challenges, maintaining productivity and quality.',
      icon: '🏠',
      type: 'adaptation'
    },
    {
      year: '2021',
      title: 'AI & ML Integration',
      description: 'Launched AI and Machine Learning services, incorporating cutting-edge technologies into our solutions.',
      icon: '🤖',
      type: 'innovation'
    },
    {
      year: '2022',
      title: '500 Projects Completed',
      description: 'Reached the milestone of 500 successfully delivered projects across various industries and technologies.',
      icon: '🎯',
      type: 'achievement'
    },
    {
      year: '2023',
      title: 'Next.js 13 Adoption',
      description: 'Fully adopted Next.js 13 with App Router, enhancing our web application performance and developer experience.',
      icon: '⚡',
      type: 'technology'
    },
    {
      year: '2024',
      title: 'Sustainable Practices',
      description: 'Implemented comprehensive sustainability initiatives, including green coding practices and eco-friendly operations.',
      icon: '🌱',
      type: 'responsibility'
    },
    {
      year: '2025',
      title: 'Future Forward',
      description: 'Continuing our journey of innovation, preparing for emerging technologies like Web3, Metaverse, and advanced AI.',
      icon: '🔮',
      type: 'future'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      milestone: 'blue',
      achievement: 'green',
      growth: 'purple',
      innovation: 'orange',
      expansion: 'indigo',
      service: 'teal',
      adaptation: 'pink',
      technology: 'cyan',
      responsibility: 'emerald',
      future: 'violet'
    };
    return colors[type as keyof typeof colors] || 'gray';
  };

  return (
    <div className="space-y-8">
      {/* Timeline Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg p-8 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our Journey
          </h2>
          <p className="text-xl opacity-90">
            15+ Years of Innovation and Growth
          </p>
        </div>
      </div>

      {/* Timeline Introduction */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            From Startup to Industry Leader
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Our journey began with a simple vision: to deliver exceptional technology solutions
            that make a real difference. Over the past 15+ years, we've grown from a small team
            of passionate developers to a global technology partner, continuously adapting and
            innovating to meet the evolving needs of our clients.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              {/* Timeline dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${getTypeColor(event.type)}-500 rounded-full border-4 border-white dark:border-gray-800 z-10`}></div>

              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-${getTypeColor(event.type)}-100 dark:bg-${getTypeColor(event.type)}-900/20 rounded-full flex items-center justify-center`}>
                      <span className="text-2xl">{event.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-3 py-1 bg-${getTypeColor(event.type)}-100 dark:bg-${getTypeColor(event.type)}-900/20 text-${getTypeColor(event.type)}-700 dark:text-${getTypeColor(event.type)}-300 rounded-full text-sm font-medium capitalize`}>
                          {event.type}
                        </span>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">{event.year}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {event.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Statistics */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          Journey Highlights
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-300">Global Offices</div>
          </div>
        </div>
      </div>

      {/* Future Outlook */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Looking Ahead
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            As we continue our journey, we're excited about the future of technology and
            the opportunities it brings. Our commitment to innovation, quality, and client
            success remains stronger than ever as we navigate the next chapter of our story.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">
              🚀 Emerging Technologies
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
              🌍 Global Expansion
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              💡 Innovation Leadership
            </span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              🤝 Client Partnership
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Join Our Continuing Story
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Be part of our next chapter. Let's create something amazing together.
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
        >
          Start Your Project →
        </Link>
      </div>
    </div>
  );
}