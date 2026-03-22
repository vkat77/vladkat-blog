import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'All blog posts by Vlad Kat, from newest to oldest.',
};

export default function AllPostsPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 min-w-0">
          <div className="bg-white border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">All Posts</h1>
            <p className="text-sm text-gray-500 mb-6">
              All posts on the site, from newest to oldest.
            </p>

            <hr className="border-gray-200 mb-6" />

            {posts.length === 0 ? (
              <p className="text-gray-500 text-sm">No posts yet. Check back soon!</p>
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
