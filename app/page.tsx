import { getAllPosts, categoryLabels, PostCategory } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function Home() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 5);
  const categories: PostCategory[] = ['technology', 'analytics', 'food', 'sustainability', 'democracy', 'other'];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex gap-8 items-start">
        {/* Main column */}
        <div className="flex-1 min-w-0">
          {/* Hero */}
          <div className="bg-white border border-gray-200 p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to vladkat.com</h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Writing about technology, analytics, food, sustainability, and democracy. Curious by nature, learning in public.
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

          {/* Recent posts */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Latest Posts</h2>
            <p className="text-sm text-gray-500 mb-4">Most recent writing, newest first.</p>

            {recentPosts.length === 0 ? (
              <p className="text-gray-500 text-sm py-4">No posts yet. Check back soon!</p>
            ) : (
              recentPosts.map((post, i) => (
                <PostCard key={post.slug} post={post} showDivider={i > 0} />
              ))
            )}

            {allPosts.length > 5 && (
              <div className="mt-2 pt-4 border-t border-gray-200">
                <Link href="/posts" className="text-sm font-bold text-gray-800 hover:text-blue-700 transition-colors">
                  View All Posts &gt;&gt;
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
