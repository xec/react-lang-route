import React from 'react'
import { Link } from '@reach/router'
import replaceLang from '../functions/replaceLang'
import './Nav.css'

export default function Nav ({ url }) {
  return (
    <nav id='mainNav'>
      <Link to='/'>Home</Link>
      <Link to='person'>People</Link>
      <Link to={replaceLang(url, 'en-gb')}>English</Link>
      <Link to={replaceLang(url, 'nb-no')}>Norwegian</Link>
    </nav>
  )
}
