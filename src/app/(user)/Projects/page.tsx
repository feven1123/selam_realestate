'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const allProjects = [
  {
    id: 'addis-luxury-apartments',
    title: 'Addis Ababa Luxury Apartments',
    type: 'featured',
    location: 'Addis Ababa',
    image: '/images/project1.jpg',
    status: 'Available',
  },
  {
    id: 'mekelle-villas-phase-1',
    title: 'Mekelle Villas Phase I',
    type: 'completed',
    location: 'Mekelle',
    image: '/images/project2.jpg',
    status: 'Sold Out',
  },
  {
    id: 'hawassa-city-homes',
    title: 'Hawassa City Homes',
    type: 'ongoing',
    location: 'Hawassa',
    image: '/images/project3.jpg',
    status: 'Under Construction',
  },
  {
    id: 'bahir-dar-family-homes',
    title: 'Bahir Dar Family Homes',
    type: 'featured',
    location: 'Bahir Dar',
    image: '/images/project4.jpg',
    status: 'Booking Open',
  },
  {
    id: 'gondar-condominiums',
    title: 'Gondar Condominiums',
    type: 'completed',
    location: 'Gondar',
    image: '/images/project5.jpg',
    status: 'Delivered',
  },
  {
    id: 'dire-dawa-apartments',
    title: 'Dire Dawa Apartments',
    type: 'ongoing',
    location: 'Dire Dawa',
    image: '/images/project6.jpg',
    status: 'In Progress',
  },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'completed' | 'featured'>('all');

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.location.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === 'all' || project.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <>
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
                  onClick={() => setFilter(type as any)}
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
                <div className="relative w-full h-56 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.location}</p>
                <p
                  className={`text-sm font-medium mt-2 ${
                    project.type === 'completed'
                      ? 'text-green-600'
                      : project.type === 'ongoing'
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
        </section>
      </main>

      <Footer />
    </>
  );
}
