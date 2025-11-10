import { type Locale } from '@/i18n';
import enMessages from '../messages/en.json';
import idMessages from '../messages/id.json';

const messages = {
  en: enMessages,
  id: idMessages,
} as const;

export function getMessages(locale: Locale) {
  return messages[locale];
}

export type Messages = typeof enMessages;

