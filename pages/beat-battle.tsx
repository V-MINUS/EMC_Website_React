import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

interface Submission {
  id: number;
  artistName: string;
  trackTitle: string;
  soundCloudUrl: string;
  votes: number;
  submissionDate: string;
}

interface Competition {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'active' | 'voting' | 'completed';
  hashtag: string;
  rules: string[];
  prize: string;
  submissions: Submission[];
}

const BeatBattle = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'past' | 'upcoming'>('current');
  const [currentCompetition, setCurrentCompetition] = useState<Competition | null>(null);
  const [pastCompetitions, setPastCompetitions] = useState<Competition[]>([]);
  const [upcomingCompetitions, setUpcomingCompetitions] = useState<Competition[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [soundCloudUrl, setSoundCloudUrl] = useState('');
  const [artistName, setArtistName] = useState('');
  const [trackTitle, setTrackTitle] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Simulate loading data from an API
  useEffect(() => {
    // Mock data - in a real app, this would come from an API
    const mockCurrentCompetition: Competition = {
      id: 1,
      title: "Spring 2025 Beat Battle",
      description: "Create a track using only three samples in one hour. Focus on creative processing.",
      startDate: "April 22, 2025",
      endDate: "April 29, 2025",
      status: 'active',
      hashtag: "#emcspring25",
      rules: [
        "Use only the provided sample pack",
        "1 hour production time limit",
        "Submit via SoundCloud link",
        "Must include the hashtag #emcspring25 in your SoundCloud description"
      ],
      prize: "Feature on EMC compilation, studio time at Cork Sound Studio",
      submissions: [
        {
          id: 101,
          artistName: "BassMatrix",
          trackTitle: "Frequency Shift",
          soundCloudUrl: "https://soundcloud.com/example/track1",
          votes: 24,
          submissionDate: "April 23, 2025"
        },
        {
          id: 102,
          artistName: "WaveRunner",
          trackTitle: "Oscillate",
          soundCloudUrl: "https://soundcloud.com/example/track2",
          votes: 18,
          submissionDate: "April 23, 2025"
        },
        {
          id: 103,
          artistName: "SynthMaster",
          trackTitle: "Resonance",
          soundCloudUrl: "https://soundcloud.com/example/track3",
          votes: 32,
          submissionDate: "April 24, 2025"
        }
      ]
    };

    const mockPastCompetitions: Competition[] = [
      {
        id: 2,
        title: "Winter 2025 Bass Design",
        description: "Focus on creating the most innovative bass sound design.",
        startDate: "February 10, 2025",
        endDate: "February 17, 2025",
        status: 'completed',
        hashtag: "#emcbass25",
        rules: [
          "Any DAW allowed",
          "1 hour production time limit",
          "Focus on bass design"
        ],
        prize: "Native Instruments Komplete 14",
        submissions: []
      },
      {
        id: 3,
        title: "Minimalist Mix Challenge",
        description: "Create a track using no more than 5 elements.",
        startDate: "March 15, 2025",
        endDate: "March 22, 2025",
        status: 'completed',
        hashtag: "#emcminimal25",
        rules: [
          "5 elements maximum",
          "1 hour production time limit"
        ],
        prize: "Ableton Live 12 Suite",
        submissions: []
      }
    ];

    const mockUpcomingCompetitions: Competition[] = [
      {
        id: 4,
        title: "Summer 2025 Sample Flip",
        description: "Transform the provided sample into a completely different genre.",
        startDate: "May 15, 2025",
        endDate: "May 22, 2025",
        status: 'upcoming',
        hashtag: "#emcsample25",
        rules: [
          "Use the provided sample as the main element",
          "1 hour production time limit"
        ],
        prize: "EMC Merch Bundle + Studio Session",
        submissions: []
      }
    ];

    setCurrentCompetition(mockCurrentCompetition);
    setPastCompetitions(mockPastCompetitions);
    setUpcomingCompetitions(mockUpcomingCompetitions);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!soundCloudUrl || !artistName || !trackTitle) {
      setSubmitError('Please fill in all fields');
      return;
    }

    // SoundCloud URL validation
    if (!soundCloudUrl.includes('soundcloud.com')) {
      setSubmitError('Please enter a valid SoundCloud URL');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an API call to submit the track
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSoundCloudUrl('');
      setArtistName('');
      setTrackTitle('');
      
      // Reset success message after a delay
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const renderCompetitionDetails = (competition: Competition) => (
    <div className="competition-details">
      <h3>{competition.title}</h3>
      <p className="competition-dates">
        {competition.startDate} - {competition.endDate}
      </p>
      <p className="competition-description">{competition.description}</p>
      
      <div className="competition-meta">
        <div className="competition-rules">
          <h4>Rules</h4>
          <ul>
            {competition.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        
        <div className="competition-prize">
          <h4>Prize</h4>
          <p>{competition.prize}</p>
        </div>
      </div>
      
      <div className="competition-hashtag">
        <span>Official Hashtag: </span>
        <span className="hashtag">{competition.hashtag}</span>
      </div>
    </div>
  );

  const renderSubmissionForm = () => (
    <div className="submission-form-container">
      <h3>Submit Your Track</h3>
      {submitSuccess ? (
        <div className="submit-success">
          <p>✅ Your track has been submitted successfully!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="submission-form">
          {submitError && <div className="submit-error">{submitError}</div>}
          
          <div className="form-group">
            <label htmlFor="artistName">Artist Name</label>
            <input
              type="text"
              id="artistName"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              placeholder="Your artist name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="trackTitle">Track Title</label>
            <input
              type="text"
              id="trackTitle"
              value={trackTitle}
              onChange={(e) => setTrackTitle(e.target.value)}
              placeholder="Your track title"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="soundCloudUrl">SoundCloud URL</label>
            <input
              type="text"
              id="soundCloudUrl"
              value={soundCloudUrl}
              onChange={(e) => setSoundCloudUrl(e.target.value)}
              placeholder="https://soundcloud.com/your-profile/your-track"
            />
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Track'}
          </button>
        </form>
      )}
    </div>
  );

  const renderSubmissions = (submissions: Submission[]) => (
    <div className="submissions-container">
      <h3>Current Submissions</h3>
      {submissions.length === 0 ? (
        <p className="no-submissions">No submissions yet. Be the first to submit your track!</p>
      ) : (
        <div className="submissions-list">
          {submissions.map((submission) => (
            <div key={submission.id} className="submission-card">
              <div className="submission-info">
                <h4>{submission.trackTitle}</h4>
                <p className="artist-name">by {submission.artistName}</p>
              </div>
              <div className="submission-meta">
                <span className="submission-date">{submission.submissionDate}</span>
                <div className="submission-votes">
                  <button className="vote-btn">Vote</button>
                  <span className="vote-count">{submission.votes} votes</span>
                </div>
              </div>
              <div className="submission-player">
                <a href={submission.soundCloudUrl} target="_blank" rel="noopener noreferrer" className="soundcloud-link">
                  Listen on SoundCloud
                </a>
                {/* In a real implementation, we would embed the SoundCloud player here */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>EMC Beat Battle | Electronic Music Council</title>
        <meta name="description" content="Join the Electronic Music Council's Beat Battle - compete with producers worldwide in timed challenges." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ParticlesBackground />
      
      <Header activeLink="beat-battle" />
      
      <section className="page-header">
        <div className="container">
          <h1>EMC Beat Battle</h1>
          <div className="section-line"></div>
          <p className="intro-text">Compete with producers worldwide in our timed production challenges</p>
        </div>
      </section>
      
      <section className="competition-tabs">
        <div className="container">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'current' ? 'active' : ''}`}
              onClick={() => setActiveTab('current')}
            >
              Current Competition
            </button>
            <button 
              className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Past Competitions
            </button>
            <button 
              className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Competitions
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'current' && currentCompetition && (
              <div className="current-competition">
                <div className="battle-grid">
                  <div className="battle-info">
                    {renderCompetitionDetails(currentCompetition)}
                    {currentCompetition.status === 'active' && renderSubmissionForm()}
                  </div>
                  
                  <div className="battle-submissions">
                    {renderSubmissions(currentCompetition.submissions)}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'past' && (
              <div className="past-competitions">
                {pastCompetitions.length === 0 ? (
                  <p>No past competitions available.</p>
                ) : (
                  <div className="competitions-grid">
                    {pastCompetitions.map((competition) => (
                      <div key={competition.id} className="competition-card">
                        <div className="competition-header">
                          <h3>{competition.title}</h3>
                          <span className="date">{competition.startDate}</span>
                        </div>
                        <p>{competition.description}</p>
                        <div className="competition-footer">
                          <span className="hashtag">{competition.hashtag}</span>
                          <Link href={`/beat-battle/${competition.id}`} className="btn btn-sm btn-secondary">
                            View Results
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'upcoming' && (
              <div className="upcoming-competitions">
                {upcomingCompetitions.length === 0 ? (
                  <p>No upcoming competitions scheduled yet.</p>
                ) : (
                  <div className="competitions-grid">
                    {upcomingCompetitions.map((competition) => (
                      <div key={competition.id} className="competition-card">
                        <div className="competition-header">
                          <h3>{competition.title}</h3>
                          <span className="date">Starts: {competition.startDate}</span>
                        </div>
                        <p>{competition.description}</p>
                        <div className="competition-footer">
                          <span className="hashtag">{competition.hashtag}</span>
                          <button className="btn btn-sm btn-tertiary">
                            Set Reminder
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Producer Community</h2>
            <p>Connect with other producers, share feedback, and improve your skills through our competitions.</p>
            <Link href="/contact" className="btn btn-accent">Get Involved</Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default BeatBattle;