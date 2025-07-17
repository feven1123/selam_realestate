'use client';

import React from 'react';
import { HomeIcon, ClipboardCheckIcon, MailIcon } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How Selam Realestate Works</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We’ve simplified the process of finding and buying or renting your next property.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 mx-auto mb-4 bg-[#B0B8C1] text-white rounded-full flex items-center justify-center">
              <HomeIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Browse Listings</h3>
            <p className="text-gray-600">
              Explore various properties based on location, type, and availability.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 mx-auto mb-4 bg-[#B0B8C1] text-white rounded-full flex items-center justify-center">
              <ClipboardCheckIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Choose a Property</h3>
            <p className="text-gray-600">
              Select the property that fits your needs and see full details including images.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
            <div className="w-14 h-14 mx-auto mb-4 bg-[#B0B8C1] text-white rounded-full flex items-center justify-center">
              <MailIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Send a Request</h3>
            <p className="text-gray-600">
              Fill the contact form to send your interest — we’ll contact you shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
