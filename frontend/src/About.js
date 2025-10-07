import React, { useState } from 'react';
import './AboutStyle.css';

const About = () => {
  const [writerEmail, setWriterEmail] = useState('');
  const [readerEmail, setReaderEmail] = useState('');

  const founder = {
    name: 'Akshar',
    role: 'Founder & CEO',
    image: 'AJ',
    description: 'Visionary leader with a passion for empowering creatives. Founded Inkstak to bridge the gap between talent and opportunity in the publishing space.',
    isFounder: true
  };

  const teamMembers = [
    {
      name: 'Kevin',
      role: 'Backend Programmer',
      image: 'SJ',
      description: 'With over 10 years of experience in digital design, Sarah leads our creative vision.'
    },
    {
      name: 'Dharmik',
      role: 'UX Designer',
      image: 'MC',
      description: 'Michael transforms beautiful designs into functional, responsive experiences.'
    },
    {
      name: 'Harsh',
      role: 'FrontEnd Programmer',
      image: 'ER',
      description: 'Emily ensures our content is engaging, valuable, and perfectly structured.'
    },
    {
      name: 'Mannan',
      role: 'Project Coordinator',
      image: 'DT',
      description: 'David focuses on creating intuitive user experiences that delight our customers.'
    }
  ];

  const stats = [
    { number: '50+', label: 'eBooks Published' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '5', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'We constantly explore new design trends and technologies to stay ahead.'
    },
    {
      icon: 'fas fa-users',
      title: 'Community',
      description: 'Building a supportive community of designers and creators is our priority.'
    },
    {
      icon: 'fas fa-gem',
      title: 'Quality',
      description: 'Every resource we create meets the highest standards of excellence.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Passion',
      description: 'We genuinely love what we do and it shows in our work.'
    }
  ];

  const handleWriterSubscribe = (e) => {
    e.preventDefault();
    // Handle writer subscription logic here
    console.log('Writer email:', writerEmail);
    setWriterEmail('');
    alert('Thank you for subscribing as a writer!');
  };

  const handleReaderSubscribe = (e) => {
    e.preventDefault();
    // Handle reader subscription logic here
    console.log('Reader email:', readerEmail);
    setReaderEmail('');
    alert('Thank you for subscribing as a reader!');
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Inkstak</h1>
            <p>We're passionate about empowering designers and artists with premium resources that inspire creativity and elevate their work to new heights.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>At InkStak, we believe that great design should be accessible to everyone. Our mission is to provide high-quality, professionally crafted eBooks and resources that help designers at all levels create stunning work.</p>
              <p>Founded in 2018, we've grown from a small team of design enthusiasts to a trusted resource for thousands of creative professionals worldwide.</p>
              <div className="mission-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mission-image">
              <div className="image-placeholder">
                <i className="fas fa-rocket"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>These core principles guide everything we do at InkStak</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>The passionate individuals behind InkStak </p>
          </div>
          
          {/* Founder Section */}
          <div className="founder-card-wrapper">
            <div className="founder-card">
              <div className="founder-avatar">
                {founder.image}
              </div>
              <h3>{founder.name}</h3>
              <div className="founder-role">{founder.role}</div>
              <p>{founder.description}</p>
              <div className="team-social">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-dribbble"></i></a>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">
                  {member.image}
                </div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p>{member.description}</p>
                <div className="team-social">
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-dribbble"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <div className="image-placeholder">
                <i className="fas fa-history"></i>
              </div>
            </div>
            <div className="story-content">
              <h2>Our Story</h2>
              <p>InkStak began as a small passion project between two designers who struggled to find high-quality, affordable resources for their creative work. Frustrated with the limited options available, we decided to create the resources we wished existed.</p>
              <p>What started as a weekend project quickly grew into a full-fledged business as we discovered how many other designers faced the same challenges. Today, we're proud to serve a global community of creative professionals.</p>
              <button className="btn-primary">Learn More About Our Journey</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Stay Updated with Inkstak</h2>
          <p>Join our community and never miss the latest updates and resources.</p>
          
          <div className="subscription-forms">
            {/* Writers Subscription */}
            <div className="subscription-card">
              <h3>For Writers</h3>
              <p>Get notified about new writing opportunities, tips, and platform updates.</p>
              <form onSubmit={handleWriterSubscribe} className="subscription-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={writerEmail}
                  onChange={(e) => setWriterEmail(e.target.value)}
                  required
                  className="email-input"
                />
                <button type="submit" className="btn-primary">
                  Subscribe for Updates for Writers
                </button>
              </form>
            </div>

            {/* Readers Subscription */}
            <div className="subscription-card">
              <h3>For Readers</h3>
              <p>Be the first to know about new eBooks, articles, and exclusive content.</p>
              <form onSubmit={handleReaderSubscribe} className="subscription-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={readerEmail}
                  onChange={(e) => setReaderEmail(e.target.value)}
                  required
                  className="email-input"
                />
                <button type="submit" className="btn-primary">
                  Subscribe for Updates for Readers
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;