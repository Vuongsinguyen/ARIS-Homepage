// Performance monitoring and optimization utilities
export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  cls: number; // Cumulative Layout Shift
  fid: number; // First Input Delay
  ttfb: number; // Time to First Byte
}

// Web Vitals tracking
export function trackWebVitals() {
  if (typeof window !== 'undefined') {
    // First Contentful Paint
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime, 'ms');
          // Send to analytics
          sendToAnalytics('FCP', entry.startTime);
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      let entries = list.getEntries();
      let lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime, 'ms');
      sendToAnalytics('LCP', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      console.log('CLS:', clsValue);
      sendToAnalytics('CLS', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });

    // First Input Delay
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('FID:', (entry as any).processingStart - entry.startTime, 'ms');
        sendToAnalytics('FID', (entry as any).processingStart - entry.startTime);
      }
    }).observe({ entryTypes: ['first-input'] });
  }
}

// Send performance data to analytics (placeholder)
async function sendToAnalytics(metric: string, value: number) {
  // In a real app, send to Google Analytics, Mixpanel, etc.
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${metric}: ${value}`);
  }

  // Send to our performance API
  try {
    await fetch('/api/performance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        metric,
        value,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      }),
    });
  } catch (error) {
    console.error('Failed to send performance metrics:', error);
  }
}

// Image optimization utilities
export function getOptimizedImageUrl(src: string, width: number, quality: number = 75): string {
  // In a real app, this would use a CDN like Cloudinary, Vercel, etc.
  return `${src}?w=${width}&q=${quality}&auto=format`;
}

// Lazy loading helper
export function lazyLoadImage(img: HTMLImageElement) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target as HTMLImageElement;
        lazyImage.src = lazyImage.dataset.src || '';
        lazyImage.classList.remove('lazy');
        observer.unobserve(lazyImage);
      }
    });
  });

  imageObserver.observe(img);
}

// Bundle size analysis
export function analyzeBundleSize() {
  if (typeof window !== 'undefined') {
    // Use performance.getEntriesByType to analyze resources
    const resources = performance.getEntriesByType('resource');
    const scripts = resources.filter(r => r.name.includes('.js'));
    const styles = resources.filter(r => r.name.includes('.css'));
    const images = resources.filter(r => r.name.includes('.jpg') || r.name.includes('.png') || r.name.includes('.webp'));

    console.log('Bundle Analysis:');
    console.log('Scripts:', scripts.length, 'files');
    console.log('Styles:', styles.length, 'files');
    console.log('Images:', images.length, 'files');

    const totalScriptSize = scripts.reduce((acc, script) => acc + (script as any).transferSize, 0);
    const totalStyleSize = styles.reduce((acc, style) => acc + (style as any).transferSize, 0);
    const totalImageSize = images.reduce((acc, image) => acc + (image as any).transferSize, 0);

    console.log(`Total Script Size: ${(totalScriptSize / 1024).toFixed(2)} KB`);
    console.log(`Total Style Size: ${(totalStyleSize / 1024).toFixed(2)} KB`);
    console.log(`Total Image Size: ${(totalImageSize / 1024).toFixed(2)} KB`);
  }
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof document !== 'undefined') {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = '/fonts/inter-var.woff2';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Preload critical images
    const heroImage = document.createElement('link');
    heroImage.rel = 'preload';
    heroImage.href = '/hero-image.jpg';
    heroImage.as = 'image';
    document.head.appendChild(heroImage);
  }
}

// Service Worker registration for caching
export function registerServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
}

// Performance budget monitoring
export function checkPerformanceBudget() {
  if (typeof window !== 'undefined') {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;

    const metrics = {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      totalTime: navigation.loadEventEnd - navigation.fetchStart,
    };

    console.log('Performance Budget:');
    console.log(`DOM Content Loaded: ${metrics.domContentLoaded}ms`);
    console.log(`Load Complete: ${metrics.loadComplete}ms`);
    console.log(`Total Load Time: ${metrics.totalTime}ms`);

    // Performance budget thresholds
    const thresholds = {
      domContentLoaded: 1500, // 1.5s
      loadComplete: 2500, // 2.5s
      totalTime: 3000, // 3s
    };

    Object.entries(metrics).forEach(([metric, value]) => {
      const threshold = thresholds[metric as keyof typeof thresholds];
      if (value > threshold) {
        console.warn(`⚠️ ${metric} exceeded budget: ${value}ms > ${threshold}ms`);
      } else {
        console.log(`✅ ${metric} within budget: ${value}ms`);
      }
    });
  }
}