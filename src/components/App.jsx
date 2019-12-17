import React, { useEffect } from 'react'
import { Router, Redirect, navigate } from '@reach/router'
import { useTranslation } from 'react-i18next'
import { defaultLang, replaceLang, supportedLangs } from '../lib/lang'
import PersonPage from './Person'
import TextPage from './TextPage'
import Nav from './Nav'

// todo: get default lang for the logged in user account Active Directory field

export default function App () {
  return (
    <Router>
      <Redirect from='/' to={'/' + defaultLang} noThrow />
      <Root path=':lang'>
        <Home path='/' />
        <PersonPage path='person/*' />
        <TextPage path='text/*' />
      </Root>
    </Router>
  )
}

function Root ({ lang, children, location }) {
  const { i18n } = useTranslation()
  const url = location.pathname

  useEffect(() => {
    // only support "en-gb" or "nb-no" for lang code.
    // if no match, redirect to same location we're at,
    // except ":lang" part is replaced with defaultLang
    if (!supportedLangs.includes(lang.toLowerCase())) {
      navigate(replaceLang(url, defaultLang))
      return
    }
    // set current language for translation tool
    i18n.changeLanguage(lang)
  }, [lang])

  return (
    <div>
      <Nav currentUrl={url} />
      {children}
    </div>
  )
}

const Home = () => {
  const { t } = useTranslation()
  return <h2>{t('Home')}</h2>
}
