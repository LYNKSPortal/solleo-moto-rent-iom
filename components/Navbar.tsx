'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-yellow-400 text-blue-700 py-3 px-4 text-center">
        <p>
          Check out our <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">Facebook page</a> and our <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">Instagram page</a> for our upcoming offers!
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Solleo Moto Rent Logo"
                width={300}
                height={100}
                className="object-contain h-auto w-[200px] lg:w-[300px]"
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="text-blue-700 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/fleet"
                className="text-blue-700 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Our Fleet
              </Link>
              <Link
                href="/about"
                className="text-blue-700 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/faq"
                className="text-blue-700 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-blue-700 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/booking"
                className="bg-yellow-400 text-blue-700 hover:bg-yellow-500 px-4 py-2 rounded-md text-sm font-bold transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <polyline points="9 16 11 18 15 14"/>
                </svg>
                Book Now
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-blue-700 text-white hover:bg-blue-800 focus:outline-none flex items-center gap-2 px-4 py-2 rounded-md transition-colors"
            >
              <span className="font-semibold">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-blue-700 z-50 lg:hidden">
          <div className="flex flex-col h-full items-center justify-center px-8">
            {/* Logo and menu items centered together */}
            <div className="flex flex-col items-center">
              {/* Logo */}
              <div className="mb-16">
                <Image
                  src="/logo-white.png"
                  alt="Solleo Moto Rent Logo"
                  width={250}
                  height={83}
                  className="object-contain h-auto"
                />
              </div>

              {/* Menu items */}
              <div className="flex flex-col items-center space-y-10">
                <Link
                  href="/"
                  className="text-white hover:text-yellow-400 text-4xl font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/fleet"
                  className="text-white hover:text-yellow-400 text-4xl font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Fleet
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-yellow-400 text-4xl font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/faq"
                  className="text-white hover:text-yellow-400 text-4xl font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-yellow-400 text-4xl font-semibold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/booking"
                  className="bg-yellow-400 text-blue-700 hover:bg-yellow-500 px-12 py-5 rounded-lg text-3xl font-bold transition-colors mt-8 flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                    <polyline points="9 16 11 18 15 14"/>
                  </svg>
                  Book Now
                </Link>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:text-yellow-400"
              aria-label="Close menu"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
