import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav className='App-header'>
          <Link to='/'>
            <h1 className='App-link'>SuperCars!</h1>
          </Link>
          <Link to = '/search'>
            <h3 className='App-link'>Search Cars</h3>
          </Link>
        </nav>
    </div>
  )
}
