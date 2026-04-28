import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo and Description */}
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <Image
                src="/logo-white.png"
                alt="Solleo Moto Rent Logo"
                width={200}
                height={67}
                className="object-contain h-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner for motorcycle rentals in Estepona, Málaga. Experience the freedom of the open road.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="tel:+15551234567" className="hover:text-yellow-400 transition-colors" aria-label="Phone">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </a>
              <a href="mailto:support@solleomotorent.com" className="hover:text-yellow-400 transition-colors" aria-label="Email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-bold text-yellow-400 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-yellow-400 transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-yellow-400 transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-bold text-yellow-400 mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <p className="text-yellow-400 font-semibold mb-1">Email</p>
                <a href="mailto:support@solleomotorent.com" className="hover:text-yellow-400 transition-colors">
                  support@solleomotorent.com
                </a>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold mb-1">Phone</p>
                <a href="tel:+15551234567" className="hover:text-yellow-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold mb-1">Address</p>
                <p>Pasaje Colina del Mirador 19,<br/>Unit 4, 29680 Estepona, Málaga</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-bold text-yellow-400 mb-6">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-blue-600">
                <span className="font-semibold text-lg">Monday - Friday</span>
                <span className="text-lg">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-blue-600">
                <span className="font-semibold text-lg">Saturday</span>
                <span className="text-lg">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold text-lg">Sunday</span>
                <span className="text-lg text-red-400">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-yellow-400 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Solleo Moto Rent. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-yellow-400 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/refund-policy" className="hover:text-yellow-400 transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
