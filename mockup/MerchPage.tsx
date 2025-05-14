import React, { useState } from 'react';
import { 
  Menu, X, ShoppingBag, Search, Filter, 
  ArrowRight, ChevronDown, Heart, 
  Music, Calendar, MessageCircle, User
} from 'lucide-react';

const MerchPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample merchandise data
  const products = [
    {
      id: 1,
      name: "EMC Logo T-Shirt",
      price: "€25.00",
      category: "Clothing",
      image: "/images/tshirt.jpg",
      featured: true
    },
    {
      id: 2,
      name: "EMC Hoodie",
      price: "€45.00",
      category: "Clothing",
      image: "/images/hoodie.jpg",
      featured: false
    },
    {
      id: 3,
      name: "EMC Beanie",
      price: "€18.00",
      category: "Accessories",
      image: "/images/beanie.jpg",
      featured: false
    },
    {
      id: 4,
      name: "Cork Electronic Music Scene Poster",
      price: "€15.00",
      category: "Art",
      image: "/images/poster.jpg",
      featured: false
    },
    {
      id: 5,
      name: "EMC Tote Bag",
      price: "€12.00",
      category: "Accessories",
      image: "/images/tote.jpg",
      featured: false
    },
    {
      id: 6,
      name: "EMC Sticker Pack",
      price: "€5.00",
      category: "Accessories",
      image: "/images/stickers.jpg",
      featured: false
    }
  ];

  const categories = ['All', 'Clothing', 'Accessories', 'Art'];
  
  // Filter products based on active category
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="relative mx-auto h-[844px] w-[390px] overflow-hidden bg-black text-white font-sans">
      {/* Gradient background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 z-0">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.7),rgba(0,0,0,0))] animate-pulse"></div>
      </div>
      
      {/* Content container with subtle padding */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with floating effect */}
        <header className="px-6 py-4 backdrop-blur-md bg-black/30 border-b border-white/10 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter">Merchandise</h1>
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={() => setFilterOpen(!filterOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
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

        {/* Category pills */}
        <div className="px-6 py-4">
          <div className="flex space-x-2 overflow-x-auto hide-scrollbar pb-2">
            {categories.map((category) => (
              <button 
                key={category} 
                className={`flex-shrink-0 py-2 px-4 rounded-full transition-colors ${
                  activeCategory === category 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/5 hover:bg-white/10 text-white/70'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <span className="text-sm">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured product */}
        {activeCategory === 'All' && (
          <div className="px-6 pb-6">
            <div className="space-y-1 mb-4">
              <h3 className="text-lg font-bold">Featured</h3>
              <p className="text-sm text-white/60">Official EMC merchandise</p>
            </div>
            
            {products.filter(p => p.featured).map(product => (
              <div key={product.id} className="relative h-[180px] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-800/80 to-blue-800/80"></div>
                <div className="absolute inset-0 p-6 flex justify-between">
                  <div className="space-y-2 max-w-[60%]">
                    <span className="bg-white/20 backdrop-blur-sm text-xs py-1 px-3 rounded-full">New Arrival</span>
                    <h4 className="text-xl font-bold">{product.name}</h4>
                    <p className="text-sm text-white/80">100% organic cotton featuring the Electronic Music Council logo.</p>
                    <p className="text-lg font-bold">{product.price}</p>
                  </div>
                  <div className="flex items-end pb-4">
                    <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full py-2 px-5 text-sm flex items-center space-x-2 transition-all">
                      <span>View Product</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product grid */}
        <div className="flex-1 px-6 pb-24 overflow-y-auto hide-scrollbar">
          <div className="space-y-1 mb-4">
            <h3 className="text-lg font-bold">All Products</h3>
            <p className="text-sm text-white/60">{filteredProducts.length} item{filteredProducts.length !== 1 ? 's' : ''}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.filter(p => !p.featured || activeCategory !== 'All').map(product => (
              <div key={product.id} className="group">
                <div className="aspect-square rounded-xl bg-white/5 border border-white/10 mb-3 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-700/40 to-blue-700/40"></div>
                  <div className="absolute top-2 right-2">
                    <button className="p-1.5 rounded-full bg-black/30 hover:bg-black/50 transition-colors">
                      <Heart size={16} className="text-white/70 hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>
                <h5 className="font-medium text-sm truncate">{product.name}</h5>
                <p className="text-sm text-white/70">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation bar with interactive effects */}
        <nav className="absolute bottom-0 left-0 right-0 px-6 py-4 backdrop-blur-md bg-black/70 border-t border-white/10">
          <div className="flex justify-between items-center">
            {[
              { icon: <Music size={20} />, label: "Discover" },
              { icon: <Calendar size={20} />, label: "Events" },
              { icon: <ShoppingBag size={20} />, label: "Merch", active: true },
              { icon: <MessageCircle size={20} />, label: "Community" },
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
                <h2 className="text-xl font-bold">Filter Products</h2>
                <button 
                  onClick={() => setFilterOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex-1 px-6 py-6 space-y-6 overflow-y-auto">
                <div className="space-y-4">
                  <h3 className="font-medium">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button 
                        key={index}
                        className="flex items-center justify-between w-full py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <span>{category}</span>
                        <div className={`h-5 w-5 rounded-full border ${category === activeCategory ? 'bg-purple-600 border-purple-600' : 'border-white/30'}`}></div>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Price Range</h3>
                  <div className="py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-white/70">€0</span>
                      <span className="text-sm text-white/70">€50+</span>
                    </div>
                    <div className="h-1 bg-white/20 rounded-full relative">
                      <div className="absolute h-1 left-0 right-[30%] bg-purple-600 rounded-full"></div>
                      <div className="absolute h-4 w-4 bg-purple-600 rounded-full top-1/2 -translate-y-1/2" style={{ left: "0%" }}></div>
                      <div className="absolute h-4 w-4 bg-purple-600 rounded-full top-1/2 -translate-y-1/2" style={{ left: "70%" }}></div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-medium">€0</span>
                      <span className="font-medium">€35</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Sort By</h3>
                  <div className="space-y-2">
                    {['Newest', 'Price: Low to High', 'Price: High to Low', 'Popularity'].map((option, index) => (
                      <button 
                        key={index}
                        className="flex items-center justify-between w-full py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <span>{option}</span>
                        <div className={`h-5 w-5 rounded-full border ${index === 0 ? 'bg-purple-600 border-purple-600' : 'border-white/30'}`}></div>
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

        {/* Menu overlay */}
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
                  { icon: <ShoppingBag size={24} />, label: "Merchandise", active: true },
                  { icon: <MessageCircle size={24} />, label: "Community" },
                  { icon: <User size={24} />, label: "Profile" }
                ].map((item, index) => (
                  <button 
                    key={index} 
                    className={`w-full flex items-center space-x-4 py-4 ${
                      item.active ? 'bg-white/10' : 'hover:bg-white/5'
                    } rounded-lg px-4 transition-colors`}
                  >
                    <div className={`p-2 rounded-full ${
                      item.active ? 'bg-purple-600/30' : 'bg-white/10'
                    }`}>
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
      </div>
    </div>
  );
};

export default MerchPage;
