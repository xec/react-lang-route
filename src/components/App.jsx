import React from 'react'
import { Router, Redirect, redirectTo } from '@reach/router'
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

const Root = ({ lang, children, location }) => {
  const url = location.pathname

  // only support "en" or "no" for lang code.
  // if no match, redirect to same location we're at,
  // except ":lang" part is replaced with defaultLang
  if (!supportedLangs.includes(lang.toLowerCase())) {
    redirectTo(replaceLang(url, defaultLang))
  }

  // todo: set current language for translation tool?

  return (
    <div>
      <Nav currentUrl={url} />
      <p>current language: {lang}</p>
      {children}
    </div>
  )
}

const Home = () =>
  <div>
    <h2>Home</h2>
  </div>
