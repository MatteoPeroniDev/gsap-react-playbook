import Link from 'next/link'
import React from 'react'
import HomeIcon from "@/assets/svg/home.svg"
import './GoToHome.css'

function GoToHome() {
  return (
    <Link href="/" className='gth-link'>
      <HomeIcon className="gth-icon" />
      <span className='gth-label'>Return to Home</span>
    </Link>
  )
}

export default GoToHome