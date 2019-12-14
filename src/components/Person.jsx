import React from 'react'
import { Router, Link } from '@reach/router'
import { useTranslation } from 'react-i18next'

export default function PersonPage () {
  return (
    <Router>
      <PersonIndex path='/' />
      <Person path=':username' />
    </Router>
  )
}

const PersonIndex = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h2>{t('People')}:</h2>
      <ul>
        <li><Link to='sam'>Sam</Link></li>
        <li><Link to='bob'>Bob</Link></li>
      </ul>
    </div>
  )
}

const Person = ({ username }) => {
  const { t } = useTranslation()
  return (
    <div>
      <h2>{t('Details page for')} {username}</h2>
    </div>
  )
}
