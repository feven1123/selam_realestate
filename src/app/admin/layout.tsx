'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Bell, User, LogOut } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // You can replace this with your actual admin info, e.g., from context or API
  const adminName = 'Admin'; // Or admin email

  // Logout function (clear session/cookies and redirect to login)
  const handleLogout = () => {
    // TODO: clear auth tokens or session here

    // Redirect to login page
    router.push('/admin/auth/login');
  };

  // Check if current path is login or register
  const isAuthPage = pathname === '/admin/auth/login' || pathname === '/admin/auth/register';

  if (isAuthPage) {
    // Return only the main content without sidebar
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        {children}
      </main>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white min-h-screen p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <Link href="/admin/dashboard" className="block hover:underline">Dashboard</Link>
          <Link href="/admin/news" className="block hover:underline">News</Link>
          <Link href="/admin/projects" className="block hover:underline">Projects</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white px-6 py-4 shadow">
          <h1 className="text-xl font-bold text-blue-600">Selam Realstate</h1>
          <div className="flex items-center space-x-4 relative">
            <button onClick={() => router.push('/admin/notifications')}>
              <Bell className="w-5 h-5 text-gray-700" />
            </button>

            {/* Dropdown container */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <User className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-700"></span>
              </button>

         {/* Dropdown menu */}
{dropdownOpen && (
  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
    {/* Admin info without border */}
    <div className="px-4 py-3 flex items-center space-x-3">
      <User className="w-6 h-6 text-gray-600" />
      <span className="text-gray-800 font-semibold">{adminName}</span>
    </div>

    {/* Settings above the line */}
    <Link
      href="/admin/settings"
      className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
      onClick={() => setDropdownOpen(false)}
    >
      Settings
    </Link>

    {/* Divider line only between Settings and Logout */}
    <hr className="border-gray-200 my-1" />

    {/* Logout below the line */}
    <button
      onClick={handleLogout}
      className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-600 flex items-center space-x-2"
    >
      <LogOut className="w-5 h-5" />
      <span>Logout</span>
    </button>
  </div>
)}


            </div>

            <select
              defaultValue="en"
              className="border px-2 py-1 rounded text-sm text-gray-700"
              onChange={(e) => alert(`Language changed to: ${e.target.value}`)}
            >
              <option value="en">English</option>
              <option value="am">Amharic</option>
            </select>
          </div>
        </header>

        <main className="flex-1 p-10 bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
