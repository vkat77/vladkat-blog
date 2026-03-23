import { getPostsByCategory, categoryLabels, PostCategory } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ category: string }>;
}

const validCategories: PostCategory[] = ['technology', 'analytics', 'food', 'sustainability', 'travel', 'growth', 'other'];

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!validCategories.includes(category as PostCategory)) return {};
  return {
    title: categoryLabels[category as PostCategory],
    description: `Posts about ${categoryLabels[category as PostCategory]}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!validCategories.includes(category as PostCategory)) notFound();

  const cat = category as PostCategory;
  const posts = getPostsByCategory(cat);
  const label = categoryLabels[cat];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 min-w-0">
          <div className="bg-white border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{label}</h1>
            <p className="text-sm text-gray-500 mb-6">
              {posts.length} post{posts.length !== 1 ? 's' : ''} in this category.
            </p>

            <hr className="border-gray-200 mb-6" />

            {posts.length === 0 ? (
              <p className="text-gray-500 text-sm">No posts in this category yet.</p>
            ) : (
              posts.map((post, i) => (
                <PostCard key={post.slug} post={post} showDivider={i > 0} />
              ))
            )}
          </div>
        </div>

        <div className="w-full lg:w-64 lg:flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
