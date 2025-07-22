'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'On Process' | 'Completed';
}

export default function ProjectsAdminPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) throw new Error('Failed to fetch projects');
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`/api/projects?id=${id}`, {
        method: 'DELETE',
      });
  
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to delete project');
      }
  
      setProjects((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      console.error('Failed to delete project:', error);
      alert('Failed to delete project: ' + error.message);
    }
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

      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
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
      )}
    </div>
  );
}
