import React from 'react';

export default function StatementSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#f5f5f7] border-t border-[#e8e8ed]/60">
      <div className="max-w-[960px] mx-auto px-6 text-center space-y-12 sm:space-y-16">
        
        {/* Statement 1 */}
        <div className="space-y-2">
          <p className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
            <span className="purple-bright-gradient">Millions of podcasts,</span>
            <br />
            <span className="text-[#1d1d1f]">from the biggest names</span>
            <br />
            <span className="text-[#1d1d1f]">to the best independents.</span>
          </p>
        </div>

        {/* Statement 2 */}
        <div className="pt-4">
          <p className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-snug">
            Access to{' '}
            <span className="purple-bright-gradient">premium content</span>
            <br />
            with subscriptions.
          </p>
        </div>

        {/* Statement 3 */}
        <div className="pt-4">
          <p className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-snug">
            Best-in-world{' '}
            <span className="purple-bright-gradient">curation</span>
            <br />
            and collections.
          </p>
        </div>

        {/* Statement 4 */}
        <div className="pt-4">
          <p className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug">
            <span className="purple-bright-gradient">Personalized discovery</span>
            <br />
            <span className="text-[#1d1d1f]">with easy ways to search.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
