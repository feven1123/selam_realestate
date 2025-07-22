'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

type NewsItem = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  
};

export default function NewsPage() {
  const [newsArticles, setNewsArticles] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        setNewsArticles(data.reverse()); // Show newest first
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Header />

      <main className="pt-20 bg-white">
        <section className="bg-[#B0B8C1] text-white py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Updates</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Stay informed about our latest real estate developments and announcements.
          </p>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.content}</p>
                  </div>
                  <div>
                    <Link
                      href={`/News/${article.id}`}
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
