import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { type Locale } from '@/i18n';
import { Hero } from '@/features/landing/components/hero';
import { AboutWhySection } from '@/features/landing/components/about-why-section';
import { ServicesSection } from '@/features/landing/components/services-section';
import { GallerySection } from '@/features/landing/components/gallery-section';
import { TestimonialsSection } from '@/features/landing/components/testimonials-section';

// Lazy load ContactSection with code splitting
const ContactSection = dynamic(
  () => import('@/features/landing/components/contact-section').then((mod) => ({ default: mod.ContactSection })),
  {
    ssr: true, // Keep SSR for SEO
    loading: () => (
      <footer className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 w-full">
          <div className="h-[600px] animate-pulse" />
        </div>
      </footer>
    ),
  }
);

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
      <Suspense
        fallback={
          <footer className="py-16 bg-black text-white">
            <div className="container mx-auto px-4 w-full">
              <div className="h-[600px] animate-pulse" />
            </div>
          </footer>
        }
      >
        <ContactSection locale={locale} />
      </Suspense>
    </div>
  );
}
