// File: app/admin/projects/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: 'On Process' | 'Completed';
}

const initialProjects: Project[] = [
  {
    id: 1,
    title: 'Modern Villa in Bole',
    description: 'A beautiful modern villa located in the heart of Bole.',
    image: '/1.jpeg',
    status: 'On Process',
  },
  {
    id: 2,
    title: 'Luxury Apartments in Ayat',
    description: 'Spacious and elegant apartments with great amenities.',
    image: '/1.jpeg',
    status: 'Completed',
  },
];

export default function ProjectsAdminPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  useEffect(() => {
    const stored = localStorage.getItem('newProject');
    if (stored) {
      try {
        const newProject = JSON.parse(stored);
        newProject.id = Math.max(...projects.map((p) => p.id)) + 1;
        setProjects((prev) => [newProject, ...prev]);
        localStorage.removeItem('newProject');
      } catch (error) {
        console.error('Failed to parse new project', error);
      }
    }
  }, []);

  const handleDelete = (id: number) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects Management</h1>
        <button
          onClick={() => router.push('/admin/projects/add')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Property
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded shadow overflow-hidden relative"
          >
            <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-3 py-1 rounded z-10">
              {project.status}
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => router.push(`/admin/projects/edit/${project.id}`)}
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Pencil className="w-4 h-4 mr-1" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="flex items-center text-red-600 hover:underline"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
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
