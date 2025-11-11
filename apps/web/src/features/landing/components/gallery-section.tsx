'use client';

import { type Locale } from '@/i18n';
import { getMessages } from '../lib/get-messages';
import { AnimatedHeading } from './animated-heading';
import { AnimatedText } from './animated-text';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface GallerySectionProps {
  readonly locale: Locale;
}

export function GallerySection({ locale }: GallerySectionProps) {
  const messages = getMessages(locale);
  const t = messages.gallery;

  const galleryImages = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section className="min-h-[90vh] flex items-center py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl space-y-16">
          <div className="space-y-6">
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
          <div className="max-w-5xl">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((i) => (
                  <CarouselItem key={i} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="relative aspect-square overflow-hidden rounded-lg group">
                      <Image
                        src="/image.webp"
                        alt={`Gallery ${i}`}
                        fill
                        className={cn(
                          "object-cover transition-transform duration-500",
                          "group-hover:scale-110"
                        )}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
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

