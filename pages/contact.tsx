import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaSoundcloud, FaTiktok, FaYoutube } from 'react-icons/fa';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      // Send form data to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success
        setSubmitMessage('Thank you for your message. We will get back to you soon!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        // API returned an error
        setSubmitMessage(`Error: ${data.message || 'Something went wrong. Please try again later.'}`);
      }
    } catch (error) {
      // Network or other error
      console.error('Error submitting form:', error);
      setSubmitMessage('Unable to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Electronic Music Council</title>
        <meta name="description" content="Get in touch with the Electronic Music Council for inquiries, partnerships, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* The particles background with z-index to appear behind content */}
      <div className="fixed inset-0 z-particles">
        <ParticlesBackground />
      </div>
      
      <Header activeLink="contact" />
      
      <main>
      
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="section-line"></div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="info-card">
                <h3>General Inquiries</h3>
                <p>For general information, partnerships, or press inquiries.</p>
                <p className="contact-detail">info@emc-cork.ie</p>
              </div>
              
              <div className="info-card">
                <h3>Artist Submissions</h3>
                <p>Submit your music or apply to perform at our events.</p>
                <p className="contact-detail">artists@emc-cork.ie</p>
              </div>
              
              <div className="info-card">
                <h3>Event Bookings</h3>
                <p>For venue owners and event organizers.</p>
                <p className="contact-detail">events@emc-cork.ie</p>
              </div>
              
              <div className="social-links-horizontal">
                <div className="social-links-container">
                  <h3>Follow Us</h3>
                  <div className="social-icons-row">
                    <a href="https://www.instagram.com/electronicmusiccouncil/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                      <FaInstagram size={22} />
                    </a>
                    <a href="https://www.facebook.com/electronicmusiccouncil/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                      <FaFacebookF size={22} />
                    </a>
                    <a href="https://ie.linkedin.com/company/electronic-music-council" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                      <FaLinkedinIn size={22} />
                    </a>
                    <a href="https://www.tiktok.com/@electronicmusiccouncil" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="TikTok">
                      <FaTiktok size={22} />
                    </a>
                    <a href="https://www.youtube.com/@electronicmusiccouncil" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="YouTube">
                      <FaYoutube size={22} />
                    </a>
                    <a href="https://soundcloud.com/electronicmusiccouncil" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="SoundCloud">
                      <FaSoundcloud size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              {submitMessage ? (
                <div className="submit-success">
                  <p>{submitMessage}</p>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setSubmitMessage(null)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Artist Submission">Artist Submission</option>
                      <option value="Event Booking">Event Booking</option>
                      <option value="Merchandise">Merchandise</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
