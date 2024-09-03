import React from 'react'
import './Navbar.css'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar