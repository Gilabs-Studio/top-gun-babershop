import { type Locale } from '@/i18n';
import { Hero } from '@/features/landing/components/hero';
import { AboutWhySection } from '@/features/landing/components/about-why-section';
import { ServicesSection } from '@/features/landing/components/services-section';
import { GallerySection } from '@/features/landing/components/gallery-section';
import { TestimonialsSection } from '@/features/landing/components/testimonials-section';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

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
