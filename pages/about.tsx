import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';
import TeamCard from '../components/TeamCard';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Dan-Jo Relihan",
    role: "Core Team Member",
    bio: [
      "Allow us to introduce Dan-Jo Relihan A.K.A. Steam Lite, a humble maestro of Drum and Bass who has been setting dance floors ablaze since 2014.",
      "Drawing inspiration from the pulsating world of hip-hop, Steam Lite crafts a captivating sonic journey that transcends genres, spanning breaks, Neurofunk, Jungle, and Liquid D&B.",
      "Beyond performances, he curates immersive art shows and runs exceptional events in Cork City, merging music and visual art to engage all senses."
    ],
    imageSrc: "/images/team/Dan-jo.jpg"
  },
  {
    id: 2,
    name: "Gwada Mike",
    role: "Core Team Member",
    bio: [
      "Meet Mike! He makes up for a great part of the Cork scene and community, playing everything from reggae and dancehall to afro house and amapiano.",
      "He holds a residency at Edison for house and techno, was a lead organizer of Africa Day Cork 2022, and sits on EMC's core decision committee."
    ],
    imageSrc: "/images/team/Mike.jpg"
  },
  {
    id: 3,
    name: "James Walshe",
    role: "Chairperson",
    bio: [
      "This is our current Chairperson James Walshe, who cut his teeth running underground parties with the Abjure collective five years ago.",
      "As EMC chair, he's led incorporation as a limited company and secured major funding from Cork City Council and the Arts Council."
    ],
    imageSrc: "/images/team/James-Walshe.jpg"
  },
  {
    id: 4,
    name: "VLR",
    role: "Artist Member",
    bio: [
      "VLR is a talented producer and DJ from Cork's electronic music scene, bringing fresh energy and innovative sounds to every performance.",
      "With a unique style that blends multiple electronic genres, VLR has become an important voice in the local community."
    ],
    imageSrc: "/images/team/VLR.jpg"
  },
  {
    id: 5,
    name: "Miko",
    role: "Community Organizer",
    bio: [
      "Miko has been instrumental in building bridges between different parts of Cork's music scene.",
      "With a focus on inclusivity and community development, Miko helps organize events that bring together diverse audiences."
    ],
    imageSrc: "/images/team/miko.jpg"
  },
  {
    id: 6,
    name: "Nat",
    role: "Events Coordinator",
    bio: [
      "Nat brings extensive experience in event planning and management to the EMC team.",
      "Passionate about creating memorable experiences, Nat ensures every EMC event runs smoothly and exceeds expectations."
    ],
    imageSrc: "/images/team/nat.jpg"
  }
];

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | Electronic Music Council</title>
        <meta name="description" content="Learn about the Electronic Music Council and our mission to foster Cork's electronic music culture." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ParticlesBackground />
      
      <Header activeLink="about" />
      
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <div className="section-line"></div>
        </div>
      </section>
      
      {/* Mission Section */}
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
          </div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About EMC</h2>
            <div className="section-line"></div>
          </div>
          <p>The Electronic Music Council (EMC) was established to support and grow Cork's electronic music scene. We connect artists, venues, and audiences to create a vibrant community around electronic music.</p>
          <p>Through our events, educational programs, and community initiatives, we aim to make Cork a hub for electronic music culture in Ireland and beyond.</p>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Team</h2>
            <div className="section-line"></div>
          </div>
          <div className="team-grid grid-3">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default About;
