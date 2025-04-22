import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

type NewsItem = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
};

const News: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "EMC Announces Summer Festival Lineup",
      date: "April 10, 2025",
      excerpt: "The Electronic Music Council is excited to announce the full lineup for our annual summer festival, featuring top local and international talent.",
      image: "/images/event-placeholder.jpg",
      category: "Events"
    },
    {
      id: 2,
      title: "New Producer Workshop Series Starts Next Month",
      date: "April 5, 2025",
      excerpt: "Join us for a six-week workshop series covering everything from beat-making to mastering, led by industry professionals.",
      image: "/images/event-placeholder.jpg",
      category: "Education"
    },
    {
      id: 3,
      title: "Interview with DJ Pulse: Cork's Emerging Techno Scene",
      date: "March 28, 2025",
      excerpt: "We sat down with DJ Pulse to discuss the growing techno scene in Cork and the importance of supporting local venues.",
      image: "/images/event-placeholder.jpg",
      category: "Interviews"
    }
  ];

  return (
    <>
      <Head>
        <title>News | Electronic Music Council</title>
        <meta name="description" content="Latest news, interviews, and updates from the Electronic Music Council." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ParticlesBackground />
      
      <Header activeLink="news" />
      
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>News</h1>
          <div className="section-line"></div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <div className="news-grid">
            {newsItems.map(item => (
              <div className="news-card" key={item.id}>
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <Link href={`/news/${item.id}`} className="text-link">
                    Read more <span className="arrow"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest news and updates from EMC.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default News;
