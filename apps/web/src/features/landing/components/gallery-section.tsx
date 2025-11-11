'use client';

import { type Locale } from '@/i18n';
import { getMessages } from '../lib/get-messages';
import { AnimatedHeading } from './animated-heading';
import { AnimatedText } from './animated-text';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ParallaxGallery from './parallax-gallery';

interface GallerySectionProps {
  readonly locale: Locale;
}

export function GallerySection({ locale }: GallerySectionProps) {
  const messages = getMessages(locale);
  const t = messages.gallery;

  // Using available images and repeating to fill the gallery
  const galleryImages = [
    '/image/haircut.webp',
    '/image/coloring.webp',
    '/image/kidscut.webp',
    '/image/haircut.webp',
    '/image/coloring.webp',
    '/image/kidscut.webp',
    '/image/haircut.webp',
    '/image/coloring.webp',
    '/image/kidscut.webp',
  ];

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-6 text-center">
            <AnimatedHeading 
              as="h2"
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
            >
              {t.heading}
            </AnimatedHeading>
            <div className="space-y-3">
              {t.body.map((line, index) => (
                <AnimatedText
                  key={`gallery-${index}-${line.slice(0, 10)}`}
                  delay={index * 0.1}
                  className={cn(
                    "font-bold",
                    "text-lg md:text-xl lg:text-2xl text-muted-foreground"
                  )}
                >
                  {line}
                </AnimatedText>
              ))}
            </div>
          </div>
          <ParallaxGallery images={galleryImages} />
          <div className="text-center pt-4">
            <Link href="https://instagram.com/topgun_barbershop1" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                variant="outline"
                className={cn(
                  "text-lg md:text-xl px-8 py-6",
                  "font-bold"
                )}
              >
                {t.cta.follow}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

