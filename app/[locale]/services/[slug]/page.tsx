import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {headers} from 'next/headers';
import Navbar from '@/components/Navbar';

interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
}

const services: ServiceDetail[] = [
  {
    slug: 'one-stop-services',
    title: 'ONE-STOP SERVICES',
    description: 'Comprehensive end-to-end software development and deployment solutions',
    longDescription: 'Our one-stop services provide a complete package for your software development needs. From initial consulting to deployment and ongoing support, we handle every aspect of your project to ensure success.',
    icon: '🚀',
    features: [
      'Consulting',
      'Software requirement specification development (SRS)',
      'UI/UX design & Software design',
      'Coding, Testing',
      'Product deployment',
      'Product sustaining, maintenance & support'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    slug: 'system-development',
    title: 'SYSTEM/APPLICATION DEVELOPMENT',
    description: 'Custom system and application development services',
    longDescription: 'We specialize in developing custom systems and applications tailored to your business needs. Our team creates robust, scalable solutions that integrate seamlessly with your existing infrastructure.',
    icon: '💻',
    features: [
      'System Customization & Integration',
      'Open-Source Customization',
      'CMS, Web Portal Development',
      'Website Design'
    ],
    technologies: ['PHP', 'Laravel', 'WordPress', 'React', 'Node.js', 'MySQL', 'MongoDB']
  },
  {
    slug: 'mobile-development',
    title: 'MOBILE DEVELOPMENT',
    description: 'Mobile application development across various domains',
    longDescription: 'Our mobile development team creates innovative applications for iOS and Android platforms. We cover enterprise solutions, Fin-Tech, IoT, gaming, and more, ensuring high performance and user engagement.',
    icon: '📱',
    features: [
      'Enterprise Mobilization',
      'Fin-Tech, security, IoT',
      'DRM solutions',
      'Games',
      'Migration and Porting'
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'SQLite']
  },
  {
    slug: 'quality-control',
    title: 'QUALITY CONTROL',
    description: 'Comprehensive software testing and quality assurance',
    longDescription: 'Quality is paramount in software development. Our testing team ensures your applications meet the highest standards through comprehensive testing cycles and user acceptance testing.',
    icon: '✅',
    features: [
      'Mobile, web and desktop application testing',
      'Full testing life cycle for software development',
      'User acceptance test before production go live',
      'Production maintenance Testing'
    ],
    technologies: ['Selenium', 'Appium', 'Jest', 'Cypress', 'Postman', 'Jira']
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX DESIGN',
    description: 'User interface and user experience design services',
    longDescription: 'Great design drives user engagement. Our UI/UX team creates intuitive, beautiful interfaces that provide exceptional user experiences across all platforms and devices.',
    icon: '🎨',
    features: [
      'UX First',
      'Responsive & Adaptive design',
      'Mobile, Web application',
      'Windows form application',
      'Logo, C.I.P, 2D, 3D model design',
      'News, Magazine and books',
      'Clip & Animation'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'After Effects']
  },
  {
    slug: 'research-development',
    title: 'COOPERATIVE RESEARCH AND DEVELOPMENT',
    description: 'Collaborative research and prototype development',
    longDescription: 'Innovation through research and development. We partner with you to explore new technologies, develop prototypes, and bring innovative ideas from concept to production.',
    icon: '�',
    features: [
      'Technical Researching',
      'Prototype development',
      'MVP to Production'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Arduino', 'Raspberry Pi', 'AWS IoT']
  },
  {
    slug: 'digital-transformation',
    title: 'DIGITAL TRANSFORMATION SOLUTIONS',
    description: 'Digital transformation and technology integration',
    longDescription: 'Transform your business with cutting-edge digital solutions. We help you modernize your operations, integrate new technologies, and stay competitive in the digital age.',
    icon: '🔄',
    features: [
      'Digital transformation consulting',
      'Software development',
      'Digital technology integration'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'CI/CD']
  },
  {
    slug: 'bpo-services',
    title: 'BUSINESS PROCESS OUTSOURCING (BPO) SERVICES',
    description: 'Business process digitization and outsourcing',
    longDescription: 'Streamline your operations with our BPO services. We digitize and optimize your business processes, allowing you to focus on your core competencies while we handle the rest.',
    icon: '📋',
    features: [
      'Document digitization',
      'Workflow digitization'
    ],
    technologies: ['OCR', 'RPA', 'Workflow Automation', 'Cloud Storage', 'API Integration']
  },
  {
    slug: 'system-maintenance',
    title: 'SYSTEM MAINTENANCE & OPERATION SERVER/SYSTEM MONITORING',
    description: 'System maintenance and operational support',
    longDescription: 'Keep your systems running smoothly with our comprehensive maintenance and monitoring services. We provide 24/7 support, security checks, and proactive system management.',
    icon: '🔧',
    features: [
      'Technical Support',
      'Support End-users: Help-desk, guideline, training, report',
      'Review of log files, checking data',
      'Security checks',
      'Server maintenance'
    ],
    technologies: ['Nagios', 'Zabbix', 'ELK Stack', 'Prometheus', 'Grafana', 'Ansible']
  }
];

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | ARIS Services`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const locale = pathname.split('/')[1] || 'en';

  const t = await getTranslations('nav');

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {service.description}
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
                <Link
                  href={`/${locale}/services`}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-900 dark:text-white font-medium">{service.title}</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    About This Service
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    {service.longDescription}
                  </p>

                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Technologies We Use
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {service.technologies.map((tech, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center">
                        <span className="text-gray-900 dark:text-white font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Ready to Get Started?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Contact us today to discuss your project requirements and get a custom quote.
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
            </div>
          </div>
        </section>

        {/* Back to Services */}
        <section className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                ← Back to All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}