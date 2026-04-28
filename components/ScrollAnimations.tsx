'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Wait for DOM to be fully loaded
    const initAnimations = () => {
      // First, remove any existing animate-on-scroll classes
      const existingElements = document.querySelectorAll('.animate-on-scroll');
      existingElements.forEach((el) => {
        el.classList.remove('animate-on-scroll', 'visible');
      });

      // Target all major content elements
      const selectors = [
        'section',
        'footer',
        'header',
        'main > div',
        '.bg-white',
        '.bg-gray-50',
        '.bg-blue-700',
        'form',
        '.grid > *',
        '.space-y-6 > *',
        '.space-y-8 > *'
      ];

      const elements = document.querySelectorAll(selectors.join(', '));
      
      elements.forEach((el) => {
        // Don't animate navbar
        if (!el.closest('nav')) {
          el.classList.add('animate-on-scroll');
          observer.observe(el);
        }
      });
    };

    // Run after a short delay to ensure DOM is ready
    const timer = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]); // Re-run when route changes

  return null;
}
