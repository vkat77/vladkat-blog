import { getPostBySlug, getAllSlugs, categoryLabels, categoryColors, formatDate } from '@/lib/posts';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0">
          <article className="bg-white border border-gray-200 p-6">
            {/* Breadcrumb */}
            <div className="text-xs text-gray-500 mb-4">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              {' / '}
              <Link href="/posts" className="hover:text-blue-600">All Posts</Link>
              {' / '}
              <span className="text-gray-400">{post.title}</span>
            </div>

            {/* Header */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2 leading-snug">{post.title}</h1>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
              <Link
                href={`/category/${post.category}`}
                className={`text-xs px-2 py-0.5 font-medium rounded ${categoryColors[post.category]}`}
              >
                {categoryLabels[post.category]}
              </Link>
            </div>

            {/* Content */}
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Back link */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link href="/posts" className="text-sm font-bold text-gray-800 hover:text-blue-700 transition-colors">
                &lt;&lt; Back to All Posts
              </Link>
            </div>
          </article>
        </div>

        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
