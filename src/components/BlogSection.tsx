'use client';

import Link from "next/link";
import { expertResources } from "../data/resources";
import { ScaleIcon, CurrencyDollarIcon, ShieldExclamationIcon, ArrowRightIcon, DocumentIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Инициализация модулей
SwiperCore.use([Navigation, Pagination]);

// Динамический импорт Swiper компонентов
const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

// Импорт стилей
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function getIconByType(iconType: string) {
  switch (iconType) {
    case 'shield':
      return <ShieldExclamationIcon className="w-6 h-6 text-blue-600" />;
    case 'scale':
      return <ScaleIcon className="w-6 h-6 text-red-600" />;
    case 'currency':
      return <CurrencyDollarIcon className="w-6 h-6 text-green-600" />;
    default:
      return <DocumentIcon className="w-6 h-6 text-gray-600" />;
  }
}

export function BlogPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Expert Resources
          </h2>
          <p className="text-gray-600">
            Concise guides for smarter freelancing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertResources.map(resource => (
            <article 
              key={resource.slug}
              className="group border rounded-xl p-5 hover:border-blue-200 transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <span className="text-sm font-medium text-blue-600">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {resource.description}
                </p>
                <Link
                  href={`/blog/${resource.slug}`}
                  className="mt-auto text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1.5 group"
                >
                  Read Guide
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 