import { type Locale } from '@/i18n';
import { getMessages } from '../lib/get-messages';

interface FooterProps {
  readonly locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const messages = getMessages(locale);
  const t = messages.footer;

  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-lg md:text-xl font-bold">
            {t.copyright}
          </p>
          <p className="text-base md:text-lg font-bold text-muted-foreground">
            {t.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

