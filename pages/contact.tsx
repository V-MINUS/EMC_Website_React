import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesBackground from '../components/ParticlesBackground';

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
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message. We will get back to you soon!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Contact Us | Electronic Music Council</title>
        <meta name="description" content="Get in touch with the Electronic Music Council for inquiries, partnerships, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <ParticlesBackground />
      
      <Header activeLink="contact" />
      
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
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">SoundCloud</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
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
      
      <Footer />
    </>
  );
};

export default Contact;
