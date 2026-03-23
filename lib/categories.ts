export type PostCategory = 'technology' | 'analytics' | 'food' | 'sustainability' | 'travel' | 'other';

export const categoryLabels: Record<PostCategory, string> = {
  technology: 'Technology',
  analytics: 'Analytics',
  food: 'Food',
  sustainability: 'Sustainability',
  travel: 'Travel',
  other: 'Other',
};

export const categoryColors: Record<PostCategory, string> = {
  technology: 'bg-blue-100 text-blue-800',
  analytics: 'bg-purple-100 text-purple-800',
  food: 'bg-orange-100 text-orange-800',
  sustainability: 'bg-green-100 text-green-800',
  travel: 'bg-yellow-100 text-yellow-800',
  other: 'bg-gray-100 text-gray-700',
};

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: PostCategory;
  excerpt: string;
  coverImage?: string;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
