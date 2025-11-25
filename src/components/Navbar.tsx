'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-primary">
              Metro Point <span className="text-accent">Technology</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-neutral hover:text-primary transition">
              Home
            </Link>
            <Link href="/products/ams" className="text-neutral hover:text-primary transition">
              AMS Platform
            </Link>
            <Link href="/products/commission-tracker" className="text-neutral hover:text-primary transition">
              Commission Tracker
            </Link>
            <Link href="/about" className="text-neutral hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-neutral hover:text-primary transition">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-neutral hover:bg-neutral-lighter transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-neutral hover:bg-neutral-lighter rounded transition">
              Home
            </Link>
            <Link href="/products/ams" className="block px-4 py-2 text-neutral hover:bg-neutral-lighter rounded transition">
              AMS Platform
            </Link>
            <Link href="/products/commission-tracker" className="block px-4 py-2 text-neutral hover:bg-neutral-lighter rounded transition">
              Commission Tracker
            </Link>
            <Link href="/about" className="block px-4 py-2 text-neutral hover:bg-neutral-lighter rounded transition">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-neutral hover:bg-neutral-lighter rounded transition">
              Contact
            </Link>
            <Link
              href="/contact"
              className="block mx-4 mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition text-center"
            >
              Request Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
