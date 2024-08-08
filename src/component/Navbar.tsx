import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex'>
      <ul>
        <li>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}
