import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ComparisonSection from './components/ComparisonSection';
import Footer from './components/Footer';
import DatasetPage from './components/DatasetPage';
import MotionNFTPage from './components/MotionNFTPage';
import ComparisonPage from './components/ComparisonPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'dataset':
        return <DatasetPage />;
      case 'motionnft':
        return <MotionNFTPage />;
      case 'comparisons':
        return <ComparisonPage />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Features />
            <ComparisonSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;