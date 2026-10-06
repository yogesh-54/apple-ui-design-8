import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Apple Podcasts?",
      answer: "Apple Podcasts is the premier platform for finding, listening to, and discovering podcasts. It comes pre-installed on all your Apple devices and offers millions of free shows, alongside premium subscription channels with ad-free listening and exclusive bonus content."
    },
    {
      question: "Where can I listen?",
      answer: "You can listen to Apple Podcasts on iPhone, iPad, Mac, Apple Watch, Apple TV, HomePod, in your car with CarPlay, on Windows with Apple Music/iTunes apps, or on any modern web browser by visiting podcasts.apple.com."
    },
    {
      question: "What does it cost?",
      answer: "Apple Podcasts is completely free to browse, download, and listen to millions of shows. Many creators also offer optional premium subscriptions for ad-free listening, early access, and bonus episodes, priced individually per channel or show."
    },
    {
      question: "Can I share my subscriptions and episodes?",
      answer: "Yes. When you purchase a podcast subscription, you can share it with up to five other family members automatically using Apple Family Sharing. You can also share individual episodes or shows with friends via Messages, Mail, or social apps."
    },
    {
      question: "Can I download and listen offline?",
      answer: "Absolutely. You can download any episode to your device for offline listening on flights, commutes, or workouts without requiring a Wi-Fi or cellular data connection."
    },
    {
      question: "How do I find a podcast?",
      answer: "You can discover shows through personalized recommendations in the Listen Now tab, curated editorial collections in Browse, Top Charts by category, or by searching for titles, topics, people, and keywords in the Search tab."
    },
    {
      question: "Is Apple Podcasts the same as iTunes?",
      answer: "Apple Podcasts evolved from the original podcast directory within iTunes into its own dedicated, standalone app and streaming service with enhanced audio quality, synchronized transcripts, and seamless iCloud continuity across all your modern Apple devices."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#f5f5f7]">
      <div className="max-w-[820px] mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1d1d1f] text-center mb-16">
          Questions? Answers.
        </h2>

        {/* Accordion list */}
        <div className="divide-y divide-gray-300/80 border-t border-b border-gray-300/80">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5 transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-semibold text-[#1d1d1f] group-hover:text-purple-700 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-out flex-shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-purple-600' : 'group-hover:text-gray-900'
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed pr-6">
                      {faq.answer}
                    </p>
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
