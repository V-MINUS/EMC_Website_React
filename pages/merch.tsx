import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

const Merch = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const products = [
    {
      id: 1,
      name: "EMC Logo T-Shirt",
      price: 25,
      description: "100% organic cotton t-shirt featuring the Electronic Music Council logo.",
      image: "/images/merch/tshirt.jpg",
      category: "clothing"
    },
    {
      id: 2,
      name: "EMC Hoodie",
      price: 45,
      description: "Premium hoodie with the EMC logo on front and waveform design on back.",
      image: "/images/merch/hoodie.jpg",
      category: "clothing"
    },
    {
      id: 3,
      name: "EMC Beanie",
      price: 18,
      description: "Keep your head warm with our EMC branded beanie.",
      image: "/images/merch/beanie.jpg",
      category: "accessories"
    },
    {
      id: 4,
      name: "EMC Sticker Pack",
      price: 8,
      description: "Pack of 5 stickers featuring EMC logos and designs.",
      image: "/images/merch/stickers.jpg",
      category: "accessories"
    },
    {
      id: 5,
      name: "High-Fidelity Earplugs",
      price: 15,
      description: "Protect your hearing at events while maintaining sound quality.",
      image: "/images/merch/earplugs.jpg",
      category: "accessories"
    },
    {
      id: 6,
      name: "Cork Electronic Music Scene Poster",
      price: 20,
      description: "Limited edition art print celebrating Cork's electronic music venues.",
      image: "/images/merch/poster.jpg",
      category: "prints"
    }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <>
      <Head>
        <title>Merchandise | Electronic Music Council</title>
        <meta name="description" content="Official merchandise from the Electronic Music Council." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* The particles background with z-index to appear behind content */}
      <div className="fixed inset-0 z-particles">
        <ParticlesBackground />
      </div>
      
      <Header activeLink="merch" />
      
      <main>
      
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Merchandise</h1>
          <div className="section-line"></div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="merch-section">
        <div className="container">
          <div className="filter-tabs">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'clothing' ? 'active' : ''}`}
              onClick={() => setActiveCategory('clothing')}
            >
              Clothing
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'accessories' ? 'active' : ''}`}
              onClick={() => setActiveCategory('accessories')}
            >
              Accessories
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'prints' ? 'active' : ''}`}
              onClick={() => setActiveCategory('prints')}
            >
              Prints
            </button>
          </div>
          
          <div className="team-grid products-grid">
            {filteredProducts.map(product => (
              <div className="team-card product-card" key={product.id}>
                <div className="team-card-image product-image flex justify-center">
                  <div className="relative w-full max-w-[240px] h-[240px] overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="team-image object-cover w-full h-full"
                      onError={(e) => {
                        e.currentTarget.src = '/images/event-placeholder.jpg';
                      }}
                    />
                  </div>
                </div>
                <div className="team-card-content product-content">
                  <h3>{product.name}</h3>
                  <h4 className="product-price">€{product.price}</h4>
                  <p className="product-description">{product.description}</p>
                  <Link href={`/merch/${product.id}`} className="btn btn-tertiary mt-4 inline-block">View Product</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Orders */}
      <section className="custom-orders">
        <div className="container">
          <div className="custom-content">
            <h2>Looking for Custom Merchandise?</h2>
            <p>We offer custom merchandise options for artists, events, and venues. Get in touch to discuss your requirements.</p>
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Merch;