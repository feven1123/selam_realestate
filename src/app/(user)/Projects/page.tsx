'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import Topbar from '@/components/TopBar';
interface Project {
  id: number;
  title: string;
  description: string;
  location: string;
  status: string;
  createdAt: string; // could also be Date if converted
  image: string;
  updatedAt: string;
  isFeatured?: boolean;
}

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'completed' | 'featured'>('all');
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    }

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.location.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === 'all' ||
      (filter === 'ongoing' && project.status === 'On Process') ||
      (filter === 'completed' && project.status === 'Completed') ||
      (filter === 'featured' && project.isFeatured === true);

    return matchesSearch && matchesFilter;
  });

  return (
    <>
    <Topbar />
      <Header />

      <main className="pt-20 bg-white">
        <section className="bg-[#B0B8C1] text-white py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Real Estate Projects</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Browse and search through our ongoing, completed, and featured projects.
          </p>
        </section>

        <section className="bg-white py-10 px-4 border-b border-gray-200">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <input
              type="text"
              placeholder="Search by title or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2 focus:outline-none focus:ring focus:border-primary"
            />
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {['all', 'ongoing', 'completed', 'featured'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type as 'all' | 'ongoing' | 'completed' | 'featured')}
                  className={`px-4 py-2 rounded border font-medium ${
                    filter === type
                      ? 'bg-[#B0B8C1] text-white border-[#B0B8C1]'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
              >
   <div className="relative w-full h-56 mb-4 rounded-md overflow-hidden">
   <Image
  src={
    project.image && project.image.trim() !== ''
      ? `/uploads/${project.image}`
      : '/images/placeholder.jpg'
  }
  alt={project.title}
  fill
  className="object-cover"
/>

</div>


                <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.location}</p>
                <p
                  className={`text-sm font-medium mt-2 ${
                    project.status === 'Completed'
                      ? 'text-green-600'
                      : project.status === 'On Process'
                      ? 'text-orange-500'
                      : 'text-blue-600'
                  }`}
                >
                  {project.status}
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href={`/Projects/${project.id}`}
                    className="inline-block bg-[#B0B8C1] hover:bg-[#9aa4b0] text-white px-4 py-2 rounded font-medium"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center text-gray-500 mt-10">No projects found.</div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
