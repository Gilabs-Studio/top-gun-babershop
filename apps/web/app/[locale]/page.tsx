import { type Locale } from '@/i18n';
import { Hero } from '@/features/landing/components/hero';
import { AboutWhySection } from '@/features/landing/components/about-why-section';
import { ServicesSection } from '@/features/landing/components/services-section';
import { BookingSection } from '@/features/landing/components/booking-section';
import { GallerySection } from '@/features/landing/components/gallery-section';
import { TestimonialsSection } from '@/features/landing/components/testimonials-section';
import { ContactSection } from '@/features/landing/components/contact-section';

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
      <BookingSection locale={locale} />
      <GallerySection locale={locale} />
      <TestimonialsSection locale={locale} />
      <ContactSection locale={locale} />
    </div>
  );
}
