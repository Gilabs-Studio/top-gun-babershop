import { type Locale } from '@/i18n';
import { ServicesPageContent } from '@/features/landing/components/services-page-content';

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <ServicesPageContent locale={locale} />;
}

