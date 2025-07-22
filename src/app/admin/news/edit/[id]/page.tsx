'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';

export default function EditNewsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    summary: '',
    image: '',
  });

  // Fetch existing news data by ID
  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`/api/news/${id}`);
        if (!res.ok) throw new Error('Failed to fetch news item');
        const data = await res.json();

        setFormData({
          title: data.title,
          date: data.publishedAt.slice(0, 10),
          summary: data.content,
          image: data.imageUrl || '',
        });
      } catch (error) {
        console.error(error);
      }
    }

    if (id) fetchNews();
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

  const handleSave = async () => {
    try {
      const res = await fetch('/api/news', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: Number(id),
          title: formData.title,
          content: formData.summary,
          imageUrl: formData.image,
          publishedAt: formData.date,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to update news');
      }

      router.push('/admin/news');
    } catch (error) {
      alert(`Error updating news: ${(error as Error).message}`);
      console.error(error);
    }
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
