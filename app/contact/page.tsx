import Sidebar from '@/components/Sidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Vlad Kat.',
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0">
          <div className="bg-white border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Contact</h1>
            <p className="text-sm text-gray-500 mb-6">
              Have a question, want to collaborate, or just want to say hi? Fill out the form below.
            </p>

            <hr className="border-gray-200 mb-6" />

            <form className="space-y-4 max-w-lg" action="mailto:hello@vladkat.com" method="GET">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="body"
                  rows={6}
                  className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white text-sm px-5 py-2 hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
