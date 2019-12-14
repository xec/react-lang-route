import React, { useEffect } from 'react'
import { Router, Redirect, redirectTo } from '@reach/router'
import { useTranslation } from 'react-i18next'
import { defaultLang, replaceLang, supportedLangs } from '../lib/lang'
import PersonPage from './Person'
import Nav from './Nav'

export default function App () {
  return (
    <Router>
      <Redirect from='/' to={'/' + defaultLang} noThrow />
      <Root path=':lang'>
        <Home path='/' />
        <PersonPage path='person/*' />
      </Root>
    </Router>
  )
}

function Root ({ lang, children, location }) {
  const { t, i18n } = useTranslation()
  const url = location.pathname

  useEffect(() => {
    // only support "en-gb" or "nb-no" for lang code.
    // if no match, redirect to same location we're at,
    // except ":lang" part is replaced with defaultLang
    if (!supportedLangs.includes(lang.toLowerCase())) {
      redirectTo(replaceLang(url, defaultLang))
    }
    // set current language for translation tool
    i18n.changeLanguage(lang)
  }, [lang])

  return (
    <div>
      <Nav currentUrl={url} />
      <p>{t('Current language')}: {lang}</p>
      {children}
    </div>
  )
}

const Home = () => {
  const { t } = useTranslation()
  return <h2>{t('Home')}</h2>
}
