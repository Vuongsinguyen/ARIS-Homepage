'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useState, useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import GradientHeading from '@/components/GradientHeading';

// Photo Gallery Component with Lightbox
function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const photos = [
    { id: 1, src: '/comp/comp1.png', alt: 'Company Photo 1', description: 'Team collaboration and innovation in action' },
    { id: 2, src: '/comp/comp2.png', alt: 'Company Photo 2', description: 'Modern workspace designed for productivity' },
    { id: 3, src: '/comp/comp3.png', alt: 'Company Photo 3', description: 'Corporate event celebrating achievements' },
    { id: 4, src: '/comp/comp4.png', alt: 'Company Photo 4', description: 'Technology and development excellence' },
    { id: 5, src: '/comp/comp5.png', alt: 'Company Photo 5', description: 'Team building and professional growth' },
    { id: 6, src: '/comp/comp6.png', alt: 'Company Photo 6', description: 'Quality assurance and testing processes' },
    { id: 7, src: '/comp/comp7.png', alt: 'Company Photo 7', description: 'Client presentations and project delivery' },
    { id: 8, src: '/comp/comp8.png', alt: 'Company Photo 8', description: 'Innovation hub and creative spaces' },
    { id: 9, src: '/comp/comp9.png', alt: 'Company Photo 9', description: 'Sustainability and green initiatives' },
  ];

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 overflow-hidden"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors disabled:opacity-30"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : photos.length - 1);
            }}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors disabled:opacity-30"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < photos.length - 1 ? selectedImage + 1 : 0);
            }}
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 py-8 max-h-[90vh]">
            <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden mb-6">
              <img
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                className="max-w-full max-h-[70vh] w-auto h-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="text-center flex-shrink-0">
              <p className="text-white text-lg md:text-xl font-medium mb-2">
                {photos[selectedImage].description}
              </p>
              <p className="text-gray-400 text-sm">
                {selectedImage + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

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
  
  const [selectedTeam, setSelectedTeam] = useState<'marketing' | 'design' | 'engineering' | 'agencies' | 'skills'>('marketing');
  const [dropdownWidth, setDropdownWidth] = useState('auto');

  useEffect(() => {
    // Calculate width based on selected option text
    const options = {
      'marketing': 'ARIS VIETNAM',
      'design': 'CEO MESSAGES',
      'engineering': 'LAB-BASED',
      'agencies': 'SUSTAINABILITY',
      'skills': 'SKILLS & ABILITIES'
    };
    const selectedText = options[selectedTeam as keyof typeof options];
    
    // Create a temporary element to measure text width
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      // Match the actual font size used in the select (47px for better visibility)
      context.font = 'bold 47px system-ui, -apple-system, sans-serif';
      const textWidth = context.measureText(selectedText).width;
      
      // Add padding (30px left + 64px right) + arrow space (60px) + buffer (-10px)
      setDropdownWidth(`${textWidth + 144}px`);
    }
  }, [selectedTeam]);
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

        {/* Services Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="text-center mb-12 relative z-0">
                <GradientHeading className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Accelerate Your Growth with Our DX Services
                </GradientHeading>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {/* Service Card 1 - One-Stop Services */}
                <Link href={`/${locale}/services/one-stop-services`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 h-full relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">One-Stop Services</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Comprehensive end-to-end software development and deployment solutions.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center">
                      Learn more
                      <svg width="32" height="7" viewBox="0 0 32 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M32 7H0V5H21V0L32 7Z" fill="currentColor"/>
                      </svg>
                    </span>
                  </article>
                </Link>

                {/* Service Card 2 - System Development */}
                <Link href={`/${locale}/services/system-development`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 h-full relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">System Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Custom system and application development services.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center">
                      Learn more
                      <svg width="32" height="7" viewBox="0 0 32 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M32 7H0V5H21V0L32 7Z" fill="currentColor"/>
                      </svg>
                    </span>
                  </article>
                </Link>

                {/* Service Card 3 - Mobile Development */}
                <Link href={`/${locale}/services/mobile-development`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 h-full relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Mobile Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Mobile application development across various domains.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center">
                      Learn more
                      <svg width="32" height="7" viewBox="0 0 32 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M32 7H0V5H21V0L32 7Z" fill="currentColor"/>
                      </svg>
                    </span>
                  </article>
                </Link>

                {/* Service Card 4 - Quality Control */}
                <Link href={`/${locale}/services/quality-control`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 h-full relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Quality Control</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Comprehensive software testing and quality assurance.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center">
                      Learn more
                      <svg width="32" height="7" viewBox="0 0 32 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M32 7H0V5H21V0L32 7Z" fill="currentColor"/>
                      </svg>
                    </span>
                  </article>
                </Link>

                {/* Service Card 5 - UI/UX Design */}
                <Link href={`/${locale}/services/ui-ux-design`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 h-full relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">UI/UX Design</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      User interface and user experience design services.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center">
                      Learn more
                      <svg width="32" height="7" viewBox="0 0 32 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M32 7H0V5H21V0L32 7Z" fill="currentColor"/>
                      </svg>
                    </span>
                  </article>
                </Link>

                {/* Service Card 6 - Research & Development */}
                <Link href={`/${locale}/services/research-development`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 h-full relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Research & Development</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Collaborative research and prototype development.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center">
                      Learn more
                      <svg width="32" height="7" viewBox="0 0 32 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M32 7H0V5H21V0L32 7Z" fill="currentColor"/>
                      </svg>
                    </span>
                  </article>
                </Link>

                {/* Service Card 7 - Digital Transformation */}
                <Link href={`/${locale}/services/digital-transformation`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 h-full relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Digital Transformation</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Digital transformation and technology integration.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center">
                      Learn more
                      <svg width="32" height="7" viewBox="0 0 32 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M32 7H0V5H21V0L32 7Z" fill="currentColor"/>
                      </svg>
                    </span>
                  </article>
                </Link>

                {/* Service Card 8 - BPO Services */}
                <Link href={`/${locale}/services/bpo-services`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 h-full relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">BPO Services</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Business process digitization and outsourcing.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center">
                      Learn more
                      <svg width="32" height="7" viewBox="0 0 32 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M32 7H0V5H21V0L32 7Z" fill="currentColor"/>
                      </svg>
                    </span>
                  </article>
                </Link>

                {/* Service Card 9 - System Maintenance */}
                <Link href={`/${locale}/services/system-maintenance`} className="block group">
                  <article className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 h-full relative z-10">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">System Maintenance</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      System maintenance and operational support.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center">
                      Learn more
                      <svg width="32" height="7" viewBox="0 0 32 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M32 7H0V5H21V0L32 7Z" fill="currentColor"/>
                      </svg>
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
                    Introducing our
                    <br />
                    <span className="relative inline-block" style={{ width: dropdownWidth }}>
                      <select
                        value={selectedTeam}
                        onChange={(e) => setSelectedTeam(e.target.value as 'marketing' | 'design' | 'engineering' | 'agencies' | 'skills')}
                        className="appearance-none bg-transparent border-2 border-blue-500 rounded-lg pl-[30px] pr-16 py-4 text-blue-600 dark:text-blue-400 font-bold cursor-pointer hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all my-4 w-full text-[47px]"
                        style={{ minWidth: dropdownWidth }}
                      >
                        <option value="marketing">ARIS VIETNAM</option>
                        <option value="design">CEO MESSAGES</option>
                        <option value="engineering">LAB-BASED</option>
                        <option value="agencies">SUSTAINABILITY</option>
                        <option value="skills">SKILLS & ABILITIES</option>
                      </select>
                      <svg
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-blue-600 dark:text-blue-400 pointer-events-none"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                    <br />
                    with Pride
                  </h2>

                  <div className="space-y-4 mt-8">
                  </div>
                </div>

                {/* Right Column - Features List, CEO Message, or Skills Chart */}
                {selectedTeam === 'design' ? (
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                    {/* Background Image */}
                    <img
                      src="/ceo.jpg"
                      alt="CEO Background"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark Overlay - Strip at bottom, expands upward on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/90 via-black/70 to-transparent group-hover:h-full transition-all duration-500 ease-in-out flex flex-col justify-center text-center text-white p-8">
                      {/* CEO Content - Inside the dark overlay */}
                      <div className="flex-1 flex flex-col justify-center group cursor-pointer">
                        {/* CEO Name and Title */}
                        <div className="mb-6 text-right">
                          <h3 className="text-3xl font-bold mb-2">Nhat Tran</h3>
                          <p className="text-xl opacity-90">Chief Executive Officer</p>
                        </div>

                        {/* CEO Message - Hidden by default, shown on hover */}
                        <blockquote className="text-lg leading-relaxed max-w-2xl text-right opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                          At ARIS, we believe in delivering quality software solutions that drive real business value.
                          With over 15 years of experience, our team is committed to building trust through innovation,
                          excellence, and unwavering dedication to our clients&apos; success.
                        </blockquote>
                      </div>
                    </div>
                  </div>
                ) : selectedTeam === 'skills' ? (
                  <ResponsiveContainer width="100%" height={500}>
                    <RadarChart data={[
                      { skill: 'Data Science', value: 4.0, fullMark: 5 },
                      { skill: 'Analysis', value: 4.5, fullMark: 5 },
                      { skill: 'Design', value: 4.0, fullMark: 5 },
                      { skill: 'FE Dev', value: 4.0, fullMark: 5 },
                      { skill: 'BE Dev', value: 5.0, fullMark: 5 },
                      { skill: 'Quality Control', value: 4.75, fullMark: 5 },
                      { skill: 'Mobile', value: 5.0, fullMark: 5 },
                      { skill: 'Server', value: 4.0, fullMark: 5 },
                    ]}>
                      <PolarGrid 
                        stroke="#D1D5DB" 
                        className="dark:stroke-gray-600"
                      />
                      <PolarAngleAxis 
                        dataKey="skill" 
                        tick={{ 
                          fill: '#374151',
                          fontSize: 14,
                          fontWeight: 600
                        }}
                        className="dark:fill-white"
                      />
                      <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 5]}
                        tick={{ 
                          fill: '#9CA3AF',
                          fontSize: 12
                        }}
                      />
                      <Radar
                        name="Skills"
                        dataKey="value"
                        stroke="#3B82F6"
                        fill="#3B82F6"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          padding: '8px 12px'
                        }}
                        formatter={(value: number) => [`${value.toFixed(2)} / 5.0`, 'Score']}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                ) : selectedTeam === 'agencies' ? (
                  <PhotoGallery />
                ) : (
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <div className="space-y-6">
                      {selectedTeam === 'marketing' && (
                        <>
                          <Link href={`/${locale}/about`} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded px-2 -mx-2">
                            <span className="text-gray-900 dark:text-white font-medium">About Us</span>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <Link href={`/${locale}/about/vision`} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded px-2 -mx-2">
                            <span className="text-gray-900 dark:text-white font-medium">Our Vision - Mission and Core Values</span>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <Link href={`/${locale}/about/timeline`} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded px-2 -mx-2">
                            <span className="text-gray-900 dark:text-white font-medium">Timelines</span>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <Link href={`/${locale}/about/skills`} className="flex items-center justify-between py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded px-2 -mx-2">
                            <span className="text-gray-900 dark:text-white font-medium">Explore innovation</span>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </>
                      )}

                    {selectedTeam === 'engineering' && (
                      <>
                        <Link href={`/${locale}/about`} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded px-2 -mx-2">
                          <span className="text-gray-900 dark:text-white font-medium">LAB-BASED Development at ARIS Vietnam</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <Link href={`/${locale}/about/values`} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded px-2 -mx-2">
                          <span className="text-gray-900 dark:text-white font-medium">Advantages - Disadvantages</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                        <Link href={`/${locale}/about/skills`} className="flex items-center justify-between py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded px-2 -mx-2">
                          <span className="text-gray-900 dark:text-white font-medium">Structure and Form of LAB-Based Development</span>
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </>
                    )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
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
                  id="use-cases-prev"
                  className="flex w-12 h-12 items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700 group"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  id="use-cases-next"
                  className="flex w-12 h-12 items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200 dark:border-gray-700 group"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Swiper Slider - Full Width with Overflow */}
          <div className="relative">
            <div className="overflow-visible pl-4 sm:pl-6 lg:pl-8 xl:pl-[calc((100vw-1330px)/2+2rem)]">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1.2}
                navigation={{
                  prevEl: '#use-cases-prev',
                  nextEl: '#use-cases-next',
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1.5,
                  },
                  768: {
                    slidesPerView: 2.2,
                  },
                  1024: {
                    slidesPerView: 2.5,
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                }}
                className="!overflow-visible pb-6"
              >
                  {/* Use Case Card 1 - E-Commerce */}
                  <SwiperSlide>
                    <div className="relative h-[562px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group cursor-pointer">
                      {/* Background Video */}
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid1-poster.jpg"
                        autoPlay
                      >
                        <source src="/video/vid1.mp4" type="video/mp4" />
                      </video>

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>

                      {/* Blur Effect */}
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>

                      {/* Content */}
                      <div className="relative h-full p-8 flex flex-col text-white">
                        {/* Logo */}
                        <div className="mb-6">
                          <img
                            src="/logos/ecommerce-logo.svg"
                            alt="E-Commerce Company"
                            className="w-16 h-16 object-contain"
                          />
                        </div>

                        {/* Bottom Content */}
                        <div className="mt-auto">
                          {/* Stats */}
                          <div className="mb-6">
                            <div className="text-5xl font-bold mb-2">45%</div>
                            <div className="text-lg font-medium opacity-90">Increase in conversion rate</div>
                          </div>

                          {/* Quote */}
                          <div className="mb-6">
                            <blockquote className="text-sm leading-relaxed opacity-90 mb-4">
                              "Our e-commerce platform transformed how we connect with customers, delivering seamless shopping experiences that drive real results."
                            </blockquote>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-sm">Sarah Chen</div>
                                <div className="text-xs opacity-75">E-Commerce Director</div>
                              </div>
                              <Link
                                href={`/${locale}/use-cases/e-commerce`}
                                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-white/40"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Use Case Card 2 - SaaS */}
                  <SwiperSlide>
                    <div className="relative h-[562px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group cursor-pointer">
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid2-poster.jpg"
                        autoPlay
                      >
                        <source src="/video/vid2.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
                      <div className="relative h-full p-8 flex flex-col text-white">
                        <div className="mb-6">
                          <img
                            src="/logos/saas-logo.svg"
                            alt="SaaS Company"
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        <div className="mt-auto">
                          <div className="mb-6">
                            <div className="text-5xl font-bold mb-2">$2M</div>
                            <div className="text-lg font-medium opacity-90">Annual recurring revenue</div>
                          </div>
                          <div className="mb-6">
                            <blockquote className="text-sm leading-relaxed opacity-90 mb-4">
                              "Moving to a SaaS model with scalable infrastructure helped us reach new markets and scale efficiently across regions."
                            </blockquote>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-sm">Michael Zhang</div>
                                <div className="text-xs opacity-75">CTO, TechScale</div>
                              </div>
                              <Link
                                href={`/${locale}/use-cases/saas-applications`}
                                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-white/40"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Use Case Card 3 - Content Management */}
                  <SwiperSlide>
                    <div className="relative h-[562px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group cursor-pointer">
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid3-poster.jpg"
                        autoPlay
                      >
                        <source src="/video/vid3.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
                      <div className="relative h-full p-8 flex flex-col text-white">
                        <div className="mb-6">
                          <img
                            src="/logos/content-logo.svg"
                            alt="Content Management Company"
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        <div className="mt-auto">
                          <div className="mb-6">
                            <div className="text-5xl font-bold mb-2">80%</div>
                            <div className="text-lg font-medium opacity-90">Faster content publishing</div>
                          </div>
                          <div className="mb-6">
                            <blockquote className="text-sm leading-relaxed opacity-90 mb-4">
                              "The headless CMS solution revolutionized our content workflow, enabling our team to publish faster without compromising quality."
                            </blockquote>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-sm">Emma Williams</div>
                                <div className="text-xs opacity-75">Content Manager</div>
                              </div>
                              <Link
                                href={`/${locale}/use-cases/content-management`}
                                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-white/40"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Use Case Card 4 - FinTech */}
                  <SwiperSlide>
                    <div className="relative h-[562px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group cursor-pointer">
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid4-poster.jpg"
                        autoPlay
                      >
                        <source src="/video/vid4.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
                      <div className="relative h-full p-8 flex flex-col text-white">
                        <div className="mb-6">
                          <img
                            src="/logos/fintech-logo.svg"
                            alt="FinTech Company"
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        <div className="mt-auto">
                          <div className="mb-6">
                            <div className="text-5xl font-bold mb-2">99.9%</div>
                            <div className="text-lg font-medium opacity-90">Transaction success rate</div>
                          </div>
                          <div className="mb-6">
                            <blockquote className="text-sm leading-relaxed opacity-90 mb-4">
                              "Secure, compliant payment processing with enterprise-grade encryption has made us the trusted choice for financial services."
                            </blockquote>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-sm">David Park</div>
                                <div className="text-xs opacity-75">Head of Security</div>
                              </div>
                              <Link
                                href={`/${locale}/use-cases/fintech-solutions`}
                                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-white/40"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Use Case Card 5 - Healthcare */}
                  <SwiperSlide>
                    <div className="relative h-[562px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group cursor-pointer">
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid5-poster.jpg"
                        autoPlay
                      >
                        <source src="/video/vid5.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
                      <div className="relative h-full p-8 flex flex-col text-white">
                        <div className="mb-6">
                          <img
                            src="/logos/healthcare-logo.svg"
                            alt="Healthcare Company"
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        <div className="mt-auto">
                          <div className="mb-6">
                            <div className="text-5xl font-bold mb-2">10K+</div>
                            <div className="text-lg font-medium opacity-90">Patients served monthly</div>
                          </div>
                          <div className="mb-6">
                            <blockquote className="text-sm leading-relaxed opacity-90 mb-4">
                              "HIPAA-compliant platform with telemedicine capabilities transformed how we deliver care to patients across multiple locations."
                            </blockquote>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-sm">Dr. Lisa Johnson</div>
                                <div className="text-xs opacity-75">Medical Director</div>
                              </div>
                              <Link
                                href={`/${locale}/use-cases/healthcare-systems`}
                                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-white/40"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Use Case Card 6 - Education */}
                  <SwiperSlide>
                    <div className="relative h-[562px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group cursor-pointer">
                      <video
                        className="absolute inset-0 w-full h-full object-cover"
                        loop
                        muted
                        playsInline
                        poster="/video/vid6-poster.jpg"
                        autoPlay
                      >
                        <source src="/video/vid6.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors"></div>
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
                      <div className="relative h-full p-8 flex flex-col text-white">
                        <div className="mb-6">
                          <img
                            src="/logos/education-logo.svg"
                            alt="Education Company"
                            className="w-16 h-16 object-contain"
                          />
                        </div>
                        <div className="mt-auto">
                          <div className="mb-6">
                            <div className="text-5xl font-bold mb-2">92%</div>
                            <div className="text-lg font-medium opacity-90">Student engagement rate</div>
                          </div>
                          <div className="mb-6">
                            <blockquote className="text-sm leading-relaxed opacity-90 mb-4">
                              "Interactive learning platform with real-time progress tracking helped us create engaging educational experiences at scale."
                            </blockquote>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold text-sm">Prof. James Miller</div>
                                <div className="text-xs opacity-75">Dean of Education</div>
                              </div>
                              <Link
                                href={`/${locale}/use-cases/education-platforms`}
                                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-white/40"
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
              <div className="max-w-[1330px] mx-auto">
                <div className="text-center">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
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
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>View All Products</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
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
                    <div className="aspect-[2/1] bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
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
                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed line-clamp-3">
                        Explore the latest trends shaping digital transformation in businesses worldwide.
                      </p>
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
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  View All News
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
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
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
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

        {/* Recruitments Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Join Our Team
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Be part of our innovative team and help shape the future of technology
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recruitment Card 1 - C++ Developer */}
                <Link href={`/${locale}/recruitments`} className="block group">
                  <article className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                      <span className="text-2xl">💻</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">C++ Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Join our team to develop high-performance applications and systems using C++. Work on challenging projects involving system programming and embedded systems.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                        C++
                      </span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                        STL
                      </span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">
                        Qt
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">📍 Ho Chi Minh City • Full-time</span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                        Apply now →
                      </span>
                    </div>
                  </article>
                </Link>

                {/* Recruitment Card 2 - Software Development Intern */}
                <Link href={`/${locale}/recruitments`} className="block group">
                  <article className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Software Development Intern</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Perfect opportunity for students to gain real-world experience in software development. Work on exciting projects and learn from experienced developers.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">
                        JavaScript
                      </span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                        React
                      </span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
                        Node.js
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">📍 Ho Chi Minh City • Internship</span>
                      <span className="text-green-600 dark:text-green-400 font-medium group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                        Apply now →
                      </span>
                    </div>
                  </article>
                </Link>
              </div>

              <div className="text-center mt-8">
                <Link
                  href={`/${locale}/recruitments`}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>View All Opportunities</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1330px] mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
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
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                              <div className="flex items-start gap-2 sm:col-span-2">
                                <span className="text-lg mt-0.5">📍</span>
                                <div>
                                  <div className="font-medium text-gray-900 dark:text-white text-sm">ADDRESS</div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">{office.address}</div>
                                </div>
                              </div>

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
