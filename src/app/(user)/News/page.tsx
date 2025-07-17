'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const newsArticles = [
  {
    title: 'Grand Opening of Our New Apartment Complex',
    date: 'July 1, 2025',
    excerpt: 'Selam Realestate is excited to announce the launch of our brand-new luxury apartment complex in Addis Ababa...',
    image: '/images/news1.jpg',
    slug: 'grand-opening-new-apartment',
  },
  {
    title: 'Construction Begins in Hawassa Project',
    date: 'June 18, 2025',
    excerpt: 'We’ve officially broken ground on our highly anticipated housing project in Hawassa...',
    image: '/images/news2.jpg',
    slug: 'hawassa-project-construction-begins',
  },
  {
    title: 'New Villas Available for Booking in Mekelle',
    date: 'June 1, 2025',
    excerpt: 'Our premium villas in Mekelle are now open for booking — a perfect blend of elegance and comfort...',
    image: '/images/news3.jpg',
    slug: 'new-villas-in-mekelle',
  },
];

export default function NewsPage() {
  return (
    <>
      <Header />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-[#B0B8C1] text-white py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Updates</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Stay informed about our latest real estate developments and announcements.
          </p>
        </section>

        {/* News List */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsArticles.map((article) => (
              <div
                key={article.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  </div>
                  <div>
                    <Link
                      href={`/News/${article.slug}`}
                      className="inline-block bg-[#B0B8C1] hover:bg-[#9aa4b0] text-white px-4 py-2 rounded font-medium transition-colors"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
