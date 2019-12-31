import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import { useTranslation } from 'react-i18next'
import { replaceLang } from '../lib/lang'
import './Nav.css'

export default function Nav ({ currentUrl }) {
  const { t } = useTranslation()
  return (
    <nav id='mainNav'>
      <Link to='./'>{t('Home')}</Link>
      <Link to='person'>{t('People')}</Link>
      <Link to='text'>{t('Text')}</Link>
      <Link to={replaceLang(currentUrl, 'en-gb')}>{t('English')}</Link>
      <Link to={replaceLang(currentUrl, 'nb-no')}>{t('Norwegian')}</Link>
    </nav>
  )
}

Nav.propTypes = {
  currentUrl: PropTypes.string.isRequired
}
