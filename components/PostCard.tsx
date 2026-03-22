import Link from 'next/link';
import { PostMeta, categoryLabels, categoryColors, formatDate } from '@/lib/posts';

interface PostCardProps {
  post: PostMeta;
  showDivider?: boolean;
}

export default function PostCard({ post, showDivider = true }: PostCardProps) {
  return (
    <article>
      {showDivider && <hr className="border-gray-200 mb-6" />}
      <div className="mb-6">
        <Link href={`/posts/${post.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 hover:text-blue-700 transition-colors leading-snug mb-1">
            {post.title}
          </h2>
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
          <span className={`text-xs px-2 py-0.5 font-medium rounded ${categoryColors[post.category]}`}>
            {categoryLabels[post.category]}
          </span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-2">{post.excerpt}</p>
        <Link
          href={`/posts/${post.slug}`}
          className="text-sm font-bold text-gray-800 hover:text-blue-700 transition-colors"
        >
          Read More &gt;&gt;
        </Link>
      </div>
    </article>
  );
}
