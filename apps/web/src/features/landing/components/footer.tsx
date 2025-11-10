import Link from 'next/link';
import { type Locale } from '@/i18n';
import { getMessages } from '../lib/get-messages';
import { Separator } from '@/components/ui/separator';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const messages = getMessages(locale);
  const t = messages.footer;

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">Top Gun Babershop</h3>
            <p className="text-sm text-muted-foreground">
              Premium grooming experience for the modern gentleman.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {messages.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {messages.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {messages.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {messages.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  {t.links.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  {t.links.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="text-center text-sm text-muted-foreground">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
}

