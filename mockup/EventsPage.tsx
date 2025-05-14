import React, { useState } from 'react';
import { 
  Menu, X, Calendar, Filter, MapPin, 
  Clock, ArrowRight, ChevronLeft, ChevronRight,
  Heart, Share2, Bookmark, Music
} from 'lucide-react';

const EventsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const currentMonth = "May 2025";

  // Sample event data
  const events = [
    {
      id: 1,
      title: "Electronic Music Summit",
      date: "May 15, 2025",
      time: "7:00 PM - 2:00 AM",
      location: "Cork City Hall",
      image: "event1.jpg",
      tags: ["Festival", "Live Performance"],
      featured: true
    },
    {
      id: 2,
      title: "Ambient Sound Journey",
      date: "May 18, 2025",
      time: "8:00 PM - 11:00 PM",
      location: "The Roundy",
      image: "event2.jpg",
      tags: ["Ambient", "Experimental"],
      featured: false
    },
    {
      id: 3,
      title: "Electronic Production Workshop",
      date: "May 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Cork School of Music",
      image: "event3.jpg",
      tags: ["Workshop", "Education"],
      featured: false
    },
    {
      id: 4,
      title: "DJ Showcase Night",
      date: "May 25, 2025",
      time: "9:00 PM - 3:00 AM",
      location: "Cyprus Avenue",
      image: "event4.jpg",
      tags: ["Club Night", "DJ Set"],
      featured: false
    }
  ];

  return (
    <div className="relative mx-auto h-[844px] w-[390px] overflow-hidden bg-black text-white font-sans">
      {/* Gradient background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 z-0">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.7),rgba(0,0,0,0))] animate-pulse"></div>
      </div>
      
      {/* Content container with subtle padding */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with back navigation */}
        <header className="px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold tracking-tighter">Events</h1>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors relative"
            >
              <Filter size={20} />
            </button>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>

        {/* Calendar navigation */}
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Calendar size={18} className="text-purple-400" />
            <span className="font-medium">{currentMonth}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-1 rounded-full hover:bg-white/10 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-1 rounded-full hover:bg-white/10 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Date selector pills */}
        <div className="px-6 pb-4">
          <div className="flex space-x-2 overflow-x-auto hide-scrollbar pb-2">
            {Array.from({ length: 10 }, (_, i) => i + 10).map((day) => (
              <button 
                key={day} 
                className={`flex-shrink-0 flex flex-col items-center py-2 px-4 rounded-full ${
                  day === 15 ? 'bg-purple-600' : 'bg-white/5 hover:bg-white/10'
                } transition-colors`}
              >
                <span className="text-xs text-white/60">May</span>
                <span className="text-sm font-medium">{day}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Event listings */}
        <div className="flex-1 overflow-y-auto hide-scrollbar px-6 pb-24">
          <div className="space-y-1 mb-6">
            <h3 className="text-lg font-bold">Featured Event</h3>
            <p className="text-sm text-white/60">Don't miss this special event</p>
          </div>

          {/* Featured event card */}
          {events.filter(e => e.featured).map(event => (
            <div key={event.id} className="mb-8">
              <div className="relative h-[200px] rounded-2xl overflow-hidden group mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-blue-800 opacity-80"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <span className="bg-white/20 backdrop-blur-sm text-xs py-1 px-3 rounded-full">Featured</span>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
                        <Heart size={16} />
                      </button>
                      <button className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} className="text-purple-300" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={14} className="text-purple-300" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={14} className="text-purple-300" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-white/10 hover:bg-white/20 py-3 rounded-xl font-medium transition-colors">
                Get Tickets
              </button>
            </div>
          ))}

          <div className="space-y-1 mb-6">
            <h3 className="text-lg font-bold">Upcoming Events</h3>
            <p className="text-sm text-white/60">Discover electronic music events in Cork</p>
          </div>

          {/* Regular event cards */}
          <div className="space-y-4">
            {events.filter(e => !e.featured).map(event => (
              <div 
                key={event.id} 
                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex space-x-4"
              >
                <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-purple-700/60 to-blue-700/60 flex-shrink-0 flex items-center justify-center">
                  <Music size={24} className="text-white/80" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{event.title}</h4>
                  <div className="flex items-center space-x-2 text-xs text-white/60 mt-1">
                    <Calendar size={12} />
                    <span>{event.date}</span>
                    <span>•</span>
                    <MapPin size={12} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    {event.tags.map((tag, index) => (
                      <span key={index} className="text-xs py-0.5 px-2 rounded-full bg-white/10 text-purple-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="self-center p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation bar with interactive effects */}
        <nav className="absolute bottom-0 left-0 right-0 px-6 py-4 backdrop-blur-md bg-black/70 border-t border-white/10">
          <div className="flex justify-between items-center">
            {[
              { icon: <Music size={20} />, label: "Discover" },
              { icon: <Calendar size={20} />, label: "Events", active: true },
              { icon: <Bookmark size={20} />, label: "Saved" },
              { icon: <User size={20} />, label: "Profile" }
            ].map((item, index) => (
              <button 
                key={index} 
                className={`flex flex-col items-center space-y-1 ${item.active ? 'text-purple-400' : 'text-white/60 hover:text-white transition-colors'}`}
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Filter overlay with animation */}
        {filterOpen && (
          <div className="absolute inset-0 z-40 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="h-full flex flex-col">
              <div className="px-6 py-4 flex justify-between items-center border-b border-white/10">
                <h2 className="text-xl font-bold">Filter Events</h2>
                <button 
                  onClick={() => setFilterOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 px-6 py-6 space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <h3 className="font-medium">Event Type</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['Festival', 'Workshop', 'Conference', 'Performance', 'Club Night', 'Exhibition'].map((type, index) => (
                      <button 
                        key={index}
                        className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-sm transition-colors border border-white/10"
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Date Range</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['Today', 'Tomorrow', 'This Week', 'This Month', 'Custom'].map((date, index) => (
                      <button 
                        key={index}
                        className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-sm transition-colors border border-white/10"
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Location</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['Cork City', 'County Cork', 'Online', 'Dublin'].map((location, index) => (
                      <button 
                        key={index}
                        className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-sm transition-colors border border-white/10"
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-white/10 space-y-3">
                <button className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 font-medium transition-colors">
                  Apply Filters
                </button>
                <button className="w-full py-3 rounded-xl bg-transparent hover:bg-white/5 font-medium transition-colors">
                  Reset All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;
