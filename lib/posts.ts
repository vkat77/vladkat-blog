import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type PostCategory = 'technology' | 'analytics' | 'food' | 'sustainability' | 'travel' | 'other';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: PostCategory;
  excerpt: string;
  coverImage?: string;
}

export interface Post extends PostMeta {
  content: string;
}

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

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      category: data.category as PostCategory,
      excerpt: data.excerpt as string,
      coverImage: data.coverImage as string | undefined,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(category: PostCategory): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    category: data.category as PostCategory,
    excerpt: data.excerpt as string,
    coverImage: data.coverImage as string | undefined,
    content: contentHtml,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
