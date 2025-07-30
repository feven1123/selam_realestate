'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

export default function AddNewsPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().slice(0, 10),
    summary: '',
    image: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          content: formData.summary,
          image: formData.image,
          publishedAt: formData.date,
        }),
      });
  
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to add news');
      }
  
      router.push('/admin/news');
    } catch (error) {
      alert(`Error adding news: ${(error as Error).message}`);
      console.error(error);
    }
  };
  

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add News</h1>

      <label
        htmlFor="image"
        className="cursor-pointer inline-flex items-center px-4 py-2 border border-dashed border-gray-400 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition mb-2"
      >
        <Plus className="w-4 h-4 mr-2" />
        Choose Image
      </label>
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

{formData.image && (
        <img
          src={formData.image}
          alt="Preview"
          className="w-full h-48 object-cover rounded mb-4"
        />
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
        placeholder="summary"
        rows={5}
        className="w-full mb-4 border px-3 py-2 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
}
