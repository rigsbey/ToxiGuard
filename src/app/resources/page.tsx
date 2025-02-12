import { redirect } from 'next/navigation';

export default function ResourcesPage() {
  // Так как раздел экспертных ресурсов удалён, перенаправляем посетителей в блог
  redirect('/blog');
  return null;
} 