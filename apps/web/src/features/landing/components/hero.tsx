import Image from 'next/image';
import Link from 'next/link';
import { type Locale } from '@/i18n';
import { Button } from '@/components/ui/button';
import { getMessages } from '../lib/get-messages';

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const messages = getMessages(locale);
  const t = messages.hero;

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.webp"
          alt="Top Gun Babershop"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          {t.title}
        </h1>
        <p className="text-xl md:text-2xl mb-2 font-light text-gray-200">
          {t.subtitle}
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/contact`}>
            <Button size="lg" className="text-lg px-8 py-6">
              {t.cta.book}
            </Button>
          </Link>
          <Link href={`/${locale}/services`}>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 border-white/20 text-white hover:bg-white/20">
              {t.cta.services}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

