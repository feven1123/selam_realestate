'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        const foundProject = data.find((p: any) => p.id === Number(id));
        setProject(foundProject || null);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProject();
  }, [id]);

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
      <main className="pt-20 max-w-4xl mx-auto p-4">
        {/* Project Image */}
        <div className="relative w-full h-64 rounded overflow-hidden shadow mb-6">
          <Image
            src={project.imageUrl || project.image || '/images/placeholder.jpg'}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Project Details */}
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="mb-2 text-gray-700">{project.description}</p>
        <p className="mb-2 font-semibold">Location: {project.location}</p>
        <p className="mb-6">
          Status: <span className="font-medium">{project.status}</span>
        </p>

        {/* Contact Form - sends to your email directly */}
        <h2 className="text-2xl font-semibold mb-4">Send a Request</h2>

        <form
          action="https://formsubmit.co/favumail20@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <input
            type="hidden"
            name="_subject"
            value={`Request for ${project.title}`}
          />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/Projects"
          />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name *"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email *"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message *"
            className="w-full border px-3 py-2 rounded"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Request
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
