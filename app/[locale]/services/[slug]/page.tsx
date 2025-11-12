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
    slug: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    longDescription: 'We create high-performance, scalable web applications using the latest technologies and frameworks. Our web development services include responsive design, progressive web apps, e-commerce platforms, and custom business applications.',
    icon: '🚀',
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Custom Business Applications',
      'API Development',
      'Performance Optimization'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL']
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    longDescription: 'Our mobile development team creates native iOS and Android applications, as well as cross-platform solutions using React Native and Flutter. We ensure your app provides an exceptional user experience across all devices.',
    icon: '📱',
    features: [
      'Native iOS Development',
      'Native Android Development',
      'Cross-platform Solutions',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'SQLite']
  },
  {
    slug: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    longDescription: 'We design and implement cloud-native architectures that scale with your business. From migration to cloud platforms to building serverless applications, we help you leverage the power of cloud computing.',
    icon: '☁️',
    features: [
      'Cloud Migration',
      'Serverless Architecture',
      'Microservices Design',
      'DevOps & CI/CD',
      'Infrastructure as Code',
      'Monitoring & Logging'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    slug: 'security-consulting',
    title: 'Security Consulting',
    description: 'Comprehensive security audits and implementation of best practices.',
    longDescription: 'Security is paramount in today\'s digital landscape. Our security experts conduct thorough audits, implement robust security measures, and provide ongoing monitoring to protect your applications and data.',
    icon: '🔒',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Consulting',
      'Data Encryption',
      'Access Control',
      'Incident Response'
    ],
    technologies: ['OWASP', 'NIST', 'ISO 27001', 'SIEM', 'IDS/IPS', 'SSL/TLS']
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    description: 'Business intelligence and data-driven insights for your organization.',
    longDescription: 'Transform your data into actionable insights with our comprehensive data analytics services. We help you build data pipelines, create dashboards, and implement machine learning models to drive business decisions.',
    icon: '📊',
    features: [
      'Data Pipeline Development',
      'Business Intelligence',
      'Predictive Analytics',
      'Machine Learning',
      'Data Visualization',
      'Real-time Analytics'
    ],
    technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'TensorFlow']
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns to grow your online presence.',
    longDescription: 'Increase your online visibility and drive growth with our digital marketing strategies. From SEO and content marketing to social media campaigns and paid advertising, we help you reach your target audience effectively.',
    icon: '🎯',
    features: [
      'SEO Optimization',
      'Content Marketing',
      'Social Media Marketing',
      'PPC Advertising',
      'Email Marketing',
      'Conversion Optimization'
    ],
    technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'Mailchimp', 'HubSpot', 'SEMrush']
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