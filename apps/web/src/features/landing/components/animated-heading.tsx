'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

if (typeof globalThis.window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  delay?: number;
  duration?: number;
}

export function AnimatedHeading({
  children,
  className = '',
  as: Component = 'h2',
  delay = 0,
  duration = 1.2,
}: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const element = headingRef.current;
    const text = element.textContent || '';
    const words = text.split(' ');

    // Split into spans
    element.innerHTML = words
      .map((word, i) => `<span class="inline-block">${word}${i < words.length - 1 ? '&nbsp;' : ''}</span>`)
      .join('');

    const wordSpans = element.querySelectorAll('span');

    gsap.fromTo(
      wordSpans,
      {
        opacity: 0,
        y: 100,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration,
        delay,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      for (const trigger of ScrollTrigger.getAll()) {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      }
    };
  }, [children, delay, duration]);

  return (
    <Component ref={headingRef} className={cn('will-change-transform', className)}>
      {children}
    </Component>
  );
}

