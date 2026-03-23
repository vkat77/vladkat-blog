'use client';

import { useState, useMemo } from 'react';
import { PostMeta, categoryLabels, PostCategory } from '@/lib/categories';
import PostCard from './PostCard';

const ALL = 'all';

interface Props {
  posts: PostMeta[];
}

export default function PostListClient({ posts }: Props) {
  const [category, setCategory] = useState<string>(ALL);
  const [sort, setSort] = useState<'newest' | 'oldest'>('newest');

  const categories = Object.keys(categoryLabels) as PostCategory[];

  const filtered = useMemo(() => {
    const result = category === ALL ? posts : posts.filter((p) => p.category === category);
    return [...result].sort((a, b) => {
      const d = new Date(a.date).getTime() - new Date(b.date).getTime();
      return sort === 'newest' ? -d : d;
    });
  }, [posts, category, sort]);

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-sm border border-gray-300 px-3 py-1.5 bg-white focus:outline-none focus:border-blue-500"
        >
          <option value={ALL}>All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{categoryLabels[cat]}</option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as 'newest' | 'oldest')}
          className="text-sm border border-gray-300 px-3 py-1.5 bg-white focus:outline-none focus:border-blue-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <hr className="border-gray-200 mb-6" />

      {filtered.length === 0 ? (
        <p className="text-gray-500 text-sm">No posts in this category yet.</p>
      ) : (
        filtered.map((post, i) => (
          <PostCard key={post.slug} post={post} showDivider={i > 0} />
        ))
      )}
    </div>
  );
}
