'use client';

import { type Locale } from '@/i18n';
import { getMessages } from '../lib/get-messages';
import { AnimatedHeading } from './animated-heading';
import { AnimatedText } from './animated-text';
import { cn } from '@/lib/utils';

interface TestimonialsSectionProps {
  readonly locale: Locale;
}

export function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const messages = getMessages(locale);
  const t = messages.testimonials;

  return (
    <section className="min-h-[90vh] flex items-center py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl space-y-16">
          <AnimatedHeading 
            as="h2"
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
          >
            {t.heading}
          </AnimatedHeading>
          <div className="space-y-8">
            {t.items.map((testimonial, index) => (
              <AnimatedText
                key={`testimonial-${index}-${testimonial.slice(0, 15)}`}
                delay={index * 0.2}
                className={cn(
                  "font-bold",
                  "text-2xl md:text-3xl lg:text-4xl"
                )}
              >
                {testimonial}
              </AnimatedText>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

