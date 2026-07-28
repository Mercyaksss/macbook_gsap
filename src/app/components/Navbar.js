import React from 'react'
import Image from 'next/image'
import { navLinks } from '../constants'
import logo from '../../../public/logo.svg'

function Navbar() {
  return (
    <header>
        <nav>
            <Image
                src={logo}
                alt='logo'
            />

            <ul>
                {navLinks.map(({label}) => (
                    <li key={label}>
                        <a href={label}>{label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
