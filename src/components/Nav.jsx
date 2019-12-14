import React from 'react'
import { Link } from '@reach/router'
import { replaceLang } from '../lib/lang'
import { useTranslation } from 'react-i18next'
import './Nav.css'

export default function Nav ({ currentUrl }) {
  const { t } = useTranslation()
  return (
    <nav id='mainNav'>
      <Link to='./'>{t('Home')}</Link>
      <Link to='person'>People</Link>
      <Link to={replaceLang(currentUrl, 'en-gb')}>English</Link>
      <Link to={replaceLang(currentUrl, 'nb-no')}>Norwegian</Link>
    </nav>
  )
}
