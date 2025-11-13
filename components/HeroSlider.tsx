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
      title: "🚀 Next.js 16 Innovation",
      description: "Experience the latest in web development with Next.js 16, featuring enhanced performance and developer experience.",
      alt: "Next.js 16 technology showcase"
    },
    {
      id: 2,
      title: "🌍 Global Reach",
      description: "Connect with audiences worldwide through our multilingual platform supporting English, Vietnamese, and Japanese.",
      alt: "Global connectivity illustration"
    },
    {
      id: 3,
      title: "⚡ Lightning Fast Performance",
      description: "Optimized for speed with Core Web Vitals excellence, ensuring your users have the best experience possible.",
      alt: "Performance optimization graphics"
    },
    {
      id: 4,
      title: "🎨 Modern UI/UX Design",
      description: "Beautiful, responsive designs built with Tailwind CSS and modern design principles for exceptional user experience.",
      alt: "Modern UI/UX design showcase"
    },
    {
      id: 5,
      title: "🔒 Enterprise Security",
      description: "Bank-grade security measures protect your data and ensure compliance with industry standards and regulations.",
      alt: "Security and compliance illustration"
    },
    {
      id: 6,
      title: "📱 Mobile-First Approach",
      description: "Responsive design that works perfectly on all devices, from mobile phones to desktop computers and tablets.",
      alt: "Mobile responsive design"
    },
    {
      id: 7,
      title: "🤖 AI-Powered Features",
      description: "Leverage artificial intelligence for enhanced user experiences, automated content generation, and smart recommendations.",
      alt: "AI technology integration"
    },
    {
      id: 8,
      title: "📊 Advanced Analytics",
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
                    <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                      Learn More
                    </button>
                    <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-colors backdrop-blur-sm ${
          theme === 'dark' 
            ? 'bg-white/20 hover:bg-white/30 text-white' 
            : 'bg-black/20 hover:bg-black/30 text-black'
        }`}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-colors backdrop-blur-sm ${
          theme === 'dark' 
            ? 'bg-white/20 hover:bg-white/30 text-white' 
            : 'bg-black/20 hover:bg-black/30 text-black'
        }`}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide 
                ? (theme === 'dark' ? 'bg-white' : 'bg-black')
                : (theme === 'dark' ? 'bg-white/50 hover:bg-white/75' : 'bg-black/50 hover:bg-black/75')
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
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
    </section>
  );
}