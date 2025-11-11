'use client';

import { type Locale } from '@/i18n';
import { getMessages } from '../lib/get-messages';
import { AnimatedHeading } from './animated-heading';
import { AnimatedText } from './animated-text';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ContactSectionProps {
  readonly locale: Locale;
}

export function ContactSection({ locale }: ContactSectionProps) {
  const messages = getMessages(locale);
  const t = messages.contact;

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
          <div className="space-y-8">
            <AnimatedText delay={0.1} className="flex items-center gap-4">
              <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
              <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                {t.address}
              </p>
            </AnimatedText>
            <AnimatedText delay={0.2} className="flex items-center gap-4">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
              <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                {t.hours}
              </p>
            </AnimatedText>
            <AnimatedText delay={0.3} className="flex items-center gap-4">
              <Phone className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
              <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                {t.phone}
              </p>
            </AnimatedText>
          </div>
          <AnimatedText delay={0.4}>
            <Link href="https://maps.google.com/?q=Ruko+Madison+Grande+K03+Semarang" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className={cn(
                  "text-xl md:text-2xl px-12 py-8",
                  "font-bold"
                )}
              >
                {t.cta.directions}
              </Button>
            </Link>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
}

