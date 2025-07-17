'use client';

import { Home, ShieldCheck, Wifi, Car, TreePine, Building2 } from 'lucide-react';

export default function HomeFeatures() {
  const features = [
    {
      icon: <Home className="w-8 h-8 text-[#B0B8C1]" />,
      title: 'Modern Design',
      description: 'Contemporary interiors that match your lifestyle.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#B0B8C1]" />,
      title: '24/7 Security',
      description: 'Secure compound with trained guards and CCTV.',
    },
    {
      icon: <Wifi className="w-8 h-8 text-[#B0B8C1]" />,
      title: 'High-Speed Internet',
      description: 'Reliable internet for work, streaming, and more.',
    },
    {
      icon: <Car className="w-8 h-8 text-[#B0B8C1]" />,
      title: 'Parking Space',
      description: 'Dedicated car parking for each unit.',
    },
    {
      icon: <TreePine className="w-8 h-8 text-[#B0B8C1]" />,
      title: 'Green Area',
      description: 'Landscaped garden for a peaceful environment.',
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#B0B8C1]" />,
      title: 'Smart Utilities',
      description: 'Water, electricity, and waste management system.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Your Home Comes With</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Every Selam Realestate property is equipped with top features to ensure comfort, security, and convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-left"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
