import { expertResources } from '@/config/expertResources';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return expertResources.map((resource) => ({
    slug: resource.slug,
  }));
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = expertResources.find(r => r.slug === params.slug);
  
  if (!resource) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">{resource.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: resource.content }} />
    </div>
  );
} 