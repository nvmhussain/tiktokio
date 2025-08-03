/** @type {import('astro-i18next/types').UserConfig} */
export default {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'es'],
  routes: 'src/translations/routes.json', // Make sure this file exists
  showDefaultLocale: false,
};
