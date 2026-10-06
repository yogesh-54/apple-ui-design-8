import React, { useState } from 'react';
import { Play, Pause, ExternalLink } from 'lucide-react';

export default function CatalogSection() {
  const [activePlayId, setActivePlayId] = useState(null);

  const catalogItems = [
    {
      id: 1,
      title: "All Music Is Black Music",
      publisher: "Smithsonian Folkways",
      description: "Exploring the roots and branches of Black music history and global impact.",
      tag: "Apple Podcasts Original",
      bgGradient: "from-amber-600 via-rose-700 to-emerald-800",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop&q=80",
      accent: "#f59e0b"
    },
    {
      id: 2,
      title: "Marvel's Black Widow",
      publisher: "Marvel & SiriusXM",
      description: "An audio thriller tracing Natasha Romanoff's untold covert missions.",
      tag: "Action & Drama",
      bgGradient: "from-red-950 via-neutral-900 to-black",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&h=400&fit=crop&q=80",
      accent: "#ef4444"
    },
    {
      id: 3,
      title: "Something Was Wrong",
      publisher: "Audiochuck",
      description: "An iris-widening docuseries about toxic relationships and deception.",
      tag: "True Crime",
      bgGradient: "from-red-800 via-red-900 to-stone-900",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop&q=80",
      accent: "#dc2626"
    },
    {
      id: 4,
      title: "SmartLess",
      publisher: "Wondery",
      description: "Jason Bateman, Sean Hayes, and Will Arnett in spontaneous conversation.",
      tag: "Comedy & Society",
      bgGradient: "from-sky-900 via-slate-900 to-indigo-950",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop&q=80",
      accent: "#38bdf8"
    },
    {
      id: 5,
      title: "At Least Things",
      publisher: "Atmospheric Cinema",
      description: "Audio documentaries capturing eerie nights, long roads, and solitude.",
      tag: "Documentary",
      bgGradient: "from-teal-950 via-slate-900 to-zinc-900",
      image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=600&h=400&fit=crop&q=80",
      accent: "#2dd4bf"
    },
    {
      id: 6,
      title: "Merry Laughs",
      publisher: "Standup Stories",
      description: "The funniest routines and untold backstage triumphs of classic comedians.",
      tag: "Comedy",
      bgGradient: "from-amber-700 via-orange-800 to-stone-900",
      image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=600&h=400&fit=crop&q=80",
      accent: "#f97316"
    }
  ];

  const togglePlay = (id) => {
    setActivePlayId(activePlayId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Title and Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            A catalog that creates{' '}
            <span className="purple-bright-gradient">dialogue.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed">
            Apple Podcasts is the premier destination for finding, listening to, and discovering the world's most compelling stories. With millions of shows from top creators, independent voices, and trusted news sources, there's always something new to explore.
          </p>
        </div>

        {/* 2-Row Grid matching Figma layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {catalogItems.map((item) => {
            const isItemPlaying = activePlayId === item.id;
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-[#1d1d1f] flex flex-col justify-end aspect-[16/10] sm:aspect-[16/11]"
              >
                {/* Background image & gradient overlay */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent`}></div>

                {/* Card Content */}
                <div className="relative z-10 p-6 flex flex-col justify-end text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300 mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1 drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 mb-4 font-normal">
                    {item.description}
                  </p>

                  {/* Action row with "Listen now" white pill button */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => togglePlay(item.id)}
                      className="bg-white/95 hover:bg-white text-gray-900 hover:text-black px-4 py-2 rounded-full text-xs font-semibold flex items-center space-x-2 shadow-sm transition-all duration-200 transform active:scale-95"
                    >
                      {isItemPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-current" />
                          <span>Playing Preview</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          <span>Listen now</span>
                        </>
                      )}
                    </button>

                    {isItemPlaying && (
                      <div className="flex items-center space-x-1">
                        <span className="w-1 h-3 bg-purple-400 rounded-full animate-bounce"></span>
                        <span className="w-1 h-5 bg-purple-300 rounded-full animate-pulse"></span>
                        <span className="w-1 h-2 bg-purple-400 rounded-full animate-bounce"></span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
