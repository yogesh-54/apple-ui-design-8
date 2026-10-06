import React, { useState } from 'react';
import { Smartphone, Tablet, Watch, Laptop, Tv, Car, Speaker, Globe } from 'lucide-react';

export default function EverywhereSection() {
  const [activeDevice, setActiveDevice] = useState('watch');

  const devices = [
    {
      id: 'iphone',
      name: 'iPhone',
      icon: Smartphone,
      subtitle: 'Carry millions of episodes right in your pocket.',
      badge: 'Interactive Dynamic Island & Lock Screen widget',
      details: 'Sync your listening queue seamlessly with offline downloads automatically queued via Wi-Fi.'
    },
    {
      id: 'ipad',
      name: 'iPad',
      icon: Tablet,
      subtitle: 'Rich widescreen layout with split views and transcripts.',
      badge: 'Interactive Synchronized Audio Transcripts',
      details: 'Read along word-for-word with real-time synchronized transcripts and tap any sentence to jump to that moment.'
    },
    {
      id: 'watch',
      name: 'Apple Watch',
      icon: Watch,
      subtitle: 'Stream over cellular or download for phone-free workouts.',
      badge: 'Phone-free Cellular Streaming',
      details: 'Connect AirPods directly to Apple Watch and listen on your outdoor run with effortless Digital Crown volume control.'
    },
    {
      id: 'mac',
      name: 'Mac',
      icon: Laptop,
      subtitle: 'Work and listen with dedicated keyboard media controls.',
      badge: 'Spatial Audio with Head Tracking',
      details: 'Enjoy immersive Spatial Audio while organizing your library into smart custom stations.'
    },
    {
      id: 'appletv',
      name: 'Apple TV',
      icon: Tv,
      subtitle: 'Turn your living room into an auditorium.',
      badge: 'Dolby Atmos Audio on the Big Screen',
      details: 'Listen through your home theatre sound system with stunning full-screen album art.'
    },
    {
      id: 'carplay',
      name: 'CarPlay',
      icon: Car,
      subtitle: 'Your commute soundtrack with large, driver-safe buttons.',
      badge: 'Hands-free Siri Control on the road',
      details: 'Browse your Up Next queue and newly downloaded episodes straight from your vehicle dashboard.'
    },
    {
      id: 'homepod',
      name: 'HomePod',
      icon: Speaker,
      subtitle: 'Room-filling sound with simple voice commands.',
      badge: 'Handoff Audio by bringing iPhone near',
      details: 'Simply bring your iPhone close to HomePod to hand off the podcast instantly without missing a beat.'
    },
    {
      id: 'web',
      name: 'Web',
      icon: Globe,
      subtitle: 'Listen on any browser at podcasts.apple.com.',
      badge: 'No installation required',
      details: 'Sign in with your Apple Account anywhere in the world and access all your saved subscriptions.'
    }
  ];

  const current = devices.find(d => d.id === activeDevice) || devices[2];

  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">
            Stories that go{' '}
            <span className="purple-bright-gradient">everywhere.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6e6e73] font-normal leading-relaxed">
            Apple Podcasts is built into your favorite Apple devices. So you can start listening on your morning walk with Apple Watch and pick right up in the car with CarPlay or on your Mac at your desk.
          </p>
        </div>

        {/* Device Switcher Tabs */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 py-3 mb-10 border-b border-gray-200">
          {devices.map((device) => {
            const Icon = device.icon;
            const isSelected = activeDevice === device.id;
            return (
              <button
                key={device.id}
                onClick={() => setActiveDevice(device.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{device.name}</span>
              </button>
            );
          })}
        </div>

        {/* Showcase Device Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-apple-card border border-gray-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: Device Information & Perks */}
          <div className="md:col-span-6 space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 inline-block">
              {current.badge}
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] tracking-tight">
              Apple Podcasts on {current.name}
            </h3>
            <p className="text-lg text-gray-800 font-medium leading-snug">
              {current.subtitle}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {current.details}
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs font-semibold text-purple-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>iCloud Continuity & AirPlay 2 Enabled</span>
            </div>
          </div>

          {/* Right: Realistic Device Visual Showcase */}
          <div className="md:col-span-6 flex justify-center items-center py-4">
            {activeDevice === 'watch' ? (
              /* Apple Watch Mockup */
              <div className="relative flex flex-col items-center">
                {/* Watch Strap Top */}
                <div className="w-24 h-12 bg-zinc-800 rounded-t-xl -mb-2 shadow-inner"></div>
                {/* Watch Case */}
                <div className="w-56 h-64 bg-zinc-900 rounded-[44px] p-3 shadow-2xl border-4 border-zinc-700 relative">
                  {/* Digital Crown */}
                  <div className="absolute right-[-10px] top-14 w-2.5 h-10 bg-zinc-600 rounded-r-md border-l border-zinc-800"></div>
                  {/* Side button */}
                  <div className="absolute right-[-8px] top-28 w-1.5 h-8 bg-zinc-600 rounded-r-sm"></div>

                  {/* Watch Screen */}
                  <div className="w-full h-full bg-black rounded-[34px] p-4 flex flex-col justify-between text-white overflow-hidden relative">
                    <div className="flex justify-between items-center text-[10px] text-purple-400 font-bold">
                      <span>9:41</span>
                      <span className="text-emerald-400">● Live</span>
                    </div>

                    <div className="text-center my-auto">
                      <div className="w-16 h-16 rounded-xl mx-auto mb-2 overflow-hidden shadow-md bg-yellow-400 flex items-center justify-center p-2 text-zinc-900 font-black text-[10px] leading-tight text-center">
                        A SLIGHT CHANGE OF PLANS
                      </div>
                      <p className="text-[11px] font-bold line-clamp-1">Dr. Maya Shankar</p>
                      <p className="text-[9px] text-gray-400">Pushkin</p>
                    </div>

                    {/* Mini audio bar */}
                    <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                      <div className="w-2/3 bg-purple-500 h-full rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* Watch Strap Bottom */}
                <div className="w-24 h-12 bg-zinc-800 rounded-b-xl -mt-2 shadow-inner"></div>
                <span className="mt-4 text-xs font-bold text-gray-700">Apple Watch Series 10</span>
              </div>
            ) : activeDevice === 'carplay' ? (
              /* CarPlay Display Mockup */
              <div className="w-full max-w-[420px] bg-zinc-900 rounded-2xl p-3 border-4 border-zinc-700 shadow-2xl">
                <div className="bg-black rounded-xl p-4 text-white">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs">
                    <span className="font-bold text-purple-400">CarPlay • Podcasts</span>
                    <span className="text-gray-400">10:14 AM</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3 items-center">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-purple-400">Now Playing</span>
                      <h4 className="text-sm font-bold">SmartLess</h4>
                      <p className="text-xs text-gray-400">Sean Hayes, Jason Bateman</p>
                      <div className="flex items-center space-x-2 pt-2">
                        <span className="text-xs bg-purple-600 px-3 py-1 rounded-full font-semibold">Pause</span>
                        <span className="text-xs text-gray-400">18:40</span>
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-tr from-sky-600 to-indigo-900 rounded-xl flex items-center justify-center font-bold text-center p-3 text-xs shadow-md">
                      SmartLess Exclusive
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Universal Apple Device Display Mockup */
              <div className="w-full max-w-[440px] bg-[#1d1d1f] rounded-2xl p-4 shadow-2xl border border-zinc-700 text-white">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs text-gray-400">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="font-semibold text-gray-300">Apple Podcasts for {current.name}</span>
                  <span className="text-[11px] text-purple-400 font-bold">Continuity Sync</span>
                </div>

                <div className="py-6 flex items-center space-x-5">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-center p-2 font-black text-xs shadow-lg">
                    PODCASTS APP
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">Synced Episode</span>
                    <h4 className="text-base font-bold text-white">Understanding the Universe</h4>
                    <p className="text-xs text-gray-400">Huberman Lab & Special Guests</p>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden mt-2">
                      <div className="w-1/2 bg-purple-500 h-full rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
