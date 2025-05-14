import React from 'react';
import { useState } from 'react';
import HomepageMockup from './Homepage';
import EventsPage from './EventsPage';
import MerchPage from './MerchPage';

const MockupViewer = () => {
  const [activeMockup, setActiveMockup] = useState('home');
  
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">EMC Website Mockups</h1>
          <p className="text-gray-400 max-w-2xl">
            Modern mobile-first UI mockups for the Electronic Music Council website. The designs follow principles of bold simplicity, strategic whitespace, and intuitive navigation.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <button 
            onClick={() => setActiveMockup('home')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeMockup === 'home' ? 'bg-purple-600' : 'bg-white/10 hover:bg-white/20'}`}
          >
            Homepage
          </button>
          <button 
            onClick={() => setActiveMockup('events')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeMockup === 'events' ? 'bg-purple-600' : 'bg-white/10 hover:bg-white/20'}`}
          >
            Events
          </button>
          <button 
            onClick={() => setActiveMockup('merchandise')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeMockup === 'merchandise' ? 'bg-purple-600' : 'bg-white/10 hover:bg-white/20'}`}
          >
            Merchandise
          </button>
        </div>
        
        <div className="flex justify-center">
          <div className="relative border-8 border-gray-800 rounded-3xl shadow-2xl">
            {activeMockup === 'home' && <HomepageMockup />}
            {activeMockup === 'events' && <EventsPage />}
            {activeMockup === 'merchandise' && <MerchPage />}
            
            {/* Phone frame details */}
            <div className="absolute -top-1 inset-x-0 h-6 bg-gray-800 rounded-t-xl"></div>
            <div className="absolute top-2 inset-x-0 flex justify-center">
              <div className="w-20 h-1 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Design Guidelines Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-3 text-purple-400">Visual Design</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Bold simplicity with intuitive navigation</li>
                <li>• Strategic negative space for content prioritization</li>
                <li>• Systematic color theory with gradients</li>
                <li>• Typography hierarchy for information architecture</li>
                <li>• Visual density optimization for cognitive load management</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-3 text-purple-400">Interactive Elements</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Motion choreography for spatial continuity</li>
                <li>• Accessibility-driven contrast ratios</li>
                <li>• Feedback responsiveness via state transitions</li>
                <li>• Content-first layouts prioritizing user objectives</li>
                <li>• Consistent iconography with Lucide React icons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupViewer;
