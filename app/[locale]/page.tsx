'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useState} from 'react';

import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
          {question}
        </h3>
        <svg
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 pt-2">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const t = useTranslations('home');
  const params = useParams();
  const locale = params.locale as string || 'en';
  
  const [selectedTeam, setSelectedTeam] = useState('marketing');
  const [activeProductCategory, setActiveProductCategory] = useState('all');
  const [activeOffice, setActiveOffice] = useState('vietnam-hcm');

  const offices = [
    {
      id: 'vietnam-hcm',
      company: 'ARIS VIETNAM CO., LTD',
      location: 'Vietnam - Ho Chi Minh Headquarter',
      address: 'Waseco Building, 10 Pho Quang Str., Ward 2, Tan Binh Dist., Ho Chi Minh City, Vietnam',
      email: 'contact@aris-vn.com',
      phone: '+84-28-38424483',
      fax: '+84-28-38424473',
      flag: '🇻🇳'
    },
    {
      id: 'vietnam-hanoi',
      company: 'Chi nhánh Hanoi',
      location: 'Hanoi Branch',
      address: 'Detech Tower II Building, 107 Nguyen Phong Sac Str., Cau Giay Dist., Hanoi, Vietnam',
      email: 'contact@aris-vn.com',
      phone: '+84-28-38424483',
      fax: '+84-28-38424473',
      flag: '🇻🇳'
    },
    {
      id: 'japan-tokyo',
      company: 'ARIS JAPAN Inc.',
      location: 'Tokyo Headquarter',
      address: 'Shinjuku Nomura Bldg 10F, 1-26-2 Nishishinjuku, Shinjuku-ku, Tokyo 163-0510, Japan',
      email: 'dev-info@ml.aris-kk.co.jp',
      phone: '+81-3-3340-1053',
      fax: '+81-3-3340-1054',
      flag: '🇯🇵'
    }
  ];

  const productCategories = [
    { id: 'all', label: 'All Products', icon: '🧩' },
    { id: 'development', label: 'Development', icon: '💻' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'communication', label: 'Communication', icon: '💬' },
    { id: 'automation', label: 'Automation', icon: '🤖' },
    { id: 'security', label: 'Security', icon: '🔐' },
    { id: 'cloud', label: 'Cloud', icon: '☁️' },
  ];

  const products = [
    {
      id: 'project-management',
      category: 'development',
      title: 'Project Management Suite',
      description: 'Comprehensive project management tools with real-time collaboration and analytics.',
      icon: '📋',
      color: 'blue',
      href: `/${locale}/products/project-management`
    },
    {
      id: 'analytics-dashboard',
      category: 'analytics',
      title: 'Analytics Dashboard',
      description: 'Advanced data visualization and business intelligence platform.',
      icon: '📊',
      color: 'green',
      href: `/${locale}/products/analytics-dashboard`
    },
    {
      id: 'communication-platform',
      category: 'communication',
      title: 'Communication Platform',
      description: 'Unified communication solution with chat, video calls, and file sharing.',
      icon: '💬',
      color: 'purple',
      href: `/${locale}/products/communication-platform`
    },
    {
      id: 'automation-tools',
      category: 'automation',
      title: 'Automation Tools',
      description: 'Workflow automation and AI-powered process optimization solutions.',
      icon: '🤖',
      color: 'orange',
      href: `/${locale}/products/automation-tools`
    },
    {
      id: 'security-suite',
      category: 'security',
      title: 'Security Suite',
      description: 'Enterprise-grade security solutions with threat detection and compliance.',
      icon: '🔐',
      color: 'red',
      href: `/${locale}/products/security-suite`
    },
    {
      id: 'cloud-infrastructure',
      category: 'cloud',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure with automated deployment and monitoring.',
      icon: '☁️',
      color: 'teal',
      href: `/${locale}/products/cloud-infrastructure`
    },
    {
      id: 'code-editor',
      category: 'development',
      title: 'Advanced Code Editor',
      description: 'Powerful code editing environment with AI-assisted development features.',
      icon: '✏️',
      color: 'indigo',
      href: `/${locale}/products/code-editor`
    },
    {
      id: 'data-warehouse',
      category: 'analytics',
      title: 'Data Warehouse Platform',
      description: 'Scalable data storage and processing solution for big data analytics.',
      icon: '🏗️',
      color: 'cyan',
      href: `/${locale}/products/data-warehouse`
    },
    {
      id: 'video-conferencing',
      category: 'communication',
      title: 'Video Conferencing Suite',
      description: 'Enterprise-grade video conferencing with screen sharing and recording.',
      icon: '📹',
      color: 'pink',
      href: `/${locale}/products/video-conferencing`
    },
  ];

  const filteredProducts = activeProductCategory === 'all'
    ? products
    : products.filter(product => product.category === activeProductCategory);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {/* Hero Slider */}
        <HeroSlider />

        {/* Customers Section */}
        <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="w-full">
            {/* Customer Logos Marquee - Row 1 (Right to Left) */}
            <div className="relative overflow-hidden mb-6">
              <div className="flex items-center space-x-8 animate-[marquee-customer_30s_linear_infinite]">
                {/* First set of logos */}
                <div className="flex items-center space-x-8 flex-shrink-0">
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Spotify</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">MoMA</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Arc'teryx</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Complex</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Nordstrom</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Rona</span>
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex items-center space-x-8 flex-shrink-0">
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Spotify</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">MoMA</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Arc'teryx</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Complex</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Nordstrom</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Rona</span>
                  </div>
                </div>

                {/* Third set for seamless loop */}
                <div className="flex items-center space-x-8 flex-shrink-0">
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Spotify</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">MoMA</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Arc'teryx</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Complex</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Nordstrom</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Rona</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Logos Marquee - Row 2 (Left to Right - Reverse) */}
            <div className="relative overflow-hidden">
              <div className="flex items-center space-x-8 animate-[marquee-customer-reverse_30s_linear_infinite]">
                {/* First set of logos */}
                <div className="flex items-center space-x-8 flex-shrink-0">
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Shopify</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Unity</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Loveholidays</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Mejuri</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Replit</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Carhartt</span>
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex items-center space-x-8 flex-shrink-0">
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Shopify</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Unity</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Loveholidays</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Mejuri</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Replit</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Carhartt</span>
                  </div>
                </div>

                {/* Third set for seamless loop */}
                <div className="flex items-center space-x-8 flex-shrink-0">
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Shopify</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Unity</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Loveholidays</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Mejuri</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Replit</span>
                  </div>
                  <div className="w-32 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-gray-500 dark:text-gray-400 font-bold text-sm">Carhartt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Services
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Comprehensive digital solutions across 9 specialized service areas to accelerate your business growth and innovation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Service Card 1 - One-Stop Services */}
                <Link href={`/${locale}/services/one-stop-services`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-amber-400 dark:hover:border-amber-500 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-200 dark:group-hover:bg-amber-800 transition-colors">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">One-Stop Services</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Comprehensive end-to-end software development and deployment solutions.
                    </p>
                    <span className="text-amber-600 dark:text-amber-400 font-medium group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                      Learn more →
                    </span>
                  </article>
                </Link>

                {/* Service Card 2 - System Development */}
                <Link href={`/${locale}/services/system-development`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <span className="text-2xl">🖥️</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">System Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Custom system and application development services.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      Learn more →
                    </span>
                  </article>
                </Link>

                {/* Service Card 3 - Mobile Development */}
                <Link href={`/${locale}/services/mobile-development`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-green-400 dark:hover:border-green-500 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Mobile Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Mobile application development across various domains.
                    </p>
                    <span className="text-green-600 dark:text-green-400 font-medium group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                      Learn more →
                    </span>
                  </article>
                </Link>

                {/* Service Card 4 - Quality Control */}
                <Link href={`/${locale}/services/quality-control`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-red-400 dark:hover:border-red-500 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Quality Control</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Comprehensive software testing and quality assurance.
                    </p>
                    <span className="text-red-600 dark:text-red-400 font-medium group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors">
                      Learn more →
                    </span>
                  </article>
                </Link>

                {/* Service Card 5 - UI/UX Design */}
                <Link href={`/${locale}/services/ui-ux-design`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">UI/UX Design</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      User interface and user experience design services.
                    </p>
                    <span className="text-purple-600 dark:text-purple-400 font-medium group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                      Learn more →
                    </span>
                  </article>
                </Link>

                {/* Service Card 6 - Research & Development */}
                <Link href={`/${locale}/services/research-development`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors">
                      <span className="text-2xl">�</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Research & Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Collaborative research and prototype development.
                    </p>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                      Learn more →
                    </span>
                  </article>
                </Link>

                {/* Service Card 7 - Digital Transformation */}
                <Link href={`/${locale}/services/digital-transformation`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800 transition-colors">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Digital Transformation</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Digital transformation and technology integration.
                    </p>
                    <span className="text-cyan-600 dark:text-cyan-400 font-medium group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                      Learn more →
                    </span>
                  </article>
                </Link>

                {/* Service Card 8 - BPO Services */}
                <Link href={`/${locale}/services/bpo-services`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800 transition-colors">
                      <span className="text-2xl">�</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">BPO Services</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Business process digitization and outsourcing.
                    </p>
                    <span className="text-orange-600 dark:text-orange-400 font-medium group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">
                      Learn more →
                    </span>
                  </article>
                </Link>

                {/* Service Card 9 - System Maintenance */}
                <Link href={`/${locale}/services/system-maintenance`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-800 transition-colors">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">System Maintenance</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      System maintenance and operational support.
                    </p>
                    <span className="text-teal-600 dark:text-teal-400 font-medium group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                      Learn more →
                    </span>
                  </article>
                </Link>
              </div>

              <div className="text-center mt-8">
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>View All Services</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Title and Selector */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                    Everything{' '}
                    <div className="relative inline-block">
                      <select
                        value={selectedTeam}
                        onChange={(e) => setSelectedTeam(e.target.value)}
                        className="appearance-none bg-transparent border-2 border-blue-500 rounded-lg px-4 py-2 pr-10 text-blue-600 dark:text-blue-400 font-bold cursor-pointer hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      >
                        <option value="marketing">marketing teams</option>
                        <option value="design">Design teams</option>
                        <option value="engineering">Engineering teams</option>
                        <option value="agencies">Agencies</option>
                      </select>
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600 dark:text-blue-400 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <br />
                    love about
                  </h2>

                  <div className="space-y-4 mt-8">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Agility</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Create, iterate, and move faster with modern tools
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Creativity</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Build custom solutions without limitations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Collaboration</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Work together seamlessly across teams
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Features List */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                    {selectedTeam === 'marketing' && (
                      <>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">Visual content management</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">Built-in SEO optimization</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">Campaign landing pages</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3">
                          <span className="text-gray-900 dark:text-white font-medium">Analytics integration</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </>
                    )}

                    {selectedTeam === 'design' && (
                      <>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">Visual design system</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">Component library</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">Responsive layouts</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3">
                          <span className="text-gray-900 dark:text-white font-medium">Design to code workflow</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </>
                    )}

                    {selectedTeam === 'engineering' && (
                      <>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">Production-ready code</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">Reusable components</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">API integration</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3">
                          <span className="text-gray-900 dark:text-white font-medium">Version control</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </>
                    )}

                    {selectedTeam === 'agencies' && (
                      <>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">Client management</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">White-label solutions</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-900 dark:text-white font-medium">Scalable infrastructure</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="flex items-center justify-between py-3">
                          <span className="text-gray-900 dark:text-white font-medium">Multi-site management</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-visible">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
            <div className="max-w-[1330px] mx-auto overflow-visible">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Use Cases
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  See how our clients achieve measurable success with our solutions
                </p>
              </div>

              {/* Navigation Buttons - Top Right */}
              <div className="flex justify-end gap-2 mb-6">
                {/* Previous Button */}
                <button
                  onClick={() => {
                    const container = document.getElementById('use-cases-scroll');
                    if (container) {
                      container.scrollBy({ left: -504, behavior: 'smooth' });
                    }
                  }}
                  className="flex w-12 h-12 items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={() => {
                    const container = document.getElementById('use-cases-scroll');
                    if (container) {
                      container.scrollBy({ left: 504, behavior: 'smooth' });
                    }
                  }}
                  className="flex w-12 h-12 items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Cards Container with Overflow */}
              <div className="relative overflow-visible -mx-4 sm:-mx-6 lg:-mx-8">
                <div id="use-cases-scroll" className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide px-4 sm:px-6 lg:px-8">
                  {/* Use Case Card 1 - E-Commerce */}
                  <div className="flex-none w-[30rem] snap-start group">
                    <article 
                      className="relative h-[39rem] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
                      onMouseEnter={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video && video.paused) {
                          video.play().catch((error) => {
                            // Ignore AbortError which happens when play is interrupted by pause
                            if (error.name !== 'AbortError') {
                              console.error('Video play error:', error);
                            }
                          });
                        }
                      }}
                      onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                    >
                      {/* Background Video */}
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid1-poster.jpg"
                      >
                        <source src="/video/vid1.mp4" type="video/mp4" />
                      </video>
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>

                      {/* Stop Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          const video = e.currentTarget.closest('article')?.querySelector('video');
                          if (video) {
                            if (video.paused) {
                              video.play().catch((error) => {
                                // Ignore AbortError which happens when play is interrupted by pause
                                if (error.name !== 'AbortError') {
                                  console.error('Video play error:', error);
                                }
                              });
                            } else {
                              video.pause();
                            }
                          }
                        }}
                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Play/Pause video"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      </button>
                      
                      {/* Content */}
                      <Link href={`/${locale}/use-cases/e-commerce`} className="relative h-full p-8 flex flex-col justify-between text-white block">
                        <div>
                          <div className="text-6xl font-bold mb-2">45%</div>
                          <div className="text-xl font-semibold mb-4">Increase in conversion rate</div>
                        </div>
                        
                        <div>
                          <p className="text-sm mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            "Our e-commerce platform transformed how we connect with customers, delivering seamless shopping experiences that drive real results."
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-sm">Sarah Chen</div>
                              <div className="text-xs opacity-75">E-Commerce Director</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </div>

                  {/* Use Case Card 2 - SaaS */}
                  <div className="flex-none w-[30rem] snap-start group">
                    <article 
                      className="relative h-[39rem] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
                      onMouseEnter={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video && video.paused) {
                          video.play().catch((error) => {
                            // Ignore AbortError which happens when play is interrupted by pause
                            if (error.name !== 'AbortError') {
                              console.error('Video play error:', error);
                            }
                          });
                        }
                      }}
                      onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                    >
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid2-poster.jpg"
                      >
                        <source src="/video/vid2.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          const video = e.currentTarget.closest('article')?.querySelector('video');
                          if (video) {
                            if (video.paused) {
                              video.play().catch((error) => {
                                // Ignore AbortError which happens when play is interrupted by pause
                                if (error.name !== 'AbortError') {
                                  console.error('Video play error:', error);
                                }
                              });
                            } else {
                              video.pause();
                            }
                          }
                        }}
                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Play/Pause video"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      </button>
                      <Link href={`/${locale}/use-cases/saas-applications`} className="relative h-full p-8 flex flex-col justify-between text-white block">
                        <div>
                          <div className="text-6xl font-bold mb-2">$2M</div>
                          <div className="text-xl font-semibold mb-4">Annual recurring revenue</div>
                        </div>
                        <div>
                          <p className="text-sm mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            "Moving to a SaaS model with scalable infrastructure helped us reach new markets and scale efficiently across regions."
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-sm">Michael Zhang</div>
                              <div className="text-xs opacity-75">CTO, TechScale</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </div>

                  {/* Use Case Card 3 - Content Management */}
                  <div className="flex-none w-[30rem] snap-start group">
                    <article 
                      className="relative h-[39rem] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
                      onMouseEnter={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video && video.paused) {
                          video.play().catch((error) => {
                            // Ignore AbortError which happens when play is interrupted by pause
                            if (error.name !== 'AbortError') {
                              console.error('Video play error:', error);
                            }
                          });
                        }
                      }}
                      onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                    >
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid3-poster.jpg"
                      >
                        <source src="/video/vid3.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          const video = e.currentTarget.closest('article')?.querySelector('video');
                          if (video) {
                            if (video.paused) {
                              video.play().catch((error) => {
                                // Ignore AbortError which happens when play is interrupted by pause
                                if (error.name !== 'AbortError') {
                                  console.error('Video play error:', error);
                                }
                              });
                            } else {
                              video.pause();
                            }
                          }
                        }}
                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Play/Pause video"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      </button>
                      <Link href={`/${locale}/use-cases/content-management`} className="relative h-full p-8 flex flex-col justify-between text-white block">
                        <div>
                          <div className="text-6xl font-bold mb-2">80%</div>
                          <div className="text-xl font-semibold mb-4">Faster content publishing</div>
                        </div>
                        <div>
                          <p className="text-sm mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            "The headless CMS solution revolutionized our content workflow, enabling our team to publish faster without compromising quality."
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-sm">Emma Williams</div>
                              <div className="text-xs opacity-75">Content Manager</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </div>

                  {/* Use Case Card 4 - FinTech */}
                  <div className="flex-none w-[30rem] snap-start group">
                    <article 
                      className="relative h-[39rem] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
                      onMouseEnter={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video && video.paused) {
                          video.play().catch((error) => {
                            // Ignore AbortError which happens when play is interrupted by pause
                            if (error.name !== 'AbortError') {
                              console.error('Video play error:', error);
                            }
                          });
                        }
                      }}
                      onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                    >
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid4-poster.jpg"
                      >
                        <source src="/video/vid4.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          const video = e.currentTarget.closest('article')?.querySelector('video');
                          if (video) {
                            if (video.paused) {
                              video.play().catch((error) => {
                                // Ignore AbortError which happens when play is interrupted by pause
                                if (error.name !== 'AbortError') {
                                  console.error('Video play error:', error);
                                }
                              });
                            } else {
                              video.pause();
                            }
                          }
                        }}
                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Play/Pause video"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      </button>
                      <Link href={`/${locale}/use-cases/fintech-solutions`} className="relative h-full p-8 flex flex-col justify-between text-white block">
                        <div>
                          <div className="text-6xl font-bold mb-2">99.9%</div>
                          <div className="text-xl font-semibold mb-4">Transaction success rate</div>
                        </div>
                        <div>
                          <p className="text-sm mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            "Secure, compliant payment processing with enterprise-grade encryption has made us the trusted choice for financial services."
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-sm">David Park</div>
                              <div className="text-xs opacity-75">Head of Security</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </div>

                  {/* Use Case Card 5 - Healthcare */}
                  <div className="flex-none w-[30rem] snap-start group">
                    <article 
                      className="relative h-[39rem] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
                      onMouseEnter={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video && video.paused) {
                          video.play().catch((error) => {
                            // Ignore AbortError which happens when play is interrupted by pause
                            if (error.name !== 'AbortError') {
                              console.error('Video play error:', error);
                            }
                          });
                        }
                      }}
                      onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                    >
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid5-poster.jpg"
                      >
                        <source src="/video/vid5.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          const video = e.currentTarget.closest('article')?.querySelector('video');
                          if (video) {
                            if (video.paused) {
                              video.play().catch((error) => {
                                // Ignore AbortError which happens when play is interrupted by pause
                                if (error.name !== 'AbortError') {
                                  console.error('Video play error:', error);
                                }
                              });
                            } else {
                              video.pause();
                            }
                          }
                        }}
                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Play/Pause video"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      </button>
                      <Link href={`/${locale}/use-cases/healthcare-systems`} className="relative h-full p-8 flex flex-col justify-between text-white block">
                        <div>
                          <div className="text-6xl font-bold mb-2">10K+</div>
                          <div className="text-xl font-semibold mb-4">Patients served monthly</div>
                        </div>
                        <div>
                          <p className="text-sm mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            "HIPAA-compliant platform with telemedicine capabilities transformed how we deliver care to patients across multiple locations."
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-sm">Dr. Lisa Johnson</div>
                              <div className="text-xs opacity-75">Medical Director</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </div>

                  {/* Use Case Card 6 - Education */}
                  <div className="flex-none w-[30rem] snap-start group">
                    <article 
                      className="relative h-[39rem] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
                      onMouseEnter={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video && video.paused) {
                          video.play().catch((error) => {
                            // Ignore AbortError which happens when play is interrupted by pause
                            if (error.name !== 'AbortError') {
                              console.error('Video play error:', error);
                            }
                          });
                        }
                      }}
                      onMouseLeave={(e) => {
                        const video = e.currentTarget.querySelector('video');
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                    >
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid6-poster.jpg"
                      >
                        <source src="/video/vid6.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          const video = e.currentTarget.closest('article')?.querySelector('video');
                          if (video) {
                            if (video.paused) {
                              video.play().catch((error) => {
                                // Ignore AbortError which happens when play is interrupted by pause
                                if (error.name !== 'AbortError') {
                                  console.error('Video play error:', error);
                                }
                              });
                            } else {
                              video.pause();
                            }
                          }
                        }}
                        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Play/Pause video"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      </button>
                      <Link href={`/${locale}/use-cases/education-platforms`} className="relative h-full p-8 flex flex-col justify-between text-white block">
                        <div>
                          <div className="text-6xl font-bold mb-2">92%</div>
                          <div className="text-xl font-semibold mb-4">Student engagement rate</div>
                        </div>
                        <div>
                          <p className="text-sm mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                            "Interactive learning platform with real-time progress tracking helped us create engaging educational experiences at scale."
                          </p>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold text-sm">Prof. James Miller</div>
                              <div className="text-xs opacity-75">Dean of Education</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="text-center mt-12">
                <Link
                  href={`/${locale}/use-cases`}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Explore all success stories</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Products
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Innovative software solutions designed to transform your business operations
                </p>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveProductCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeProductCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={product.href} className="block group">
                    <article className={`p-6 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-${product.color}-400 dark:hover:border-${product.color}-500 hover:shadow-lg transition-all duration-300 h-full`}>
                      <div className={`w-12 h-12 bg-${product.color}-100 dark:bg-${product.color}-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-${product.color}-200 dark:group-hover:bg-${product.color}-800 transition-colors`}>
                        <span className="text-2xl">{product.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{product.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {product.description}
                      </p>
                      <span className={`text-${product.color}-600 dark:text-${product.color}-400 font-medium group-hover:text-${product.color}-700 dark:group-hover:text-${product.color}-300 transition-colors`}>
                        Learn more →
                      </span>
                    </article>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  href={`/${locale}/products`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Latest News
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Stay updated with the latest industry insights, company announcements, and technology trends
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - Featured News (Large) */}
                <Link href={`/${locale}/news/digital-transformation-trends`} className="block group">
                  <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="aspect-[16/10] bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                      <span className="text-6xl">📈</span>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">Technology</span>
                        <span className="text-gray-400 dark:text-gray-500">•</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Dec 15, 2024</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Digital Transformation Trends 2025
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                        Explore the latest trends shaping digital transformation in businesses worldwide. From AI-powered automation to cloud-native architectures, discover what's driving innovation in the enterprise.
                      </p>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                        <span>Read full article</span>
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>

                {/* Right Column - 3 Small News Articles */}
                <div className="flex flex-col gap-6">
                  {/* Small News Card 1 */}
                  <Link href={`/${locale}/news/ai-innovation-breakthrough`} className="block group">
                    <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row">
                      <div className="sm:w-40 sm:h-40 w-full aspect-video sm:aspect-square bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">🤖</span>
                      </div>
                      <div className="p-5 flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-green-600 dark:text-green-400 font-semibold uppercase tracking-wider">AI & Innovation</span>
                          <span className="text-gray-400 dark:text-gray-500 text-xs">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Dec 10, 2024</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                          AI Innovation Breakthrough
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          Discover how our latest AI advancements are revolutionizing business processes.
                        </p>
                      </div>
                    </article>
                  </Link>

                  {/* Small News Card 2 */}
                  <Link href={`/${locale}/news/company-expansion-announcement`} className="block group">
                    <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row">
                      <div className="sm:w-40 sm:h-40 w-full aspect-video sm:aspect-square bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">🏢</span>
                      </div>
                      <div className="p-5 flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-wider">Company News</span>
                          <span className="text-gray-400 dark:text-gray-500 text-xs">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Dec 5, 2024</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                          Company Expansion Announcement
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          Exciting news about our global expansion and new office openings.
                        </p>
                      </div>
                    </article>
                  </Link>

                  {/* Small News Card 3 */}
                  <Link href={`/${locale}/news/product-launch-2025`} className="block group">
                    <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row">
                      <div className="sm:w-40 sm:h-40 w-full aspect-video sm:aspect-square bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">🚀</span>
                      </div>
                      <div className="p-5 flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-orange-600 dark:text-orange-400 font-semibold uppercase tracking-wider">Product Launch</span>
                          <span className="text-gray-400 dark:text-gray-500 text-xs">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Dec 1, 2024</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2">
                          New Product Launch 2025
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          Introducing our revolutionary new platform designed for modern enterprises.
                        </p>
                      </div>
                    </article>
                  </Link>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  href={`/${locale}/news`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  View All News
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Blog
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Insights, tutorials, and expert opinions on technology, business, and innovation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Blog Card 1 */}
                <Link href={`/${locale}/blog/mastering-react-development`} className="block group">
                  <article className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                      <span className="text-4xl">⚛️</span>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">Development</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Mastering React Development
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Advanced techniques and best practices for building scalable React applications.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">By John Doe • Dec 12, 2024</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>

                {/* Blog Card 2 */}
                <Link href={`/${locale}/blog/cloud-migration-strategies`} className="block group">
                  <article className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 flex items-center justify-center">
                      <span className="text-4xl">☁️</span>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">Cloud Computing</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        Cloud Migration Strategies
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Comprehensive guide to successfully migrating your applications to the cloud.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">By Jane Smith • Dec 8, 2024</span>
                        <span className="text-green-600 dark:text-green-400 font-medium group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>

                {/* Blog Card 3 */}
                <Link href={`/${locale}/blog/cybersecurity-best-practices`} className="block group">
                  <article className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                    <div className="aspect-video bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 flex items-center justify-center">
                      <span className="text-4xl">🔒</span>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-red-600 dark:text-red-400 font-medium mb-2">Security</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        Cybersecurity Best Practices
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Essential security measures to protect your business from cyber threats.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">By Mike Johnson • Dec 3, 2024</span>
                        <span className="text-red-600 dark:text-red-400 font-medium group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>

              <div className="text-center mt-8">
                <Link
                  href={`/${locale}/blog`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  View All Blog Posts
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Find answers to common questions about our services and how we can help your business
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {/* FAQ 1 */}
                <FAQItem
                  question="What services does ARIS provide?"
                  answer="ARIS provides comprehensive software development services including System Development, Mobile Development, Quality Control, UI/UX Design, Digital Transformation, BPO Services, and System Maintenance. We offer end-to-end solutions tailored to your business needs."
                />

                {/* FAQ 2 */}
                <FAQItem
                  question="How long does a typical project take?"
                  answer="Project timelines vary based on scope and complexity. A typical web application takes 3-6 months, while mobile apps range from 4-8 months. We provide detailed timelines during the initial consultation and maintain transparent communication throughout the project lifecycle."
                />

                {/* FAQ 3 */}
                <FAQItem
                  question="Do you provide ongoing support after project completion?"
                  answer="Yes, we offer comprehensive maintenance and support packages. Our System Maintenance service includes regular updates, bug fixes, performance optimization, and technical support to ensure your systems run smoothly long after deployment."
                />

                {/* FAQ 4 */}
                <FAQItem
                  question="What industries do you specialize in?"
                  answer="We have extensive experience across multiple industries including E-Commerce, SaaS, FinTech, Healthcare, Education, and Enterprise Solutions. Our team adapts to industry-specific requirements and compliance standards."
                />

                {/* FAQ 5 */}
                <FAQItem
                  question="Can you work with our existing development team?"
                  answer="Absolutely! We offer flexible engagement models including team augmentation, where our developers integrate seamlessly with your existing team. We also provide dedicated teams or full project outsourcing based on your needs."
                />

                {/* FAQ 6 */}
                <FAQItem
                  question="What is your development process?"
                  answer="We follow Agile methodology with regular sprints, daily standups, and continuous client communication. Our process includes: Discovery & Planning → Design → Development → Testing → Deployment → Maintenance. You'll have full visibility throughout each phase."
                />

                {/* FAQ 7 */}
                <FAQItem
                  question="How do you ensure code quality?"
                  answer="We implement rigorous Quality Control processes including code reviews, automated testing, manual testing, and performance optimization. Our QA team follows industry best practices and uses modern testing frameworks to ensure high-quality deliverables."
                />

                {/* FAQ 8 */}
                <FAQItem
                  question="What technologies do you work with?"
                  answer="We work with modern tech stacks including React, Next.js, Vue, Angular for frontend; Node.js, Python, Java, .NET for backend; React Native, Flutter for mobile; and various databases, cloud platforms (AWS, Azure, GCP), and DevOps tools."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Ready to transform your business? Let's discuss how we can help you achieve your goals.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  {/* Office Tabs */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Offices</h3>
                    
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {offices.map((office) => (
                        <button
                          key={office.id}
                          onClick={() => setActiveOffice(office.id)}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeOffice === office.id
                              ? 'bg-blue-600 text-white shadow-lg'
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          <span>{office.flag}</span>
                          <span className="hidden sm:inline">{office.company}</span>
                          <span className="sm:hidden">{office.id.split('-')[1].toUpperCase()}</span>
                        </button>
                      ))}
                    </div>

                    {/* Active Office Content */}
                    {offices.map((office) => (
                      activeOffice === office.id && (
                        <div key={office.id} className="space-y-4">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">{office.flag}</span>
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{office.company}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{office.location}</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                                <span className="text-lg">📍</span>
                                Address
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400 pl-7">
                                {office.address}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                              <div className="flex items-start gap-2">
                                <span className="text-lg mt-0.5">📧</span>
                                <div>
                                  <div className="font-medium text-gray-900 dark:text-white text-sm">EMAIL</div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">{office.email}</div>
                                </div>
                              </div>

                              <div className="flex items-start gap-2">
                                <span className="text-lg mt-0.5">📞</span>
                                <div>
                                  <div className="font-medium text-gray-900 dark:text-white text-sm">PHONE</div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">{office.phone}</div>
                                </div>
                              </div>

                              <div className="flex items-start gap-2">
                                <span className="text-lg mt-0.5">📠</span>
                                <div>
                                  <div className="font-medium text-gray-900 dark:text-white text-sm">FAX</div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">{office.fax}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    ))}
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Business Hours</h3>
                    <div className="space-y-2 text-gray-600 dark:text-gray-400">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>8:30 AM - 5:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Send us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
