'use client';

import React from 'react';

export default function HeroSearch() {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/1.jpeg')", // Make sure this image exists
      }}
    >
      {/* Overlay */}
   

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold text- mb-3">
          Find Your Dream Home
        </h1>
        <p className="text-sm md:text-base text-black-200 mb-6">
          Search from the best properties available in Ethiopia.
        </p>

        {/* Search Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white/95 backdrop-blur-md p-4 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {/* Location */}
          <select
            name="location"
            className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
          >
            <option value="">Select Location</option>
            <option value="addis-ababa">Addis Ababa</option>
            <option value="mekelle">Mekelle</option>
            <option value="bahirdar">Bahir Dar</option>
            <option value="hawassa">Hawassa</option>
          </select>

          {/* Property Type */}
          <select
            name="type"
            className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="office">Office</option>
          </select>

          {/* Status */}
          <select
            name="status"
            className="border rounded px-3 py-2 focus:outline-none focus:ring w-full"
          >
            <option value="">Status</option>
            <option value="for-sale">For Sale</option>
            <option value="for-rent">For Rent</option>
          </select>

          {/* Search Button */}
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
