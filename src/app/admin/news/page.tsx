'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Trash2 } from 'lucide-react'; // Optional: install lucide-react for icons

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
}

const initialNews: NewsItem[] = [
  {
    id: 1,
    title: "New Housing Project Launched",
    date: "2025-07-08",
    summary: "We have launched a new housing project in Addis Ababa with modern amenities.",
  },
  {
    id: 2,
    title: "Market Trends for 2025",
    date: "2025-07-01",
    summary: "An overview of the current real estate market trends and what to expect.",
  },
  {
    id: 3,
    title: "How to Secure a Mortgage",
    date: "2025-06-25",
    summary: "Tips and guidelines on securing a mortgage loan easily and safely.",
  },
];

export default function NewsAdminPage() {
  const [news, setNews] = useState(initialNews);
  const router = useRouter();

  const deleteNews = (id: number) => {
    setNews((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">News Management</h1>
        <button
          onClick={() => router.push('/admin/news/add')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add News
        </button>
      </div>

      <div className="space-y-6">
        {news.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="border rounded p-4 bg-white shadow flex flex-col md:flex-row md:space-x-6 relative"
          >
            <img
              src="/1.jpeg"
              alt="News Image"
              className="w-full md:w-48 h-28 object-cover rounded mb-4 md:mb-0"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <p className="mb-4">{item.summary}</p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => router.push(`/admin/news/edit/${item.id}`)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button onClick={() => deleteNews(item.id)} title="Delete">
                  <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700 transition" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
