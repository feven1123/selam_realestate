'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const dummyNews = {
  'grand-opening-new-apartment': {
    title: 'Grand Opening of Our New Apartment Complex',
    date: 'July 1, 2025',
    image: '/images/news1.jpg',
    content: 'We are thrilled to announce the launch of our latest apartment...',
  },
  'hawassa-project-construction-begins': {
    title: 'Construction Begins in Hawassa Project',
    date: 'June 18, 2025',
    image: '/images/news2.jpg',
    content: 'Our Hawassa housing project has officially kicked off...',
  },
  'new-villas-in-mekelle': {
    title: 'New Villas Available for Booking in Mekelle',
    date: 'June 1, 2025',
    image: '/images/news3.jpg',
    content: 'Selam Realestate is now accepting bookings for luxury villas in Mekelle...',
  },
};

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = dummyNews[slug as keyof typeof dummyNews];

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
      <Header />
      <main className="pt-20 bg-white">
        <section className="bg-[#B0B8C1] text-white py-20 text-center px-4">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <p className="text-lg">{article.date}</p>
        </section>

        <section className="py-16 px-4 bg-white max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src={article.image}
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
