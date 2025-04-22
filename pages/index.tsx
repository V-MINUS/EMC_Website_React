import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

// Featured event data
const featuredEvents = [
  {
    id: 1,
    title: "EMC Presents: Small Crab at Liquid Lounge",
    date: { day: "15", month: "APR" },
    venue: "Liquid Lounge, Cork",
    time: "10:00 PM - 2:00 AM",
    description: "Join us for an unforgettable night featuring Small Crab, delivering cutting-edge electronic sounds in an intimate venue setting.",
    image: "/images/events/small-crab.jpg",
    slug: "small-crab-liquid-lounge"
  },
  {
    id: 2,
    title: "EMC Presents: Collie at Liquid Lounge",
    date: { day: "22", month: "APR" },
    venue: "Liquid Lounge, Cork",
    time: "10:00 PM - 2:00 AM",
    description: "Experience Collie's unique blend of techno and house music in Cork's premier electronic music venue.",
    image: "/images/events/collie.jpg",
    slug: "collie-liquid-lounge"
  },
  {
    id: 3,
    title: "EMC Presents: Illicit × Outlaw'd – Bushbaby at Cyprus Avenue",
    date: { day: "29", month: "APR" },
    venue: "Cyprus Avenue, Cork",
    time: "9:00 PM - 2:00 AM",
    description: "A collaborative night bringing together two of Cork's most exciting electronic music collectives.",
    image: "/images/events/bushbaby.jpg",
    slug: "bushbaby-cyprus-avenue"
  },
  {
    id: 4,
    title: "Electronic Music Council Presents: Behne",
    date: { day: "05", month: "MAY" },
    venue: "Dali, Cork",
    time: "10:30 PM - 3:00 AM",
    description: "Behne brings his unique sonic landscape to Cork for an exclusive EMC showcase.",
    image: "/images/events/behne.jpg",
    slug: "behne-dali"
  },
  {
    id: 5,
    title: "EMC Presents: NYE W/ SHAMPAIN",
    date: { day: "31", month: "DEC" },
    venue: "TBA, Cork",
    time: "9:00 PM - 2:00 AM",
    description: "Ring in the New Year with SHAMPAIN and the EMC crew at our annual celebration.",
    image: "/images/events/shampain.jpg",
    slug: "nye-shampain"
  }
];

// Social media links
const socialLinks = [
  { platform: "Facebook", url: "https://www.facebook.com/electronicmusiccouncil", icon: "fab fa-facebook" },
  { platform: "Instagram", url: "https://www.instagram.com/electronicmusiccouncil", icon: "fab fa-instagram" },
  { platform: "LinkedIn", url: "https://ie.linkedin.com/electronicmusiccouncil", icon: "fab fa-linkedin" }
];

const Home: React.FC = () => {
  // State for carousel index
  const [activeEventIndex, setActiveEventIndex] = React.useState(0);
  
  // Function to navigate carousel
  const nextEvent = () => {
    setActiveEventIndex((prevIndex) => 
      prevIndex === featuredEvents.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevEvent = () => {
    setActiveEventIndex((prevIndex) => 
      prevIndex === 0 ? featuredEvents.length - 1 : prevIndex - 1
    );
  };
  
  // Current event to display
  const currentEvent = featuredEvents[activeEventIndex];
  
  return (
    <>
      <Head>
        <title>Electronic Music Council | Cork</title>
        <meta name="description" content="A community working to generate and maintain a positive, sustainable electronic music economy in Cork." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Font Awesome for social icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>
      
      <ParticlesBackground />
      
      <Header activeLink="home" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="glitch-text" data-text="Electronic Music Council">Electronic Music Council</h1>
          <div className="tagline">Fostering Cork's electronic music culture</div>
          <div className="hero-buttons">
            <Link href="/events" className="btn btn-primary">Upcoming Events</Link>
            <Link href="/about" className="btn btn-secondary">Our Mission</Link>
          </div>
          
          {/* Social Links */}
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index}
                aria-label={`Follow us on ${link.platform}`}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission Statement */}
      <section className="mission">
        <div className="container">
          <div className="mission-content">
            <div className="section-header">
              <h2>Our Mission</h2>
              <div className="section-line"></div>
            </div>
            <p className="mission-text">
              A community working to generate and maintain a positive, sustainable electronic music economy 
              by facilitating opportunities for growth and development in Cork.
            </p>
            <Link href="/about" className="text-link">
              Learn more about us <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Event Carousel */}
      <section className="featured-event">
        <div className="container">
          <div className="section-header">
            <h2>Featured Events</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="event-carousel">
            <button 
              className="carousel-nav carousel-prev" 
              onClick={prevEvent}
              aria-label="Previous event"
            >
              &#10094;
            </button>
            
            <div className="event-card">
              <div className="event-date">
                <span className="day">{currentEvent.date.day}</span>
                <span className="month">{currentEvent.date.month}</span>
              </div>
              <div className="event-info">
                <h3>{currentEvent.title}</h3>
                <div className="event-meta">
                  <span className="event-venue">{currentEvent.venue}</span>
                  <span className="event-time">{currentEvent.time}</span>
                </div>
                <p>{currentEvent.description}</p>
                <Link href={`/event/${currentEvent.slug}`} className="btn btn-secondary">
                  Get Tickets
                </Link>
              </div>
              <div className="event-image">
                <img 
                  src={currentEvent.image} 
                  alt={currentEvent.title} 
                  onError={(e) => {
                    e.currentTarget.src = "/images/event-placeholder.jpg";
                  }}
                />
              </div>
            </div>
            
            <button 
              className="carousel-nav carousel-next" 
              onClick={nextEvent}
              aria-label="Next event"
            >
              &#10095;
            </button>
            
            <div className="carousel-dots">
              {featuredEvents.map((_, index) => (
                <span 
                  key={index} 
                  className={`carousel-dot ${index === activeEventIndex ? 'active' : ''}`}
                  onClick={() => setActiveEventIndex(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to event ${index + 1}`}
                ></span>
              ))}
            </div>
          </div>
          
          <div className="view-all-link">
            <Link href="/events" className="text-link">
              View All Events <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Home;
