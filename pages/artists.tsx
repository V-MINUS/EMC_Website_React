import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

type Artist = {
  id: number;
  name: string;
  genre: string;
  bio: string;
  image: string;
  socialLinks: {
    soundcloud?: string;
    instagram?: string;
    spotify?: string;
  };
};

const Artists: React.FC = () => {
  const featuredArtists: Artist[] = [
    {
      id: 1,
      name: "DJ Static",
      genre: "Techno",
      bio: "Cork-based techno DJ with a focus on hard-hitting industrial sounds.",
      image: "/images/team-placeholder.jpg",
      socialLinks: {
        soundcloud: "[https://soundcloud.com](https://soundcloud.com)",
        instagram: "[https://instagram.com](https://instagram.com)",
        spotify: "[https://spotify.com](https://spotify.com)"
      }
    },
    {
      id: 2,
      name: "Small Crab",
      genre: "Ambient / Experimental",
      bio: "Electronic music producer creating otherworldly soundscapes and experimental beats.",
      image: "/images/team-placeholder.jpg",
      socialLinks: {
        soundcloud: "[https://soundcloud.com](https://soundcloud.com)",
        instagram: "[https://instagram.com](https://instagram.com)"
      }
    },
    {
      id: 3,
      name: "Pulse Collective",
      genre: "House / Disco",
      bio: "A duo bringing uplifting house and disco vibes to dance floors across Ireland.",
      image: "/images/team-placeholder.jpg",
      socialLinks: {
        soundcloud: "[https://soundcloud.com](https://soundcloud.com)",
        instagram: "[https://instagram.com](https://instagram.com)",
        spotify: "[https://spotify.com](https://spotify.com)"
      }
    }
  ];

  const residents: Artist[] = [
    {
      id: 4,
      name: "Synthia",
      genre: "Synth Wave",
      bio: "EMC resident specializing in nostalgic 80s-inspired synth wave and retro beats.",
      image: "/images/team-placeholder.jpg",
      socialLinks: {
        soundcloud: "[https://soundcloud.com](https://soundcloud.com)"
      }
    },
    {
      id: 5,
      name: "Bass Theory",
      genre: "Bass Music / Breaks",
      bio: "Pushing the boundaries of bass music with innovative break beats and deep sub frequencies.",
      image: "/images/team-placeholder.jpg",
      socialLinks: {
        soundcloud: "[https://soundcloud.com](https://soundcloud.com)",
        instagram: "[https://instagram.com](https://instagram.com)"
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Artists | Electronic Music Council</title>
        <meta name="description" content="Featured artists and DJs supported by the Electronic Music Council." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ParticlesBackground />
      
      <Header activeLink="artists" />
      
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Artists</h1>
          <div className="section-line"></div>
        </div>
      </section>
      
      {/* Featured Artists */}
      <section className="artists-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Artists</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="artists-grid">
            {featuredArtists.map(artist => (
              <div className="artist-card" key={artist.id}>
                <div className="artist-image">
                  <img src={artist.image} alt={artist.name} />
                </div>
                <div className="artist-content">
                  <h3>{artist.name}</h3>
                  <span className="artist-genre">{artist.genre}</span>
                  <p>{artist.bio}</p>
                  <div className="artist-social">
                    {artist.socialLinks.soundcloud && (
                      <a href={artist.socialLinks.soundcloud} target="_blank" rel="noopener noreferrer" className="social-icon soundcloud">SoundCloud</a>
                    )}
                    {artist.socialLinks.instagram && (
                      <a href={artist.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram">Instagram</a>
                    )}
                    {artist.socialLinks.spotify && (
                      <a href={artist.socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="social-icon spotify">Spotify</a>
                    )}
                  </div>
                  <Link href={`/artists/${artist.id}`} className="btn btn-tertiary">View Profile</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resident DJs */}
      <section className="residents-section">
        <div className="container">
          <div className="section-header">
            <h2>EMC Residents</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="residents-grid">
            {residents.map(artist => (
              <div className="resident-card" key={artist.id}>
                <div className="resident-image">
                  <img src={artist.image} alt={artist.name} />
                </div>
                <div className="resident-content">
                  <h3>{artist.name}</h3>
                  <span className="resident-genre">{artist.genre}</span>
                  <p>{artist.bio}</p>
                  <div className="resident-social">
                    {artist.socialLinks.soundcloud && (
                      <a href={artist.socialLinks.soundcloud} target="_blank" rel="noopener noreferrer" className="social-icon soundcloud">SoundCloud</a>
                    )}
                    {artist.socialLinks.instagram && (
                      <a href={artist.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram">Instagram</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Artist Signup */}
      <section className="artist-signup">
        <div className="container">
          <div className="signup-content">
            <h2>Join Our Artist Network</h2>
            <p>Are you an electronic music producer or DJ based in Cork? We'd love to support your work and connect you with opportunities.</p>
            <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Artists;
