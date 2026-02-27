/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './src/i18n';

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = (locale && locales.includes(locale as any))
    ? (locale as (typeof locales)[number])
    : defaultLocale;

  return {
    locale: currentLocale,
    messages: (await import(`./src/messages/${currentLocale}.json`)).default
  };
});
