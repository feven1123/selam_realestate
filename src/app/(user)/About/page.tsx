'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-white">
      {/* Intro Section */}
      <section className="bg-[#B0B8C1] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Selam Realestate</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Building dreams and communities with trust, quality, and innovation.
        </p>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Selam Realestate is a trusted real estate development company in Ethiopia,
            focused on building high-quality residential and commercial properties that stand
            the test of time. Our projects are designed with modern living in mind, combining
            style, functionality, and accessibility. Whether it&#39;s affordable housing, luxury
            villas, or commercial buildings — we aim to create communities that empower lives.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
            Why Selam Realestate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Trusted Developer</h3>
              <p className="text-gray-600">Over 10 years of experience delivering quality properties.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Prime Locations</h3>
              <p className="text-gray-600">Strategically located projects in major Ethiopian cities.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Customer First</h3>
              <p className="text-gray-600">We prioritize long-term value and satisfaction for clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image and Description */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image
              src="/images/about-buildings.jpg"
              alt="Selam Realestate Projects"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Delivering Value</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              From design to delivery, Selam Realestate maintains the highest standards
              in construction, sustainability, and community impact. Our completed and
              ongoing projects speak to our promise of quality and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CEO's Message */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center md:text-left">Message from the CEO</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Welcome to Selam Realestate. We are proud to be part of building a better Ethiopia by creating
              sustainable, affordable, and beautiful spaces for people to live, work, and thrive. Your trust is the
              foundation of our journey, and we look forward to building the future with you.
            </p>
            <p className="mt-6 font-semibold text-gray-700">— Ato Yonas Alemu, CEO</p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/ceo.jpg"
              alt="CEO"
              width={350}
              height={400}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sister Companies */}
<section className="py-16 px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-12">Our Sister Companies</h2>
    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-center">
      {[
        { name: 'Selam Construction', logo: '/images/sister1.png' },
        { name: 'Selam Cement', logo: '/images/sister2.png' },
        { name: 'Selam Manufacturing', logo: '/images/sister3.png' },
        { name: 'Selam Steel', logo: '/images/sister4.png' },
        { name: 'Selam Transport', logo: '/images/sister5.png' },
        { name: 'Selam Trading', logo: '/images/sister6.png' },
      ].map((company) => (
        <div key={company.name} className="flex flex-col items-center">
          <Image
            src={company.logo}
            alt={company.name}
            width={64}
            height={64}
            className="object-contain mb-2"
          />
          <span className="text-sm font-medium text-gray-700">{company.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

    </main>
    <Footer />
</>
  );
}
