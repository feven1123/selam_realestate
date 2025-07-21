'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: "How can I book a property?",
    answer: "You can explore available properties on the home page and click on “Book Now” or contact us via the form above.",
  },
  {
    question: "Where are your offices located?",
    answer: "Our head office is in Addis Ababa, and we have regional branches in Mekelle, Bahir Dar, and Hawassa.",
  },
  {
    question: "Do I need to register to request a property?",
    answer: "No registration is required. Just fill the contact form or send us an email, and we’ll get back to you.",
  },
  {
    question: "How long does it take to get a response?",
    answer: "We typically respond within 1–2 business days. For urgent inquiries, call us directly.",
  },
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <main className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-[#B0B8C1] text-white py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We’d love to hear from you. Reach out with your questions or inquiries.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Send a Message</h2>
            <form
              action="https://formsubmit.co/favumail20@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Optional: Customize email subject */}
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              {/* Redirect to your site or thank you page */}
              <input type="hidden" name="_next" value="http://localhost:3000/" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:border-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:border-primary"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:border-primary"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="border rounded px-4 py-3 w-full focus:outline-none focus:ring focus:border-primary"
              />
              <button
                type="submit"
                className="bg-[#B0B8C1] hover:bg-[#9aa4b0] text-white px-6 py-3 rounded font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section with Toggle */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <button
                    className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-medium text-gray-700">{faq.question}</span>
                    <span className="text-xl text-gray-500">{openIndex === index ? '−' : '+'}</span>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                  )}
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
