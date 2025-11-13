'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

interface Slide {
  id: number;
  title: string;
  description: string;
  alt: string;
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations('home');
  const { theme } = useTheme();

  // 8 slides với nội dung đa dạng
  const slides: Slide[] = [
    {
      id: 1,
      title: "Delivering Quality - Building Trust",
      description: "Experience the latest in web development with Next.js 16, featuring enhanced performance and developer experience.",
      alt: "Next.js 16 technology showcase"
    },
    {
      id: 2,
      title: "Global Reach",
      description: "Connect with audiences worldwide through our multilingual platform supporting English, Vietnamese, and Japanese.",
      alt: "Global connectivity illustration"
    },
    {
      id: 3,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with Core Web Vitals excellence, ensuring your users have the best experience possible.",
      alt: "Performance optimization graphics"
    },
    {
      id: 4,
      title: "Modern UI/UX Design",
      description: "Beautiful, responsive designs built with Tailwind CSS and modern design principles for exceptional user experience.",
      alt: "Modern UI/UX design showcase"
    },
    {
      id: 5,
      title: "Enterprise Security",
      description: "Bank-grade security measures protect your data and ensure compliance with industry standards and regulations.",
      alt: "Security and compliance illustration"
    },
    {
      id: 6,
      title: "Mobile-First Approach",
      description: "Responsive design that works perfectly on all devices, from mobile phones to desktop computers and tablets.",
      alt: "Mobile responsive design"
    },
    {
      id: 7,
      title: "AI-Powered Features",
      description: "Leverage artificial intelligence for enhanced user experiences, automated content generation, and smart recommendations.",
      alt: "AI technology integration"
    },
    {
      id: 8,
      title: "Advanced Analytics",
      description: "Comprehensive analytics and insights to help you understand your users and optimize your business performance.",
      alt: "Data analytics dashboard"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Theme-based background class
  const backgroundClass = theme === 'dark' 
    ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800'
    : 'bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-500';

  return (
    <section className="relative w-full overflow-hidden" suppressHydrationWarning>
      {/* Background Video - Single video for all slides */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/slider-videos/hero-background-poster.jpg"
      >
        <source src="/slider-videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/60' : 'bg-black/40'} z-10`} />

      {/* Slider Container */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] z-20">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in-delayed max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                      Contact Sales
                    </button>
                    <button className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white/35 hover:text-white transition-colors">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'} z-10`}>
        <div
          className={`h-full ${theme === 'dark' ? 'bg-white' : 'bg-black'} transition-all duration-100 ease-linear`}
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>

      {/* Customer Logos Carousel */}
      <div className="absolute bottom-5 left-0 right-0 z-20 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Multiple sets for seamless infinite loop */}
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-12 items-center shrink-0 px-6">
              <img src="/cust/cus1.png" alt="Customer 1" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/cust/cus2.png" alt="Customer 2" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/cust/cus3.png" alt="Customer 3" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/cust/cus4.png" alt="Customer 4" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/cust/cus5.png" alt="Customer 5" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/cust/cus6.png" alt="Customer 6" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/cust/cus7.png" alt="Customer 7" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/cust/cus8.png" alt="Customer 8" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/cust/cus9.png" alt="Customer 9" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/cust/cus10.png" alt="Customer 10" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/cust/cus11.png" alt="Customer 11" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/cust/cus12.png" alt="Customer 12" className="h-12 w-auto opacity-100 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}