'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Toggle } from './theme/toggle'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-50 h-14 flex items-center justify-between
        max-w-sm mx-auto
        border-b transition-colors duration-300
        ${scrolled ? 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0c0c0c]' : 'border-transparent'}
      `}
    >
      <Link
        href="/"
        className="text-xs font-medium tracking-tighter text-neutral-400 dark:text-neutral-600"
      >
        knlrvr
      </Link>

      <ul className="flex items-center gap-4 list-none text-xs">
        {[
          { label: 'work',    href: '#work'    },
          { label: 'writing', href: '#writing' },
          { label: 'contact', href: '#contact' },
        ].map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="tracking-tight text-neutral-400 dark:text-neutral-600 transition-colors duration-150"
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
            <Toggle />
        </li>
      </ul>
    </nav>
  )
}