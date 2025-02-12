import { notFound } from 'next/navigation';

export default function ResourcesPage() {
  // Так как раздел экспертных ресурсов удалён, перенаправляем на страницу "не найдено"
  notFound();
  return null;
} 