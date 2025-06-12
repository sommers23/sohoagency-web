'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Services', path: '#services' },
  { name: 'SEO', path: '#seo' },
  { name: 'Analytics', path: '#analytics' },
  { name: 'Social Media', path: '#social' },
  { name: 'Website Optimization', path: '#optimization' },
  { name: 'Contact', path: '#contact' }
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-purple-600">Soho Agency</Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`hover:text-purple-600 transition ${
                  pathname === item.path ? "text-purple-600 font-semibold" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/get-started" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
          Get Started
        </Link>
      </nav>
    </header>
  )
}
