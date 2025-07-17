'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';

const projectData = {
  'addis-luxury-apartments': {
    title: 'Addis Ababa Luxury Apartments',
    location: 'CMC Road, Addis Ababa, Ethiopia',
    status: 'Ongoing',
    images: ['/images/1.jpeg', '/images/project2.jpg', '/images/project3.jpg'],
    description:
      'This luxury apartment project includes modern designs, green spaces, and community living at its finest.',
    details: ['3 Bedrooms', '2 Bathrooms', '220 sqm', 'Elevator Access'],
    features: ['24/7 Security', 'Parking Space', 'Gym & Spa', 'Close to Malls'],
  },
  // Add more projects here
};

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projectData[id as keyof typeof projectData];
  const [mainImage, setMainImage] = useState(project?.images?.[0]);

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-28 text-center">
          <h1 className="text-2xl text-gray-600">Project not found.</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20 bg-white">
        {/* Image and Form */}
        <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Main Image + Thumbnails */}
          <div className="relative w-full">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src={mainImage}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-4 left-4 bg-[#B0B8C1] text-white px-3 py-1 text-sm font-semibold rounded shadow">
                {project.status}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex mt-4 gap-3 overflow-x-auto">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setMainImage(img)}
                  className="w-24 h-20 relative cursor-pointer border hover:border-[#B0B8C1] rounded-md"
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Inquiry</h2>
            <form
              action="https://formspree.io/f/{your_form_id}" // 🔁 Replace this with actual form ID
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border px-4 py-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border px-4 py-2 rounded"
                required
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                className="w-full border px-4 py-2 rounded"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#B0B8C1] text-white px-6 py-2 rounded hover:bg-[#9aa4b0] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Project Details */}
        <section className="max-w-6xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#B0B8C1] mb-2">🏠 Address</h3>
            <p className="text-gray-700">{project.location}</p>
          </div>

          {/* Description */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#B0B8C1] mb-2">📄 Description</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>

          {/* Details */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#B0B8C1] mb-2">📐 Details</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {project.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#B0B8C1] mb-2">✨ Features</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {project.features.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
