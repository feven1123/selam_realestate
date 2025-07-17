'use client';

import Link from 'next/link';
import Image from 'next/image';

const featuredProperties = [
  {
    id: 1,
    title: 'Modern Villa in Addis Ababa',
    price: '12,000,000 ETB',
    location: 'Bole, Addis Ababa',
    image: '/images/property1.jpg',
  },
  {
    id: 2,
    title: 'Luxury Apartment in Mekelle',
    price: '6,500,000 ETB',
    location: 'Ayder, Mekelle',
    image: '/images/property2.jpg',
  },
  {
    id: 3,
    title: 'Office Space in Bahir Dar',
    price: '8,000,000 ETB',
    location: 'Kebele 14, Bahir Dar',
    image: '/images/property3.jpg',
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Featured Properties</h2>
        <p className="text-gray-600 mt-2">Explore some of our top-listed real estate projects.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {featuredProperties.map((property) => (
          <Link
            href="/projects"
            key={property.id}
            className="bg-gray-50 hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
          >
            <Image
              src={property.image}
              alt={property.title}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{property.title}</h3>
              <p className="text-primary font-medium">{property.price}</p>
              <p className="text-gray-600 text-sm mt-1">{property.location}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 bg-[#B0B8C1] text-white rounded-full font-medium hover:bg-[#9aa4b0] transition"
        >
          View All Properties
        </Link>
      </div>
    </section>
  );
}
