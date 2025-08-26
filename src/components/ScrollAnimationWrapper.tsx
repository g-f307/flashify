import React, { useEffect, useRef } from 'react';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'bounce-in';
}

export const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-in-up'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Add delay if specified
            setTimeout(() => {
              element.classList.add('animate');
              element.style.animationName = animation;
              element.style.animationDuration = '0.6s';
              element.style.animationFillMode = 'forwards';
              element.style.animationTimingFunction = 'ease-out';
            }, delay);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, animation]);

  return (
    <div 
      ref={elementRef}
      className={`animate-on-scroll ${className}`}
    >
      {children}
    </div>
  );
};