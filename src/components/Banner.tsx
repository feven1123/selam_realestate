'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSearch() {
  const router = useRouter();

  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (location) params.append('location', location);
    if (type) params.append('type', type);
    if (status) params.append('status', status);

    router.push(`/Projects?${params.toString()}`);
  };

  return (
    <section
      className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/1.jpeg')",
      }}
    >
      <div className="relative z-10 text-center px-4 w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text- mb-3">
          Find Your Dream Home
        </h1>
        <p className="text-sm md:text-base text-black-200 mb-6">
          Search from the best properties available in Ethiopia.
        </p>

        <form
          onSubmit={handleSearch}
          className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            name="location"
            className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
          >
            <option value="">Select Location</option>
            <option value="bole">Bole</option>
            <option value="saris">Saris</option>
            <option value="megenagha">Megenagha</option>
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            name="type"
            className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            name="status"
            className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
          >
            <option value="">Status</option>
            <option value="completed">Completed</option>
            <option value="on-process">On Process</option>
            <option value="featured">Featured</option>
          </select>

          <button
            type="submit"
            className="bg-[#B0B8C1] hover:bg-[#9aa4b0] text-white font-medium px-4 py-2 rounded"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
