'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavLink {
  label: string;
  href: string;
}

const publicLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/About' },
  { label: 'Projects', href: '/Projects' },
  { label: 'News', href: '/News' },
  { label: 'Contact', href: '/Contact' },
];

const adminLinks: NavLink[] = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Listings', href: '/admin/listings' },
  { label: 'News', href: '/admin/news' },
  { label: 'Requests', href: '/admin/requests' },
  { label: 'Profile', href: '/admin/profile' },
  { label: 'Logout', href: '/admin/logout' },
];

export default function Header() {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsAdmin(pathname.startsWith('/admin'));
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = isAdmin ? adminLinks : publicLinks;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Site name */}
          <Link
            href={isAdmin ? '/admin/dashboard' : '/'}
            className="flex items-center space-x-0.5 group"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/images/77.png"
              alt="Logo"
              width={100}
              height={50}
              className="transition-transform duration-300 transform group-hover:scale-105"
            />
            <span className="text-gray-900 text-xl font-bold select-none">
              Selam Realestate
            </span>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-600 hover:text-primary transition-colors font-medium relative group"
                onClick={() => setMenuOpen(false)}
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
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

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white/80 backdrop-blur-md shadow-lg px-4 py-3 space-y-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 px-3 rounded hover:bg-primary hover:text-white font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
