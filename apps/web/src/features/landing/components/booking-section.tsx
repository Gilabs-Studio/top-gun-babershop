'use client';

import { type Locale } from '@/i18n';
import { getMessages } from '../lib/get-messages';
import { AnimatedHeading } from './animated-heading';
import { AnimatedText } from './animated-text';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BookingSectionProps {
  readonly locale: Locale;
}

export function BookingSection({ locale }: BookingSectionProps) {
  const messages = getMessages(locale);
  const t = messages.booking;

  return (
    <section className="min-h-[90vh] flex items-center py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <AnimatedHeading 
            as="h2"
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
          >
            {t.heading}
          </AnimatedHeading>
          <div className="space-y-6">
            {t.body.map((line, index) => (
              <AnimatedText
                key={`booking-${index}-${line.slice(0, 10)}`}
                delay={index * 0.15}
                className={cn(
                  "font-bold",
                  "text-xl md:text-2xl lg:text-3xl"
                )}
              >
                {line}
              </AnimatedText>
            ))}
          </div>
          <div className="space-y-6 pt-8">
            <AnimatedText delay={0.4}>
              <Link href="https://wa.me/6281919194111" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className={cn(
                    "text-xl md:text-2xl px-12 py-8",
                    "font-bold"
                  )}
                >
                  {t.cta.whatsapp}
                </Button>
              </Link>
            </AnimatedText>
            <AnimatedText
              delay={0.5}
              className="text-lg md:text-xl lg:text-2xl font-bold text-muted-foreground"
            >
              {t.phone}
            </AnimatedText>
          </div>
        </div>
      </div>
    </section>
  );
}

