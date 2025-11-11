'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { type Locale } from '@/i18n';
import { Button } from '@/components/ui/button';
import { getMessages } from '../lib/get-messages';
import { cn } from '@/lib/utils';
import gsap from 'gsap';

interface HeroProps {
  readonly locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const messages = getMessages(locale);
  const t = messages.hero;
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate headline word by word with line break
    if (headlineRef.current) {
      // Split by period to get "Look Sharp." and "Feel Top."
      const parts = t.headline.split('. ').filter(Boolean);
      const firstPart = parts[0] ? parts[0] + '.' : '';
      const secondPart = parts[1] || '';
      
      // Create HTML with line break
      const firstWords = firstPart.split(' ');
      const secondWords = secondPart.split(' ');
      
      const firstSpans = firstWords
        .map((word, i) => `<span class="inline-block">${word}${i < firstWords.length - 1 ? '&nbsp;' : ''}</span>`)
        .join('');
      
      const secondSpans = secondWords
        .map((word, i) => `<span class="inline-block">${word}${i < secondWords.length - 1 ? '&nbsp;' : ''}</span>`)
        .join('');
      
      headlineRef.current.innerHTML = `${firstSpans}<br />${secondSpans}`;

      const wordSpans = headlineRef.current.querySelectorAll('span');
      timeline.fromTo(
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
          duration: 1,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }

    // Animate subtext
    if (subtextRef.current) {
      timeline.fromTo(
        subtextRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      );
    }

    // Animate description
    if (descriptionRef.current) {
      timeline.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.3'
      );
    }

    // Animate button
    if (buttonRef.current) {
      timeline.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
        },
        '-=0.2'
      );
    }
  }, []);

  return (
    <section id="hero-section" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.webp"
          alt="Top Gun Barber Shop"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-left text-white">
        <div className="space-y-8 max-w-5xl">
          <h1 
            ref={headlineRef}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none will-change-transform"
            dangerouslySetInnerHTML={{
              __html: t.headline.replace('. ', '.<br />')
            }}
          />
          <p 
            ref={subtextRef}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-200 will-change-transform"
          >
            {t.subtext}
          </p>
          <p 
            ref={descriptionRef}
            className="text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl text-gray-300 font-medium will-change-transform"
          >
            {t.description}
          </p>
          <div ref={buttonRef} className="flex justify-start will-change-transform">
            <Link href={`/${locale}/contact`}>
              <Button 
                size="lg" 
                className={cn(
                  "text-xl md:text-2xl px-12 py-8 text-black hover:text-white hover:border",
                  "bg-white hover:bg-black/0",
                  "shadow-lg hover:shadow-xl",
                  "transition-all duration-300",
                  "font-bold"
                )}
              >
                {t.cta.book}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

