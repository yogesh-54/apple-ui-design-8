import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function CreatorsSection() {
  return (
    <section className="py-20 bg-[#f5f5f7] border-t border-gray-200/60">
      <div className="max-w-[760px] mx-auto px-6 text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
          Working with Apple Podcasts.
        </h2>
        <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed">
          Find out how to submit your show, access analytics, monetize with Apple Podcasts Subscriptions, and reach millions of passionate listeners around the world.
        </p>
        <div className="pt-2">
          <a
            href="https://podcasters.apple.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-sm font-semibold text-[#0071e3] hover:underline space-x-1 group"
          >
            <span>Learn more about Apple Podcasts for Creators</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
