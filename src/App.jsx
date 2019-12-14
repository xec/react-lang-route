import React from 'react'
import { Router, Link } from '@reach/router'

export default function App () {
  return (
    <div>
      <nav className='mainNav'>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
      </nav>
      <Router>
        <Home path='/' />
        <About path='about' />
      </Router>
    </div>
  )
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
