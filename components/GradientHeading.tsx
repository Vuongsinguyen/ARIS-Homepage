'use client';

import { useRef, useEffect, useState } from 'react';

interface GradientHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientHeading({ children, className = '' }: GradientHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [gradientOpacity, setGradientOpacity] = useState(1);
  const animationRef = useRef<number | undefined>(undefined);
  const targetPos = useRef({ x: -10, y: 50 });
  const currentPos = useRef({ x: -10, y: 50 });
  const lastProgress = useRef(0);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    let startTime = Date.now();

    const animate = () => {
      if (!isHovering) {
        const elapsed = Date.now() - startTime;
        let progress = lastProgress.current + (elapsed / 8000); // Continue from last position
        
        // Reset when complete
        if (progress >= 1) {
          progress = 0;
          lastProgress.current = 0;
          startTime = Date.now();
          currentPos.current.x = -10;
          targetPos.current.x = -10;
        }
        
        // Gradient moves from -10% to 110%
        targetPos.current.x = -10 + (progress * 120);
        targetPos.current.y = 50;
        
        // Fade out when gradient reaches 90%-100%
        if (progress >= 0.9) {
          const fadeProgress = (progress - 0.9) / 0.1; // 0 to 1 in last 10%
          setGradientOpacity(1 - fadeProgress);
        } else {
          setGradientOpacity(1);
        }
      } else {
        setGradientOpacity(1);
      }
      
      // Smooth interpolation for both auto and hover mode
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.1;
      
      heading.style.setProperty('--mouse-x', `${currentPos.current.x}%`);
      heading.style.setProperty('--mouse-y', `${currentPos.current.y}%`);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heading.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      targetPos.current.x = x;
      targetPos.current.y = y;
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      // Save current progress when hovering
      const elapsed = Date.now() - startTime;
      lastProgress.current = lastProgress.current + (elapsed / 8000);
      if (lastProgress.current >= 1) lastProgress.current = 0;
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      // Calculate progress from current mouse position
      const currentX = currentPos.current.x;
      // Convert position (-10 to 110) back to progress (0 to 1)
      lastProgress.current = (currentX + 10) / 120;
      if (lastProgress.current < 0) lastProgress.current = 0;
      if (lastProgress.current >= 1) lastProgress.current = 0;
      startTime = Date.now(); // Reset timing for continuation
    };

    heading.addEventListener('mousemove', handleMouseMove);
    heading.addEventListener('mouseenter', handleMouseEnter);
    heading.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      heading.removeEventListener('mousemove', handleMouseMove);
      heading.removeEventListener('mouseenter', handleMouseEnter);
      heading.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  return (
    <h2 
      ref={headingRef}
      className={`gradient-heading ${className}`}
      style={{
        '--mouse-x': '0%',
        '--mouse-y': '50%',
        '--gradient-opacity': gradientOpacity,
      } as React.CSSProperties}
    >
      {children}
    </h2>
  );
}
