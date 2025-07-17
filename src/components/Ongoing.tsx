'use client';

import Link from 'next/link';
import Image from 'next/image';

const ongoingProjects = [
  {
    id: 1,
    title: 'Addis Skyline Towers',
    location: 'Lebu, Addis Ababa',
    eta: 'Est. Completion: 2025',
    image: '/images/ongoing1.jpg',
  },
  {
    id: 2,
    title: 'Green Park Condos',
    location: 'Adama, Oromia',
    eta: 'Est. Completion: 2024',
    image: '/images/ongoing2.jpg',
  },
  {
    id: 3,
    title: 'Grand Avenue Offices',
    location: 'Piassa, Addis Ababa',
    eta: 'Est. Completion: 2025',
    image: '/images/ongoing3.jpg',
  },
];

export default function OngoingProjects() {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Ongoing Projects</h2>
        <p className="text-gray-600 mt-2">
          Take a look at our currently active developments under construction.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {ongoingProjects.map((project) => (
          <Link
            href="/projects"
            key={project.id}
            className="bg-white hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
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
              <p className="text-gray-600 text-sm mt-1">{project.eta}</p>
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
