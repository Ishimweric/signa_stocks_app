"use client" //cz we used hooks

import { NAV_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navitems = () => {
  // Checks if the current route matches the nav item's href
  const pathname = usePathname()
  function isActive(href: string) {
    return pathname === href
  }

  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
      {NAV_ITEMS.map(item => (
        <li key={item.href}>
          <Link href={item.href} className={`hover:text-yellow-500 transition-colors ${
            isActive(item.href)?"text-gray-100":""
          }`}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navitems