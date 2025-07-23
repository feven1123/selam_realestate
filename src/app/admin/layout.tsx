// /app/admin/layout.tsx
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Bell, User } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

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

  // Default layout with sidebar and header
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
          <div className="flex items-center space-x-4">
            <button onClick={() => router.push('/admin/notifications')}>
              <Bell className="w-5 h-5 text-gray-700" />
            </button>
            <button onClick={() => router.push('/admin/profile')} className="flex items-center space-x-2">
              <User className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium">Admin</span>
            </button>
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
