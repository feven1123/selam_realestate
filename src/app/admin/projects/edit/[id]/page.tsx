'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';

export default function EditProjectPage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    id: Number(id),
    title: '',
    description: '',
    location: '',
    status: 'Ongoing',
    image: '',
  });

  useEffect(() => {
    // Fetch project data by id from API
    async function fetchProject() {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        const project = data.find((p: any) => p.id === Number(id));
        if (project) setFormData(project);
      } catch (error) {
        console.error('Failed to fetch project', error);
      }
    }
    fetchProject();
  }, [id]);

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

  const handleSave = async () => {
    try {
      const res = await fetch('/api/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to update project');
      router.push('/admin/projects');
    } catch (error) {
      alert('Error updating project');
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Property</h1>

      <label
        htmlFor="image"
        className="cursor-pointer inline-flex items-center px-4 py-2 border border-dashed border-gray-400 rounded text-sm text-gray-600 hover:bg-gray-100 mb-2"
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
        <img
          src={formData.image}
          alt="Preview"
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}

      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        rows={4}
        className="w-full mb-2 border px-3 py-2 rounded"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full mb-4 border px-3 py-2 rounded"
      >
       <option value="Ongoing">Ongoing</option>
        <option value="Completed">Completed</option>
        <option value="Featured">Featured</option>
      </select>

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Save Changes
      </button>
    </div>
  ); 
}
