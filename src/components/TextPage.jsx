import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import featureEnUS from '../../public/locales/text/en_us.json'
import featureNbNO from '../../public/locales/text/nb_no.json'

const featureName = 'text'
const keys = [
  'Home',
  'People',
  'Language',
  'Text',
  'Details page for'
]
const featureKeys = [
  'key',
  'keyDeep.inner',
  'keyNesting',
  'keyInterpolate',
  'keyInterpolateUnescaped',
  'keyContext_male',
  'keyContext_female',
  'keyPluralSimple',
  'keyPluralSimple_plural',
  'keyPluralMultipleEgArabic_0',
  'keyPluralMultipleEgArabic_1',
  'keyPluralMultipleEgArabic_2',
  'keyPluralMultipleEgArabic_3',
  'keyPluralMultipleEgArabic_4',
  'keyPluralMultipleEgArabic_5'
].map(key => featureName + ':' + key)
const allKeys = keys.concat(featureKeys)

export default function TextPage () {
  const { t, i18n } = useTranslation()
  useEffect(() => {
    // initialize feature-specific translations
    i18n.addResourceBundle('en', featureName, featureEnUS)
    i18n.addResourceBundle('nb', featureName, featureNbNO)
  }, [])
  return (
    <div>
      <p>{t('Home')}</p>
      <p>{t('text:key')}</p>
      <table>
        <tbody>
          {allKeys.map(key => (
            <tr key={key}>
              <td>{key}</td>
              <td>{t(key)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
