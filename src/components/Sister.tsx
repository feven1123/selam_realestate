'use client';

import Image from 'next/image';

const companies = [
  { id: 1, name: 'Selam Construction', logo: '/images/company1.png' },
  { id: 2, name: 'Selam Design Studio', logo: '/images/company2.png' },
  { id: 3, name: 'Selam Property Mgmt', logo: '/images/company3.png' },
  { id: 4, name: 'Selam Trading', logo: '/images/company4.png' },
  { id: 5, name: 'Selam Engineering', logo: '/images/company5.png' },
  { id: 6, name: 'Selam Decor', logo: '/images/company6.png' },
];

export default function SisterCompanies() {
  return (
    <section className="py-16 bg-[#F9FAFB] px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sister Companies</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center max-w-6xl mx-auto">
        {companies.map((company) => (
          <div
            key={company.id}
            className="flex flex-col items-center space-y-2 group transition-transform hover:scale-105"
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <Image
                src={company.logo}
                alt={company.name}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 text-center">
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
