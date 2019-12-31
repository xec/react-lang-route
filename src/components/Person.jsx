import React from 'react'
import PropTypes from 'prop-types'
import { Router, Link } from '@reach/router'
import { useTranslation } from 'react-i18next'

function PersonPage () {
  return (
    <Router>
      <PersonIndex path='/' />
      <Person path=':username' />
    </Router>
  )
}

function PersonIndex () {
  const { t } = useTranslation()
  return (
    <div>
      <h2>{t('People')}:</h2>
      <ul>
        <li><Link to='sam'>Sam</Link></li>
        <li><Link to='bob'>Bob</Link></li>
      </ul>
      {/* should be fine */}
      <Person username='Some username' />
      {/* should throw error mecause username is missing */}
      <Person />
    </div>
  )
}

function Person ({ username }) {
  const { t } = useTranslation()
  return (
    <div>
      <h2>{t('Details page for')} {username}</h2>
    </div>
  )
}
Person.propTypes = {
  username: PropTypes.string.isRequired
}

export { PersonPage as default, PersonIndex, Person }
