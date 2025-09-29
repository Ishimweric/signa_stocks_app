import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navitems from './Navitems'

const Header = () => {
  return (
    <header className="sticky top-0 header">
      <div className='container header-wrapper'>
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt='Signa Logo' width={140} height={32} className='h-8 w-auto cursor-pointer'/>
        </Link>
        <nav className='hidden sm:block'>
          <Navitems/>
        </nav>
      </div>
    </header >
  )
}

export default Header