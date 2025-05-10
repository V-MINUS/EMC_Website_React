import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

type Event = {
  id: number;
  title: string;
  date: {
    day: string;
    month: string;
  };
  venue: string;
  time: string;
  description: string;
  image: string;
};

const Events: React.FC = () => {
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "EMC Presents: Small Crab at Liquid Lounge",
      date: { day: "15", month: "APR" },
      venue: "Liquid Lounge, Cork",
      time: "10:00 PM - 2:00 AM",
      description: "Join us for an unforgettable night featuring Small Crab, delivering cutting-edge electronic sounds in an intimate venue setting.",
      image: "/images/events/small-crab.jpg"
    },
    {
      id: 2,
      title: "Techno Tuesdays with DJ Static",
      date: { day: "22", month: "APR" },
      venue: "Dali, Cork",
      time: "9:00 PM - 1:00 AM",
      description: "Our weekly techno night returns with resident DJ Static spinning the best underground techno tracks.",
      image: "/images/events/behne.jpg"
    },
    {
      id: 3,
      title: "EMC Workshop: Introduction to Ableton Live",
      date: { day: "28", month: "APR" },
      venue: "Cork Sound Fair, Cork",
      time: "2:00 PM - 5:00 PM",
      description: "Learn the basics of music production with Ableton Live in this hands-on workshop for beginners.",
      image: "/images/events/bushbaby.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Events | Electronic Music Council</title>
        <meta name="description" content="Upcoming electronic music events organized by the Electronic Music Council in Cork." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* The particles background with z-index to appear behind content */}
      <div className="fixed inset-0 z-particles">
        <ParticlesBackground />
      </div>
      
      <Header activeLink="events" />
      
      <main>
        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>Events</h1>
            <div className="section-line"></div>
          </div>
        </section>
      
        {/* Upcoming Events Section */}
        <section className="events-section">
          <div className="container">
            <div className="section-header">
              <h2>Upcoming Events</h2>
              <div className="section-line"></div>
            </div>
            
            <div className="events-grid">
              {upcomingEvents.map(event => (
                <div className="event-card" key={event.id}>
                  <div className="event-date">
                    <span className="day">{event.date.day}</span>
                    <span className="month">{event.date.month}</span>
                  </div>
                  <div className="event-info">
                    <h3>{event.title}</h3>
                    <p className="event-meta">
                      <span className="location">{event.venue}</span>
                      <span className="time">{event.time}</span>
                    </p>
                    <p className="event-description">{event.description}</p>
                    <Link href={`/events/${event.id}`} className="btn btn-tertiary">Get Tickets</Link>
                  </div>
                  <div className="event-image">
                    <Image src={event.image} alt={event.title} width={400} height={250} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Past Events Gallery */}
        <section className="past-events">
          <div className="container">
            <div className="section-header">
              <h2>Past Events</h2>
              <div className="section-line"></div>
            </div>
            <div className="gallery-grid">
              <div className="gallery-item">
                <Image src="/images/events/collie.jpg" alt="Past EMC Event" width={300} height={200} />
                <div className="gallery-overlay">
                  <h3>Winter Sound Series</h3>
                  <p>December 2024</p>
                </div>
              </div>
              <div className="gallery-item">
                <Image src="/images/events/shampain.jpg" alt="Past EMC Event" width={300} height={200} />
                <div className="gallery-overlay">
                  <h3>Cork Electronic Festival</h3>
                  <p>October 2024</p>
                </div>
              </div>
              <div className="gallery-item">
                <Image src="/images/small-crab.jpg" alt="Past EMC Event" width={300} height={200} />
                <div className="gallery-overlay">
                  <h3>Summer DJ Workshop</h3>
                  <p>July 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Events;
