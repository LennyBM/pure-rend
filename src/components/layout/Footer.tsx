import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 pt-20 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image 
                src="/images/pure-rend-logo-transparent.webp"
                alt="PureRend Logo"
                width={120}
                height={120}
                className="object-contain w-[70px] h-[70px] sm:w-[92px] sm:h-[92px] scale-[1.2] origin-left rounded-sm"
                quality={100}
              />
            </Link>
            <p className="text-sm text-zinc-300 mt-2 leading-relaxed max-w-sm">
              Bude&apos;s Specialist for Elite Architectural Rendering. Protecting North Cornwall&apos;s Most Prestigious Developments.
            </p>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="text-white font-headline font-semibold mb-4 tracking-wide text-sm uppercase">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm text-zinc-300 hover:text-blue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-sm text-zinc-300 hover:text-blue-600 transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-zinc-300 hover:text-blue-600 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-300 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="text-white font-headline font-semibold mb-4 tracking-wide text-sm uppercase">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-zinc-300 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-zinc-300 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="text-sm text-zinc-300 hover:text-blue-600 transition-colors">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/your-rights" className="text-sm text-zinc-300 hover:text-blue-600 transition-colors">
                  Your Rights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / CTA Col */}
          <div>
            <h4 className="text-white font-headline font-semibold mb-4 tracking-wide text-sm uppercase">Support</h4>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-zinc-300">
                Phone: 07469 931 758
              </li>
              <li className="text-sm text-zinc-300">
                Email: b.rplasteringsw@gmail.com
              </li>
            </ul>
            <a
              href="https://facebook.com/purerend"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 border border-zinc-700 hover:border-blue-600 text-sm font-medium rounded-sm text-zinc-300 hover:text-white hover:bg-blue-600 transition-all"
            >
              Chat with Ben
            </a>
          </div>

        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-xs text-zinc-500">
              &copy; {currentYear} PureRend. All rights reserved.
            </p>
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-semibold mt-1">
              Created by <a href="https://www.peakemanagement.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors pointer-events-auto">Peake Management</a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-zinc-500 hidden sm:block">Engineered for the coast.</span>
            
            <a 
              href="https://facebook.com/purerend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              aria-label="PureRend on Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a 
              href="https://instagram.com/purerend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-pink-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              aria-label="PureRend on Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
