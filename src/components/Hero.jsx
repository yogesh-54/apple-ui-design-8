import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Volume2, Wifi, Battery, Share2, MoreHorizontal, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(860); // 14:20
  const duration = 2590; // 43:10

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev < duration ? prev + 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = (currentTime / duration) * 100;

  // Floating podcast covers surrounding the iPhone
  const leftPodcasts = [
    {
      title: "REFILE",
      subtitle: "Investigative Journalism",
      color: "bg-[#111827]",
      accent: "text-blue-400",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300&h=300&fit=crop&crop=faces&q=80",
      tag: "True Crime"
    },
    {
      title: "SWEET BOBBY",
      subtitle: "A Catfish Nightmare",
      color: "bg-[#fbbf24]",
      accent: "text-[#1f2937]",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces&q=80",
      tag: "Docuseries"
    },
    {
      title: "CRIME SHOW",
      subtitle: "The Stories Behind",
      color: "bg-[#3b82f6]",
      accent: "text-white",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces&q=80",
      tag: "Mystery"
    },
    {
      title: "NIGHT TALK",
      subtitle: "Neon Stories",
      color: "bg-[#4c1d95]",
      accent: "text-purple-300",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop&crop=faces&q=80",
      tag: "Culture"
    }
  ];

  const rightPodcasts = [
    {
      title: "WORTH NOTING",
      subtitle: "Design & Ideas",
      color: "bg-[#fef08a]",
      accent: "text-[#854d0e]",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300&h=300&fit=crop&q=80",
      tag: "Design"
    },
    {
      title: "WE CAN DO HARD THINGS",
      subtitle: "Glennon Doyle",
      color: "bg-[#f43f5e]",
      accent: "text-white",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces&q=80",
      tag: "Self-Help"
    },
    {
      title: "EAR HUSTLE",
      subtitle: "San Quentin Prison",
      color: "bg-[#18181b]",
      accent: "text-yellow-400",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces&q=80",
      tag: "Society"
    },
    {
      title: "MLK TAPES",
      subtitle: "Historical Audio",
      color: "bg-[#451a03]",
      accent: "text-amber-300",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&h=300&fit=crop&crop=faces&q=80",
      tag: "History"
    }
  ];

  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden bg-[#f5f5f7]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-200/40 via-purple-100/30 to-pink-100/20 blur-3xl pointer-events-none -z-10 rounded-full"></div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top Apple Podcasts Logo */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#c084fc] via-[#9333ea] to-[#6b21a8] p-0.5 shadow-xl shadow-purple-500/20 mb-8 transform transition hover:scale-105 duration-300">
            <div className="w-full h-full rounded-[14px] bg-gradient-to-b from-[#a855f7] to-[#7e22ce] flex items-center justify-center relative overflow-hidden">
              {/* Concentric rings like official Apple Podcasts icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border-[2.5px] border-white/20"></div>
                <div className="w-10 h-10 rounded-full border-[2px] border-white/30 absolute"></div>
              </div>
              <svg className="w-8 h-8 text-white relative z-10 drop-shadow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" x2="12" y1="19" y2="22"/>
              </svg>
            </div>
          </div>

          {/* Headline - Exact 3-line statement from Figma */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] max-w-4xl leading-[1.08] mb-12 sm:mb-16">
            Millions of shows.<br />
            More ways to listen.<br />
            People are talking.
          </h1>
        </div>

        {/* Centerpiece: iPhone with surrounding podcast tiles */}
        <div className="relative max-w-[1100px] mx-auto mt-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-items-center">

            {/* Left Floating Podcast Artwork Column */}
            <div className="hidden lg:grid grid-cols-2 gap-4 col-span-4 w-full">
              {leftPodcasts.map((pod, idx) => (
                <div
                  key={idx}
                  className={`group relative aspect-square rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${idx % 2 === 0 ? '-translate-y-3' : 'translate-y-3'}`}
                >
                  <img
                    src={pod.image}
                    alt={pod.title}
                    className="w-full h-full object-cover group-hover:brightness-95 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end text-white">
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-purple-300">
                      {pod.tag}
                    </span>
                    <h2 className="text-xs font-bold leading-snug line-clamp-1">{pod.title}</h2>
                    <p className="text-[10px] text-gray-300 line-clamp-1">{pod.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center iPhone Mockup */}
            <div className="col-span-12 lg:col-span-4 flex justify-center w-full">
              <div className="w-[300px] sm:w-[325px] bg-[#000000] p-3 rounded-[50px] shadow-apple-phone border-[5px] border-[#38383a] relative ring-1 ring-black/10">
                {/* iPhone screen container */}
                <div className="bg-[#fbfbfd] rounded-[40px] overflow-hidden flex flex-col h-[640px] relative text-[#1d1d1f] shadow-inner select-none">
                  
                  {/* Status Bar */}
                  <div className="pt-3 px-6 pb-2 flex justify-between items-center text-[13px] font-semibold tracking-tight text-gray-900 z-20">
                    <span>9:41</span>
                    {/* Dynamic Island */}
                    <div className="w-24 h-6 bg-black rounded-full flex items-center justify-end px-2 space-x-1.5 shadow-sm">
                      {isPlaying && (
                        <div className="flex items-center space-x-0.5 mr-auto pl-1">
                          <span className="w-1 h-2.5 bg-purple-500 rounded-full animate-pulse"></span>
                          <span className="w-1 h-3.5 bg-purple-400 rounded-full animate-bounce"></span>
                          <span className="w-1 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                        </div>
                      )}
                      <div className="w-2.5 h-2.5 rounded-full bg-[#1e293b]"></div>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-800">
                      <Wifi className="w-3.5 h-3.5" />
                      <Battery className="w-4 h-4 fill-current" />
                    </div>
                  </div>

                  {/* App Screen Content: Apple Podcasts Show View */}
                  <div className="flex-1 px-5 pt-1 pb-4 flex flex-col justify-between overflow-y-auto no-scrollbar">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="font-semibold text-purple-700 tracking-wide text-[11px] uppercase">
                        Listen Now
                      </span>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Share2 className="w-3.5 h-3.5" />
                        <MoreHorizontal className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Show Artwork - Yellow Post-it "A Slight Change of Plans" */}
                    <div className="mt-2 relative rounded-2xl overflow-hidden shadow-md aspect-square bg-gradient-to-br from-teal-400 via-teal-500 to-emerald-600 p-4 flex flex-col justify-center items-center text-center">
                      <div className="w-36 h-36 bg-[#fde047] rotate-[-2deg] rounded-md shadow-lg p-3 flex flex-col justify-center items-center text-gray-900 border border-yellow-400/80">
                        <span className="text-[10px] font-black uppercase tracking-wider text-gray-700">
                          DR. MAYA SHANKAR
                        </span>
                        <p className="text-sm font-black leading-tight mt-1 text-[#111827]">
                          A SLIGHT<br />CHANGE<br />OF PLANS
                        </p>
                        <span className="text-[8px] font-semibold text-gray-600 mt-1">
                          PUSH KIN
                        </span>
                      </div>
                      
                      {/* Subscriptions Pill */}
                      <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white text-[9px] font-semibold px-2 py-0.5 rounded-full flex items-center space-x-1">
                        <CheckCircle2 className="w-2.5 h-2.5 text-purple-400" />
                        <span>Subscribed</span>
                      </div>
                    </div>

                    {/* Show Metadata */}
                    <div className="mt-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wider">
                          Latest Episode
                        </span>
                        <span className="text-[10px] text-gray-400">Oct 4</span>
                      </div>
                      <h2 className="text-base font-bold text-[#1d1d1f] leading-snug mt-0.5">
                        Navigating Life's Pivot Moments
                      </h2>
                      <p className="text-xs text-gray-500 font-medium">
                        A Slight Change of Plans
                      </p>
                    </div>

                    {/* Interactive Audio Player Controls */}
                    <div className="mt-2 bg-[#f0f0f4] rounded-2xl p-3 border border-gray-200/80 shadow-sm">
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-300 h-1.5 rounded-full overflow-hidden relative cursor-pointer">
                        <div
                          className="bg-purple-600 h-full rounded-full transition-all duration-300"
                          style={{ width: `${progressPercent}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[10px] font-semibold text-gray-500 mt-1.5">
                        <span>{formatTime(currentTime)}</span>
                        <span>-{formatTime(duration - currentTime)}</span>
                      </div>

                      {/* Playback Buttons */}
                      <div className="flex items-center justify-between px-3 mt-1">
                        <button
                          onClick={() => setCurrentTime((t) => Math.max(0, t - 15))}
                          className="text-gray-700 hover:text-black transition"
                          title="Rewind 15s"
                        >
                          <RotateCcw className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center shadow-md transition transform active:scale-95"
                          title={isPlaying ? "Pause" : "Play"}
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5 fill-current" />
                          ) : (
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          )}
                        </button>

                        <button
                          onClick={() => setCurrentTime((t) => Math.min(duration, t + 30))}
                          className="text-gray-700 hover:text-black transition"
                          title="Skip 30s"
                        >
                          <RotateCw className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Volume & Audio Output */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-200/60 text-gray-500 text-[10px]">
                        <div className="flex items-center space-x-1.5">
                          <Volume2 className="w-3.5 h-3.5" />
                          <div className="w-16 bg-gray-300 h-1 rounded-full overflow-hidden">
                            <div className="w-3/4 bg-gray-600 h-full rounded-full"></div>
                          </div>
                        </div>
                        <span className="font-medium text-purple-700">AirPods Pro</span>
                      </div>
                    </div>

                    {/* Bottom Tab Bar */}
                    <div className="pt-2 border-t border-gray-200 flex justify-around text-gray-400 text-[9px] font-medium">
                      <div className="flex flex-col items-center text-purple-600">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5v-9l6 4.5z"/></svg>
                        <span>Listen Now</span>
                      </div>
                      <div className="flex flex-col items-center hover:text-gray-700">
                        <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                        <span>Browse</span>
                      </div>
                      <div className="flex flex-col items-center hover:text-gray-700">
                        <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
                        <span>Top Charts</span>
                      </div>
                      <div className="flex flex-col items-center hover:text-gray-700">
                        <svg className="w-4 h-4 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                        <span>Search</span>
                      </div>
                    </div>

                  </div>

                  {/* Home Indicator bar */}
                  <div className="w-32 h-1 bg-black/60 rounded-full mx-auto mb-2"></div>
                </div>
              </div>
            </div>

            {/* Right Floating Podcast Artwork Column */}
            <div className="hidden lg:grid grid-cols-2 gap-4 col-span-4 w-full">
              {rightPodcasts.map((pod, idx) => (
                <div
                  key={idx}
                  className={`group relative aspect-square rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${idx % 2 === 0 ? 'translate-y-3' : '-translate-y-3'}`}
                >
                  <img
                    src={pod.image}
                    alt={pod.title}
                    className="w-full h-full object-cover group-hover:brightness-95 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end text-white">
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-purple-300">
                      {pod.tag}
                    </span>
                    <h2 className="text-xs font-bold leading-snug line-clamp-1">{pod.title}</h2>
                    <p className="text-[10px] text-gray-300 line-clamp-1">{pod.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
