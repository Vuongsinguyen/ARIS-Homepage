'use client';

import { useEffect } from 'react';
import { trackWebVitals, preloadCriticalResources, checkPerformanceBudget } from '@/lib/performance';

export function PerformanceTracker() {
  useEffect(() => {
    // Track Web Vitals
    trackWebVitals();

    // Preload critical resources
    preloadCriticalResources();

    // Check performance budget after page load
    const checkBudget = () => {
      setTimeout(() => {
        checkPerformanceBudget();
      }, 1000);
    };

    if (document.readyState === 'complete') {
      checkBudget();
    } else {
      window.addEventListener('load', checkBudget);
    }

    return () => {
      window.removeEventListener('load', checkBudget);
    };
  }, []);

  return null; // This component doesn't render anything
}