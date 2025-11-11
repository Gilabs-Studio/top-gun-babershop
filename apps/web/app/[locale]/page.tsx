import { type Locale } from '@/i18n';
import { Hero } from '@/features/landing/components/hero';
import { AboutWhySection } from '@/features/landing/components/about-why-section';
import { ServicesSection } from '@/features/landing/components/services-section';
import { GallerySection } from '@/features/landing/components/gallery-section';
import { TestimonialsSection } from '@/features/landing/components/testimonials-section';
import { locales } from '@/i18n';
import { notFound } from 'next/navigation';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }
  const locale = localeParam as Locale;

  return (
    <div>
      <Hero locale={locale} />
      <AboutWhySection locale={locale} />
      <ServicesSection locale={locale} />
      <GallerySection locale={locale} />
      <TestimonialsSection locale={locale} />
    </div>
  );
}
