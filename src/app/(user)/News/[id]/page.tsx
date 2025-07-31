'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Topbar from '@/components/TopBar';
type NewsItem = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
};

export default function NewsDetailPage() {
  const { id } = useParams();
  const [article, setArticle] = useState<NewsItem | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch('/api/news'); // get all news
        const data = await res.json();
        const found = data.find((n: NewsItem) => n.id === Number(id));
        setArticle(found || null);
      } catch (error) {
        console.error('Failed to fetch article:', error);
      }
    }

    if (id) fetchArticle();
  }, [id]);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-28 text-center">
          <h1 className="text-2xl text-gray-600">News article not found.</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
    <Topbar />

      <Header />
      <main className="pt-20 bg-white">
        <section className="bg-[#B0B8C1] text-white py-20 text-center px-4">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-lg">
            {new Date(article.publishedAt).toLocaleDateString()}
          </p>
        </section>

        <section className="py-16 px-4 bg-white max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src={article.imageUrl || '/images/placeholder.jpg'}
              alt={article.title}
              width={800}
              height={400}
              className="rounded-lg w-full object-cover shadow"
            />
          </div>
          <p className="text-lg text-gray-700 leading-8 whitespace-pre-line">
            {article.content}
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
