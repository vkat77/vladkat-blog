import { getAllPosts } from '@/lib/posts';
import PostListClient from '@/components/PostListClient';
import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'All blog posts by Vlad Katsva.',
};

export default function AllPostsPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 min-w-0">
          <div className="bg-white border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">All Posts</h1>
            <PostListClient posts={posts} />
          </div>
        </div>

        <div className="w-full lg:w-64 lg:flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
