import Link from 'next/link'
import React from 'react'
import GitHubIcon from "@/assets/svg/github.svg"
import './GitHubLink.css'

interface Props {
  link: string
}
function GitHubLink({ link }: Props) {
  return (
    <Link href={link || "/"} target='_blank' className='gh-link'>
      <GitHubIcon className="gh-icon" />
      <span className='gh-label'>Link to Code</span>
    </Link>
  )
}

export default GitHubLink