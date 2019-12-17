import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUS from '../public/locales/en_us.json'
import nbNO from '../public/locales/nb_no.json'

// i18n Manager seems like a solid free cross-platform desktop app for handling translations
// https://electronjs.org/apps/i18n-manager

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enUS },
      nb: { translation: nbNO }
    },
    // lng: 'en-us', // should theoretically always be overridden by url
    // keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
