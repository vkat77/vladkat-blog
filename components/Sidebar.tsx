import Link from 'next/link';
import Image from 'next/image';
import { categoryLabels, PostCategory } from '@/lib/posts';

export default function Sidebar() {
  const categories = Object.keys(categoryLabels) as PostCategory[];

  return (
    <aside className="space-y-8">
      {/* About Me */}
      <div className="bg-white border border-gray-200 p-5">
        <h3 className="text-base font-bold text-gray-900 mb-4 pl-3 border-l-4 border-blue-500 uppercase tracking-wide">
          About Me
        </h3>
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 mb-3">
            <Image src="/avatar.jpg" alt="Vlad Katsva" width={96} height={96} className="object-cover w-full h-full" />
          </div>
          <p className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-2">VLAD KATSVA</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Hi, I&apos;m Vlad. I help people navigate technological change — in life and at work.
            I&apos;m passionate about digital experimentation, thoughtful data analysis, effective
            data visualization, and using analytical frameworks for better decisions.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border border-gray-200 p-5">
        <h3 className="text-base font-bold text-gray-900 mb-4 pl-3 border-l-4 border-blue-500 uppercase tracking-wide">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/category/${cat}`}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                <span className="text-gray-400">›</span>
                {categoryLabels[cat]}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-white border border-gray-200 p-5">
        <h3 className="text-base font-bold text-gray-900 mb-2 pl-3 border-l-4 border-blue-500 uppercase tracking-wide">
          Stay in Touch
        </h3>
        <p className="text-sm text-gray-600 mb-3">New posts, no spam.</p>
        <form className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-sm py-2 hover:bg-blue-700 transition-colors font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
}
