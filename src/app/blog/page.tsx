import Link from 'next/link';
import { Metadata } from 'next';
import { blogPosts } from '@/data/blogPosts';
import SeoHeading from '@/components/SeoHeading';

export const metadata: Metadata = {
  title: 'Freelance Protection Blog | ToxiGuard',
  description: 'Learn how to protect yourself from toxic clients, secure payments, and avoid risky projects with expert advice from the ToxiGuard team.',
  keywords: ['freelance protection', 'toxic client detection', 'freelance payment security', 'upwork risk analysis', 'freelance contract protection'],
  openGraph: {
    title: 'Freelance Protection Blog | ToxiGuard',
    description: 'Learn how to protect yourself from toxic clients, secure payments, and avoid risky projects with expert advice from the ToxiGuard team.',
    url: 'https://toxiguard.site/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SeoHeading 
            level={1} 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            keywords={['freelance protection blog', 'toxic client advice', 'freelance security tips']}
          >
            Freelance Protection Blog
          </SeoHeading>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Expert advice to help you avoid toxic clients and protect your freelance business
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={post.image || '/blog/placeholder.jpg'}
                  alt={post.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.isoDate} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
                <div className="mt-4 flex items-center gap-x-4">
                  <div className="text-sm text-gray-500">
                    {post.readTime}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <SeoHeading 
            level={2} 
            className="text-2xl font-bold tracking-tight text-gray-900"
            keywords={['freelance newsletter', 'protection tips', 'freelance advice']}
          >
            Subscribe to Our Newsletter
          </SeoHeading>
          <p className="mt-4 text-lg text-gray-600">
            Get the latest freelance protection tips and strategies delivered to your inbox
          </p>
          <div className="mt-6 flex max-w-md mx-auto items-center gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 