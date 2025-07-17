'use client';

import Image from 'next/image';
import { CheckCircleIcon } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    'Trusted and verified real estate listings',
    'Wide range of property types and locations',
    'Professional and experienced agents',
    'Fast response and 24/7 support service',
    'Transparent pricing and process',
  ];

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Selam Realestate?</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We’re committed to helping you find your ideal property by offering trusted listings and expert support.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Bullet List */}
        <div>
          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-[#B0B8C1] mt-1 mr-3" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="w-full">
          <Image
            src="/images/1.jpeg"
            alt="Why Choose Us"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
