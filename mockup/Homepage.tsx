import React, { useState } from 'react';
import { 
  Menu, X, Music, Calendar, User, Info, 
  MessageCircle, Heart, ShoppingBag, 
  Headphones, ArrowRight, Play, Volume2
} from 'lucide-react';

const HomepageMockup = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative mx-auto h-[844px] w-[390px] overflow-hidden bg-black text-white font-sans">
      {/* Gradient background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 z-0">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.7),rgba(0,0,0,0))] animate-pulse"></div>
      </div>
      
      {/* Content container with subtle padding */}
      <div className="relative z-10 h-full overflow-hidden flex flex-col">
        {/* Header with floating effect */}
        <header className="px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">EMC</h1>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Main content area with subtle scroll effect */}
        <main className="flex-1 overflow-hidden px-6 py-6 space-y-8">
          {/* Hero section with animated gradient */}
          <section className="relative h-[260px] rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-blue-800 opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-2">
              <p className="text-sm uppercase tracking-wider text-purple-200 font-medium">Featured Event</p>
              <h2 className="text-2xl font-bold">Electronic Music Summit</h2>
              <p className="text-sm text-white/80">June 15, 2025 • Cork City Hall</p>
              <button className="mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full py-2 px-6 text-sm flex items-center w-fit space-x-2 group transition-all">
                <span>Get Tickets</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </section>

          {/* Featured music section */}
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Featured Artists</h3>
              <button className="text-sm text-purple-400 flex items-center space-x-1">
                <span>View all</span>
                <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex-shrink-0 w-[120px] group">
                  <div className="h-[120px] rounded-xl bg-gradient-to-br from-purple-700/40 to-blue-700/40 mb-2 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                        <Play size={20} fill="white" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-medium truncate">Artist Name</p>
                  <p className="text-xs text-white/60 truncate">Genre • Track</p>
                </div>
              ))}
            </div>
          </section>

          {/* News and Updates */}
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Latest News</h3>
              <button className="text-sm text-purple-400 flex items-center space-x-1">
                <span>More</span>
                <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="space-y-4">
              {[1, 2].map((item) => (
                <div key={item} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 space-y-2">
                  <p className="text-xs text-purple-300">May {10 + item}, 2025</p>
                  <h4 className="text-base font-medium">Cork Electronic Music Festival Lineup Announced</h4>
                  <p className="text-sm text-white/70 line-clamp-2">The biggest electronic music festival in Ireland returns with over 50 artists across 5 stages...</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Navigation bar with interactive effects */}
        <nav className="px-6 py-4 backdrop-blur-md bg-black/50 border-t border-white/10">
          <div className="flex justify-between items-center">
            {[
              { icon: <Music size={20} />, label: "Discover" },
              { icon: <Calendar size={20} />, label: "Events" },
              { icon: <ShoppingBag size={20} />, label: "Merch" },
              { icon: <MessageCircle size={20} />, label: "Community" },
              { icon: <User size={20} />, label: "Profile" }
            ].map((item, index) => (
              <button 
                key={index} 
                className={`flex flex-col items-center space-y-1 opacity-${index === 0 ? '100' : '60'} hover:opacity-100 transition-opacity`}
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile menu overlay with animation */}
        {menuOpen && (
          <div className="absolute inset-0 z-50 bg-black/95 backdrop-blur-md animate-fade-in">
            <div className="h-full flex flex-col">
              <div className="px-6 py-4 flex justify-between items-center border-b border-white/10">
                <h1 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">EMC</h1>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 px-6 py-8 space-y-6">
                {[
                  { icon: <Music size={24} />, label: "Discover" },
                  { icon: <Calendar size={24} />, label: "Events" },
                  { icon: <Info size={24} />, label: "About" },
                  { icon: <Headphones size={24} />, label: "Artists" },
                  { icon: <ShoppingBag size={24} />, label: "Merchandise" },
                  { icon: <MessageCircle size={24} />, label: "Community" },
                  { icon: <Volume2 size={24} />, label: "Resources" },
                  { icon: <User size={24} />, label: "Profile" }
                ].map((item, index) => (
                  <button 
                    key={index} 
                    className="w-full flex items-center space-x-4 py-4 hover:bg-white/5 rounded-lg px-4 transition-colors"
                  >
                    <div className="p-2 rounded-full bg-white/10">
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
              
              <div className="px-6 py-4 border-t border-white/10">
                <div className="flex items-center space-x-4 py-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                  <div>
                    <p className="font-medium">Guest User</p>
                    <p className="text-sm text-white/60">Sign up or login</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Currently playing mini-player */}
        <div className="absolute bottom-24 left-0 right-0 mx-6 p-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 flex items-center space-x-3">
          <div className="h-10 w-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-md flex-shrink-0"></div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium truncate">Ambient Electronic Mix</p>
            <p className="text-xs text-white/60 truncate">EMC Radio</p>
          </div>
          <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
            <Play size={18} fill="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomepageMockup;

// This would be in your global CSS
/*
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}
*/
