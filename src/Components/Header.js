import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav>
            <Link to='/'>SuperCars!</Link>
            <Link to='/search'>Search</Link>
        </nav>
    </div>
  )
}
