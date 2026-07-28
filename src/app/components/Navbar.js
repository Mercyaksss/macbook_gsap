import React from 'react'
import Image from 'next/image'
import { navLinks } from '../constants'
import logo from '../../../public/logo.svg'
import search from '../../../public/search.svg'
import cart from '../../../public/cart.svg'

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

            <div className='flex-center gap-3'>
                <button>
                    <Image
                        src={search}
                        alt='Search icon'
                    />
                </button>

                <button>
                    <Image
                        src={cart}
                        alt='Cart icon'
                    />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
