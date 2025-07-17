// components/Footer.tsx
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#B0B8C1] text-gray-900 pt-10 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">Selam Realestate</h2>
          <p className="text-sm">
            Helping you find your dream home with trusted, affordable, and modern real estate listings in Ethiopia.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li><Link href="/news" className="hover:underline">News</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Addis Ababa, Ethiopia</li>
            <li>📞 +251 912 345 678</li>
            <li>✉️ info@selamrealestate.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm text-gray-700">
        &copy; {new Date().getFullYear()} Selam Realestate. All rights reserved.
      </div>
    </footer>
  );
}
