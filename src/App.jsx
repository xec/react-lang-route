import React from 'react'
import { Router, Link, Redirect, redirectTo } from '@reach/router'
import { Person, PersonIndex } from './Person'

// "/whatever/url/blah" => "/{lang}/url/blah"
function replaceLang (url, lang) {
  return url.replace(/^\/[^/]*/, '/' + lang)
}

const defaultLang = 'en'
const supportedLangRegEx = /^(en|no)$/i

export default function App () {
  return (
    <Router>
      {/* make sure we always have a :lang part in the url */}
      <Redirect from='/' to={defaultLang} noThrow />
      <Root path=':lang'>
        <Home path='/' />
        <PersonIndex path='person' />
        <Person path='person/:username' />
      </Root>
    </Router>
  )
}

const Root = ({ lang, children, location }) => {
  const url = location.pathname
  // only support "en" or "no" for lang code.
  // if no match, redirect to same location we're at,
  // except ":lang" part is replaced with defaultLang
  if (!supportedLangRegEx.test(lang)) {
    redirectTo(replaceLang(url, defaultLang))
  }
  return (
    <div>
      <nav className='mainNav'>
        <Link to='/'>Home</Link>
        <Link to='person'>People</Link>
        <Link to={replaceLang(url, 'en')}>English</Link>
        <Link to={replaceLang(url, 'no')}>Norwegian</Link>
      </nav>
      <p>current language: {lang}</p>
      {children}
    </div>
  )
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
