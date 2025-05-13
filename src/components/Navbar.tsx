'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Theory', path: '/theory' },
    { name: 'Examples', path: '/examples' },
    { name: 'Resources', path: '/resources' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
              Distributed Innovation
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  relative text-sm font-medium transition-all duration-200
                  ${pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                  }
                  group
                `}
              >
                {item.name}
                <span 
                  className={`
                    absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-500 
                    transition-all duration-300 group-hover:w-full 
                    ${pathname === item.path ? 'w-full' : ''}
                  `} 
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 