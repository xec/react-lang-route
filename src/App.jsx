import React from 'react'
import { Router, Link } from '@reach/router'
import { Person, PersonIndex, PersonDetails } from './Person'

export default function App () {
  return (
    <div>
      <nav className='mainNav'>
        <Link to='/'>Home</Link>
        <Link to='person'>People</Link>
      </nav>
      <Router>
        <Home path='/' />
        <Person path='person'>
          <PersonIndex path='/' />
          <PersonDetails path=':username' />
        </Person>
      </Router>
    </div>
  )
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
