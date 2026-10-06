import React from 'react';

export default function Footer() {
  const footerSections = [
    {
      title: "Shop and Learn",
      links: [
        "Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"
      ]
    },
    {
      title: "Apple Wallet & Account",
      links: [
        "Wallet", "Apple Card", "Apple Pay", "Apple Cash", "Manage Your Apple Account", "Apple Store Account", "iCloud.com"
      ]
    },
    {
      title: "Entertainment",
      links: [
        "Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"
      ]
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Trade In", "Ways to Buy", "Recycling Programme", "Order Status", "Shopping Help"
      ]
    },
    {
      title: "About Apple & Values",
      links: [
        "Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supply Chain", "Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"
      ]
    }
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-[11px] border-t border-gray-300/80 pt-10 pb-16">
      <div className="max-w-[1024px] mx-auto px-4">
        
        {/* Footnotes / fine print */}
        <div className="pb-8 space-y-2 border-b border-gray-300/80 leading-normal">
          <p>1. Subscription required for select premium podcast channels. Family Sharing requires up to six family members on an iCloud Family group.</p>
          <p>2. Some features and podcasts may not be available in all regions or languages. Requires compatible Apple hardware and latest operating system updates.</p>
        </div>

        {/* Directory columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8">
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="font-semibold text-[#1d1d1f] tracking-tight">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="hover:text-[#1d1d1f] hover:underline transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-6 border-t border-gray-300/80 flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 text-gray-500">
          <div>
            Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {["Privacy Policy", "Terms of Use", "Sales Policy", "Legal", "Site Map"].map((legal, idx) => (
              <a key={idx} href="#" className="hover:text-black hover:underline transition-colors">
                {legal}
              </a>
            ))}
          </div>

          <div className="text-gray-600 font-medium">
            United States
          </div>
        </div>

      </div>
    </footer>
  );
}
