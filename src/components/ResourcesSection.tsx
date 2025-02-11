'use client';

import { expertResources } from '@/data/resources';
import { SECTIONS } from '@/constants/sections';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ResourcesSection() {
  useEffect(() => {
    console.log('Resources section mounted with ID:', SECTIONS.RESOURCES);
  }, []);

  return (
    <section 
      id={SECTIONS.RESOURCES}
      data-section={SECTIONS.RESOURCES}
      className="py-32 bg-gray-50 scroll-mt-[120px]"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Expert Resources
          <span className="block text-xl text-gray-500 mt-4">
            Practical guides to protect your freelance business
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertResources.map(resource => (
            <Link 
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-sm text-toxic-red font-medium">
                {resource.category}
              </span>
              <h3 className="text-xl font-bold mt-2 mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {resource.description}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {resource.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 