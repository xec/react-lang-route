import React from 'react'
import { Link } from '@reach/router'

const PersonIndex = () => (
  <div>
    <h2>People:</h2>
    <ul>
      <li><Link to='sam'>Sam</Link></li>
      <li><Link to='bob'>Bob</Link></li>
    </ul>
  </div>
)

const Person = ({ username }) => (
  <div>
    <h2>Details page for {username}</h2>
  </div>
)

export {
  Person,
  PersonIndex
}
