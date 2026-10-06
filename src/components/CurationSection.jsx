import React, { useState } from 'react';
import { Play, Pause, Check, Sparkles, Mic, Headphones, ArrowRight, Star } from 'lucide-react';

export default function CurationSection() {
  const [playingEpisode, setPlayingEpisode] = useState(1);
  const [siriPrompt, setSiriPrompt] = useState("Hey Siri, play SmartLess");

  const upNextEpisodes = [
    {
      id: 1,
      show: "A Slight Change of Plans",
      host: "Dr. Maya Shankar",
      title: "How to Build Unshakeable Resilience",
      duration: "44 min",
      timeAgo: "New • Today",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&h=200&fit=crop&crop=faces&q=80"
    },
    {
      id: 2,
      show: "The Daily",
      host: "The New York Times",
      title: "Inside the AI Revolution: What Changes Next",
      duration: "26 min",
      timeAgo: "Yesterday",
      image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=200&h=200&fit=crop&q=80"
    },
    {
      id: 3,
      show: "Hard Fork",
      host: "Kevin Roose & Casey Newton",
      title: "Silicon Valley's Boldest New Bet",
      duration: "52 min",
      timeAgo: "Oct 2",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop&q=80"
    }
  ];

  const subscriptionChannels = [
    { name: "Wondery+", benefit: "Ad-free & 1 week early", logoBg: "bg-red-600" },
    { name: "Pushkin+", benefit: "Exclusive bonus interviews", logoBg: "bg-yellow-500" },
    { name: "The Athletic", benefit: "Live analysis & insider notes", logoBg: "bg-black" },
    { name: "Luminary", benefit: "Original audio drama series", logoBg: "bg-purple-900" },
  ];

  const siriCommands = [
    "Hey Siri, play SmartLess",
    "Hey Siri, skip 30 seconds",
    "Hey Siri, play the latest episode of The Daily",
    "Hey Siri, find podcasts about astronomy"
  ];

  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight purple-bright-gradient mb-4">
            Curation
          </h2>
          <p className="text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed">
            Find shows that match your interests or broaden your horizons with selections chosen by our team of global editors.
          </p>
        </div>

        {/* Feature Card 1: Personalized discovery */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-apple-card mb-10 border border-gray-100 transition-all duration-300 hover:shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Editorial & Algorithm
              </span>
              <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-tight">
                Personalized<br />
                <span className="purple-bright-gradient">discovery.</span>
              </h3>
              <p className="text-[#6e6e73] text-base sm:text-lg leading-relaxed">
                The Listen Now tab makes it easy to pick up where you left off and discover new shows based on what you already love. Up Next keeps your queue organized and synchronized across your iPhone, iPad, Mac, and Apple Watch.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-gray-700">
                <div className="flex items-center space-x-2 bg-gray-50 px-3.5 py-2 rounded-xl border border-gray-100">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>Tailored to your taste</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-50 px-3.5 py-2 rounded-xl border border-gray-100">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Cross-device sync</span>
                </div>
              </div>
            </div>

            {/* Right Column: Up Next UI Mockup */}
            <div className="lg:col-span-6 bg-[#fbfbfd] rounded-2xl p-6 border border-gray-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                <span className="text-sm font-bold text-gray-900 tracking-tight">Up Next in Queue</span>
                <span className="text-xs text-purple-600 font-semibold cursor-pointer hover:underline">See All</span>
              </div>

              <div className="space-y-3">
                {upNextEpisodes.map((ep) => {
                  const isCurrent = playingEpisode === ep.id;
                  return (
                    <div
                      key={ep.id}
                      onClick={() => setPlayingEpisode(ep.id)}
                      className={`group p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isCurrent
                          ? 'bg-purple-50/70 border-purple-300 shadow-sm'
                          : 'bg-white border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3.5">
                        <img
                          src={ep.image}
                          alt={ep.show}
                          className="w-12 h-12 rounded-lg object-cover shadow-sm"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[11px] font-semibold text-purple-700">{ep.show}</span>
                            <span className="text-[10px] text-gray-400">• {ep.timeAgo}</span>
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug line-clamp-1">
                            {ep.title}
                          </h4>
                          <span className="text-[10px] text-gray-500 font-medium">{ep.duration} remaining</span>
                        </div>
                      </div>

                      <button
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                          isCurrent
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-gray-100 group-hover:bg-purple-600 text-gray-700 group-hover:text-white'
                        }`}
                      >
                        {isCurrent ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Feature Card 2: Dive deeper with subscriptions */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-apple-card mb-10 border border-gray-100 transition-all duration-300 hover:shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Subscriptions Channels showcase */}
            <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subscriptionChannels.map((chan, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-gray-200/80 bg-[#fbfbfd] hover:border-purple-300 transition-all hover:shadow-md group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                      {chan.name}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                      Subscriber
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium mb-3">{chan.benefit}</p>
                  <div className="flex items-center text-[11px] font-semibold text-purple-700 group-hover:translate-x-1 transition-transform">
                    <span>Explore channel</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Premium Listening
              </span>
              <h3 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-tight">
                Dive deeper with<br />
                <span className="purple-bright-gradient">subscriptions.</span>
              </h3>
              <p className="text-[#6e6e73] text-base sm:text-lg leading-relaxed">
                With Apple Podcasts Subscriptions, unlock new premium experiences — including ad-free listening, early access to new series, and subscriber-only bonus episodes from your favorite creators. All seamlessly billed through your Apple ID with Family Sharing included.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2.5">
                {["Ad-free listening", "Early access", "Subscriber-only channels", "Bonus episodes", "Family Sharing"].map((pill, i) => (
                  <span key={i} className="text-xs font-medium text-gray-800 bg-[#f0f0f4] px-3.5 py-1.5 rounded-full">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Feature Card 3: Hey Siri, play my podcasts */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-apple-card border border-gray-100 text-center relative overflow-hidden transition-all duration-300 hover:shadow-xl">
          {/* Subtle gradient glow in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto relative z-10 space-y-6">
            <h3 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              <span className="purple-bright-gradient">Hey Siri,</span>{' '}
              <span className="text-[#1d1d1f]">play my podcasts.</span>
            </h3>
            
            <p className="text-[#6e6e73] text-base sm:text-lg leading-relaxed">
              Just ask Siri to resume your favorite show, skip ahead, play the latest episode of The Daily, or find podcasts about science, history, and true crime across any Apple device.
            </p>

            {/* Glowing Siri Orb & Active Prompt */}
            <div className="pt-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 p-1 shadow-lg shadow-purple-500/30 animate-pulse flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center text-white">
                  <Mic className="w-6 h-6 text-purple-300" />
                </div>
              </div>

              {/* Interactive prompt pills */}
              <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-lg">
                {siriCommands.map((cmd, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSiriPrompt(cmd)}
                    className={`text-xs px-3.5 py-2 rounded-full border transition-all ${
                      siriPrompt === cmd
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200'
                    }`}
                  >
                    "{cmd}"
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
