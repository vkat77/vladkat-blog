import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
          vladkat.com
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/posts" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            All Posts
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
