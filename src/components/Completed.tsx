'use client';

import Link from 'next/link';
import Image from 'next/image';

const completedProjects = [
  {
    id: 1,
    title: 'Bole Hillside Apartments',
    location: 'Bole, Addis Ababa',
    year: 'Completed in 2022',
    image: '/images/completed1.jpg',
  },
  {
    id: 2,
    title: 'Ayder Luxury Villas',
    location: 'Ayder, Mekelle',
    year: 'Completed in 2023',
    image: '/images/completed2.jpg',
  },
  {
    id: 3,
    title: 'Lakeside Commercial Tower',
    location: 'Bahirdar, Amhara',
    year: 'Completed in 2021',
    image: '/images/completed3.jpg',
  },
];

export default function CompletedProjects() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Completed Projects</h2>
        <p className="text-gray-600 mt-2">
          Explore our completed real estate developments across Ethiopia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {completedProjects.map((project) => (
          <Link
            href="/projects"
            key={project.id}
            className="bg-gray-50 hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{project.title}</h3>
              <p className="text-primary font-medium">{project.location}</p>
              <p className="text-gray-600 text-sm mt-1">{project.year}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 bg-[#B0B8C1] text-white rounded-full font-medium hover:bg-[#9aa4b0] transition"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
