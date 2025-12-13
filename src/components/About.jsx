import React from 'react'
import { motion } from 'framer-motion'
import './About.css'

// Premium SVG Icons
const Icons = {
  wave: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 18.5a6.5 6.5 0 0 1 7-6.5 6.5 6.5 0 0 1 6 5 6.5 6.5 0 0 0 6 5"/><path d="M2.5 13.5a6.5 6.5 0 0 1 7-6.5 6.5 6.5 0 0 1 6 5 6.5 6.5 0 0 0 6 5"/></svg>,
  target: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  rocket: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
  lightbulb: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>,
  message: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>,
  briefcase: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
}

const About = () => {
  const stats = [
    { number: '3+', label: 'Years of Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="about" className="about">
      <div className="about-bg">
        <div className="about-gradient" />
      </div>
      
      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">
            <span className="badge-icon">{Icons.wave}</span>
            About Me
          </span>
          <h2 className="section-title">Turning Ideas Into Digital Reality</h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <div className="image-border" />
              <img 
                src="https://jayveedevs27.github.io/portfolio/assets/profile.jpg" 
                alt="Jayvee - Full Stack Developer"
                className="about-profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{display: 'none'}}>
                <div className="about-logo">
                  <svg width="140" height="140" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7c3aed"/>
                        <stop offset="50%" stopColor="#a78bfa"/>
                        <stop offset="100%" stopColor="#06b6d4"/>
                      </linearGradient>
                      <linearGradient id="aboutGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4"/>
                        <stop offset="100%" stopColor="#7c3aed"/>
                      </linearGradient>
                      <filter id="aboutGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path d="M25 2L46 14V38L25 50L4 38V14L25 2Z" stroke="url(#aboutGradient)" strokeWidth="1.5" fill="rgba(124, 58, 237, 0.1)" className="about-logo-hexagon"/>
                    <path d="M16 18L10 25L16 32" stroke="url(#aboutGradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#aboutGlow)"/>
                    <path d="M34 18L40 25L34 32" stroke="url(#aboutGradient2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#aboutGlow)"/>
                    <path d="M28 17V29C28 31.5 26.5 33 24 33C21.5 33 20 31.5 20 29" stroke="url(#aboutGradient)" strokeWidth="3" strokeLinecap="round" filter="url(#aboutGlow)"/>
                    <circle cx="25" cy="25" r="2.5" fill="url(#aboutGradient)" className="about-logo-dot"/>
                  </svg>
                </div>
              </div>
              <div className="experience-badge">
                <span className="exp-number">3+</span>
                <span className="exp-text">Years<br/>Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="about-subtitle">
              Full Stack Developer based in <span className="highlight">Philippines</span>
            </h3>
            <p className="about-description">
              As a full stack developer, I thrive on tackling coding challenges and turning
              ideas into seamless digital experiences. I love crafting websites that not only
              look great but also deliver real value to users, blending creativity with
              technical precision.
            </p>
            <p className="about-description">
              With expertise in both frontend and backend development, I create complete 
              solutions from concept to deployment. My passion lies in building scalable, 
              user-friendly applications that make a difference.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">{Icons.target}</div>
                <div className="highlight-content">
                  <h4>Problem Solver</h4>
                  <p>Finding elegant solutions to complex challenges</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">{Icons.rocket}</div>
                <div className="highlight-content">
                  <h4>Fast Learner</h4>
                  <p>Always updating skills with latest technologies</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">{Icons.lightbulb}</div>
                <div className="highlight-content">
                  <h4>Creative Thinker</h4>
                  <p>Bringing innovative ideas to every project</p>
                </div>
              </div>
            </div>

            <div className="about-buttons">
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {Icons.message}
                Let's Talk
              </motion.a>
              <motion.a 
                href="#projects" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {Icons.briefcase}
                View Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
