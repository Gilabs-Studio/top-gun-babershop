'use client';

import { type Locale } from '@/i18n';
import { getMessages } from '../lib/get-messages';
import { AnimatedHeading } from './animated-heading';
import { AnimatedText } from './animated-text';
import { MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

interface ContactSectionProps {
  readonly locale: Locale;
}

export function ContactSection({ locale }: ContactSectionProps) {
  const messages = getMessages(locale);
  const t = messages.contact;

  return (
    <footer className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 w-full">
        <div className="space-y-12">
          {/* Grid: Contact Info (Left) & Maps (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-8 min-w-0 wrap-break-word">
              <div className="overflow-hidden">
                <AnimatedHeading 
                  as="h2"
                  className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
                >
                  {t.heading}
                </AnimatedHeading>
              </div>
              <div className="space-y-6">
                <div className="overflow-hidden">
                  <AnimatedText delay={0.1}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-white/10 shrink-0">
                        <MapPin className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <p className="text-xl md:text-2xl lg:text-3xl font-bold wrap-break-word">
                        {t.address}
                      </p>
                    </div>
                  </AnimatedText>
                </div>
                <div className="overflow-hidden">
                  <AnimatedText delay={0.2}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-white/10 shrink-0">
                        <Clock className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <p className="text-xl md:text-2xl lg:text-3xl font-bold wrap-break-word">
                        {t.hours}
                      </p>
                    </div>
                  </AnimatedText>
                </div>
                <div className="overflow-hidden">
                  <AnimatedText delay={0.3}>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-white/10 shrink-0">
                        <Phone className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <Link 
                        href={`tel:${t.phone.replaceAll(/\s/g, '')}`}
                        className="text-xl md:text-2xl lg:text-3xl font-bold wrap-break-word hover:text-gray-300 transition-colors"
                      >
                        {t.phone}
                      </Link>
                    </div>
                  </AnimatedText>
                </div>
              </div>
              <div className="overflow-hidden">
                <AnimatedText delay={0.4}>
                  <Link 
                    href="https://www.google.com/maps/place/Top+Gun+Barber+Shop/@-6.2715519,106.6232306,18.35z/data=!4m8!3m7!1s0x2e69fd000e223fed:0x626c5fe10067ee1d!8m2!3d-6.2696202!4d106.62423!9m1!1b1!16s%2Fg%2F11v_79yj9p?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl lg:text-2xl font-bold text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {t.cta.directions} →
                  </Link>
                </AnimatedText>
              </div>
            </div>

            {/* Right Column - Google Maps */}
            <div className="w-full">
              <div className="overflow-hidden">
                <AnimatedText delay={0.5}>
                  <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden border border-white/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1234567890!2d106.62423!3d-6.2696202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd000e223fed%3A0x626c5fe10067ee1d!2sTop%20Gun%20Barber%20Shop!5e0!3m2!1sen!2sid!4v1707123456789!5m2!1sen!2sid&q=Top+Gun+Barber+Shop+Ruko+Madison+Grande+K03+Semarang"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Top Gun Barber Shop Location"
                      className="w-full h-full"
                    />
                  </div>
                </AnimatedText>
              </div>
            </div>
          </div>

          {/* Footer Bottom - Copyright & Tagline */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <AnimatedText delay={0.6} className="space-y-2">
              <p className="text-lg md:text-xl lg:text-2xl font-bold">
                {t.copyright}
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-400">
                {t.tagline}
              </p>
            </AnimatedText>
          </div>
        </div>
      </div>
    </footer>
  );
}

