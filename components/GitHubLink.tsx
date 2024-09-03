import Link from 'next/link'
import React from 'react'
import './GitHubLink.css'

interface Props {
  link: string
}
function GitHubLink({ link }: Props) {
  return (
    <Link href={link || "/"} target='_blank' className='gh-link'>
      Link to GitHub
    </Link>
  )
}

export default GitHubLink