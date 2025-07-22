'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  image?: string;
  publishedAt: string;
}

export default function NewsAdminPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/news');
        if (!res.ok) throw new Error('Failed to fetch news');
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchNews();
  }, []);

  const deleteNews = async (id: number) => {
    if (!confirm('Are you sure you want to delete this news?')) return;

    try {
      const res = await fetch(`/api/news?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to delete news');
      }

      setNews((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert(`Error deleting news: ${(error as Error).message}`);
      console.error(error);
    }
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
        {news.length === 0 && <p>No news found.</p>}

        {news.map((item) => (
          <div
            key={item.id}
            className="border rounded p-4 bg-white shadow flex flex-col md:flex-row md:space-x-6 relative"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-48 h-28 object-cover rounded mb-4 md:mb-0"
              />
            )}
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{new Date(item.publishedAt).toLocaleDateString()}</p>
              <p className="mb-4">{item.content}</p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => router.push(`/admin/news/edit/${item.id}`)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNews(item.id)}
                  title="Delete"
                  className="text-red-600 hover:underline flex items-center"
                >
                  <Trash2 className="w-5 h-5 mr-1" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
