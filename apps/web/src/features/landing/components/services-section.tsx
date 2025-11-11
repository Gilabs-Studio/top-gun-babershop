'use client';

import { type Locale } from '@/i18n';
import { getMessages } from '../lib/get-messages';
import { AnimatedHeading } from './animated-heading';
import { AnimatedText } from './animated-text';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ServicesSectionProps {
  readonly locale: Locale;
}

export function ServicesSection({ locale }: ServicesSectionProps) {
  const messages = getMessages(locale);
  const t = messages.services;

  return (
    <section className="min-h-[90vh] flex items-center py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl space-y-16">
          <AnimatedHeading 
            as="h2"
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
          >
            {t.heading}
          </AnimatedHeading>
          <ul className="space-y-6">
            {t.items.map((item, index) => (
              <AnimatedText
                key={`service-${index}-${item.slice(0, 15)}`}
                delay={index * 0.1}
                className={cn(
                  "font-bold",
                  "text-xl md:text-2xl lg:text-3xl"
                )}
              >
                <li>{item}</li>
              </AnimatedText>
            ))}
          </ul>
          <AnimatedText delay={0.5}>
            <Link href={`/${locale}/contact`}>
              <Button 
                size="lg" 
                className={cn(
                  "text-xl md:text-2xl px-12 py-8",
                  "font-bold"
                )}
              >
                {t.cta.book}
              </Button>
            </Link>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}

