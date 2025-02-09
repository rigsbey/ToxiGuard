'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function ExpandableInfo({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        className="flex justify-between items-center w-full py-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        <ChevronDownIcon className={`w-5 h-5 transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-4' : 'max-h-0'
      }`}>
        <div className="prose-sm text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
} 