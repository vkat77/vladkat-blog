import { getAllPosts, categoryLabels, PostCategory } from '@/lib/posts';
import PostListClient from '@/components/PostListClient';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function Home() {
  const allPosts = getAllPosts();
  const categories: PostCategory[] = ['technology', 'analytics', 'food', 'sustainability', 'travel', 'other'];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Main column */}
        <div className="flex-1 min-w-0">
          {/* Hero */}
          <div className="bg-white border border-gray-200 p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to vladkat.com</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Writing about technology, analytics, food, sustainability, and travel. Curious by nature, learning in public.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/category/${cat}`}
                  className="text-xs border border-gray-300 px-3 py-1 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  {categoryLabels[cat]}
                </Link>
              ))}
            </div>
          </div>

          {/* Posts */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Latest Posts</h2>
            <PostListClient posts={allPosts} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-64 lg:flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
