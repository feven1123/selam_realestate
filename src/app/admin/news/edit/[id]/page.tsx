'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';

const initialNews = [
  {
    id: 1,
    title: 'New Housing Project Launched',
    date: '2025-07-08',
    summary: 'We have launched a new housing project...',
    image: '/1.jpeg',
  },
  {
    id: 2,
    title: 'Market Trends for 2025',
    date: '2025-07-01',
    summary: 'An overview of the current market...',
    image: '/1.jpeg',
  },
  {
    id: 3,
    title: 'How to Secure a Mortgage',
    date: '2025-06-25',
    summary: 'Tips and guidelines for a mortgage...',
    image: '/1.jpeg',
  },
];

export default function EditNewsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    summary: '',
    image: '',
  });

  useEffect(() => {
    const newsItem = initialNews.find((item) => item.id === Number(id));
    if (newsItem) {
      setFormData(newsItem);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    console.log('News Updated:', formData);
    router.push('/admin/news');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit News</h1>

      <label
        htmlFor="image"
        className="cursor-pointer inline-flex items-center px-4 py-2 border border-dashed border-gray-400 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition mb-2"
      >
        <Plus className="w-4 h-4 mr-2" />
        Change Image
      </label>
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

      {formData.image && (
        <img src={formData.image} alt="Preview" className="w-full h-40 object-cover rounded mb-4" />
      )}

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <textarea
        name="summary"
        value={formData.summary}
        onChange={handleChange}
        placeholder="Summary"
        rows={5}
        className="w-full mb-4 border px-3 py-2 rounded"
      />
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Save
      </button>
    </div>
  );
}
