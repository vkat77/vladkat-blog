import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Vlad Katsva — technology, analytics, food, sustainability, and democracy.',
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex gap-8 items-start">
        <div className="flex-1 min-w-0">
          <div className="bg-white border border-gray-200 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">About Me</h1>

            <div className="flex gap-6 mb-6">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                <Image
                  src="/avatar.jpg"
                  alt="Vlad Katsva"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">Vlad Katsva</h2>
                <p className="text-sm text-gray-500">Technology · Analytics · Food · Sustainability · Democracy</p>
              </div>
            </div>

            <div className="prose">
              <p>
                Hi, I&apos;m Vlad. I help people navigate technological change — in life and at work.
                I&apos;m passionate about digital experimentation, thoughtful data analysis, effective
                data visualization, and using analytical frameworks for better decisions.
              </p>
              <h2>What I write about</h2>
              <ul>
                <li><strong>Technology</strong> — software, tools, and how technology shapes the way we live and work</li>
                <li><strong>Analytics</strong> — data analysis, metrics, and making sense of information</li>
                <li><strong>Food</strong> — recipes, ingredients, restaurants, and the culture around eating</li>
                <li><strong>Sustainability</strong> — environment, energy, and building a more sustainable world</li>
                <li><strong>Democracy</strong> — politics, civic life, and the health of democratic institutions</li>
                <li><strong>Other</strong> — everything else that doesn&apos;t fit neatly in a box</li>
              </ul>
              <h2>Get in touch</h2>
              <p>
                The best way to reach me is via the <a href="/contact">contact page</a>.
              </p>
            </div>
          </div>
        </div>

        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
