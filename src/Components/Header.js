import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav>
            <Link to='/'>
              <h1>SuperCars!</h1>
            </Link>
        </nav>
    </div>
  )
}
