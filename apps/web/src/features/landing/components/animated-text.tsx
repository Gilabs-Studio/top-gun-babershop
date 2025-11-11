'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof globalThis.window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  split?: boolean;
}

export function AnimatedText({
  children,
  className = '',
  delay = 0,
  duration = 1,
  stagger = 0.1,
  split = false,
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;

    // Cleanup previous animations (this will also cleanup associated ScrollTriggers)
    if (animationRef.current) {
      animationRef.current.kill();
      animationRef.current = null;
    }

    // Kill any remaining ScrollTriggers associated with this element
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars?.trigger === element || trigger.trigger === element) {
        trigger.kill();
      }
    });

    if (split && typeof children === 'string') {
      // Split text into words for word-by-word animation
      const words = children.split(' ').filter(Boolean);
      if (words.length === 0) return;

      element.innerHTML = words
        .map((word) => `<span class="inline-block">${word}</span>`)
        .join(' ');

      const wordSpans = element.querySelectorAll('span');

      const animation = gsap.fromTo(
        wordSpans,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      animationRef.current = animation;
    } else {
      // Simple fade and slide animation
      // Reset element content if it was previously split
      if (element.querySelector('span')) {
        const text = typeof children === 'string' ? children : element.textContent || '';
        element.textContent = text;
      }

      const animation = gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      animationRef.current = animation;
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      // Kill any remaining ScrollTriggers for this element
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === element || trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [children, delay, duration, stagger, split]);

  return (
    <div ref={textRef} className={className}>
      {!split && children}
    </div>
  );
}

