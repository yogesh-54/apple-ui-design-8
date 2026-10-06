import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatementSection from './components/StatementSection';
import CatalogSection from './components/CatalogSection';
import CurationSection from './components/CurationSection';
import EverywhereSection from './components/EverywhereSection';
import FaqSection from './components/FaqSection';
import CreatorsSection from './components/CreatorsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] flex flex-col font-sans selection:bg-purple-200 selection:text-purple-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Big Bold Typography Statement */}
        <StatementSection />

        {/* A Catalog that Creates Dialogue */}
        <CatalogSection />

        {/* Curation & Feature Cards */}
        <CurationSection />

        {/* Stories that go everywhere (Device Switcher) */}
        <EverywhereSection />

        {/* Questions? Answers. (FAQ) */}
        <FaqSection />

        {/* Working with Apple Podcasts */}
        <CreatorsSection />
      </main>

      {/* Apple Global Footer */}
      <Footer />
    </div>
  );
}
