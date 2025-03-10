'use client';

import { usePathname } from 'next/navigation';

export default function CanonicalLink() {
  const pathname = usePathname() || '';
  
  // Очищаем путь от trailing slash для канонического URL
  const cleanPath = pathname.endsWith('/') && pathname !== '/' 
    ? pathname.slice(0, -1) 
    : pathname;
    
  // Обрабатываем языковые пути
  const canonicalPath = cleanPath.startsWith('/en') 
    ? cleanPath.replace('/en', '') 
    : cleanPath;
    
  return (
    <link 
      rel="canonical" 
      href={`https://toxiguard.site${canonicalPath}`} 
    />
  );
} 