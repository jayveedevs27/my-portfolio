import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Testimonials.css'

// Premium SVG Icons
const Icons = {
  quote: <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/></svg>,
  star: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  starHalf: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77V2z"/></svg>,
  chevronLeft: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>,
  chevronRight: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>,
  message: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'TechStart Solutions',
      image: null,
      initials: 'MC',
      rating: 5,
      text: "Jayvee delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise transformed our vision into reality. The project was completed ahead of schedule, and the results speak for themselves - our user engagement increased by 40%.",
      project: 'E-Commerce Platform'
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing Director',
      company: 'Digital Bloom Agency',
      image: null,
      initials: 'SW',
      rating: 5,
      text: "Working with Jayvee was a fantastic experience. He built us a custom CMS that made managing our content incredibly easy. His communication throughout the project was excellent, and he was always available to address our concerns. Highly recommended!",
      project: 'Content Management System'
    },
    {
      name: 'David Rodriguez',
      role: 'Founder',
      company: 'GreenLeaf Organics',
      image: null,
      initials: 'DR',
      rating: 5,
      text: "Jayvee helped us build a comprehensive CRM system that revolutionized how we manage customer relationships. His understanding of our business needs and ability to translate them into functional features was impressive. Our team productivity improved significantly.",
      project: 'CRM Development'
    },
    {
      name: 'Emily Thompson',
      role: 'Product Manager',
      company: 'CloudSync Tech',
      image: null,
      initials: 'ET',
      rating: 5,
      text: "The API integration work Jayvee did for us was flawless. He seamlessly connected multiple third-party services, improving our workflow efficiency by 60%. His clean code and thorough documentation made future maintenance a breeze.",
      project: 'API Integration'
    },
    {
      name: 'James Park',
      role: 'Operations Lead',
      company: 'SwiftLogistics Co.',
      image: null,
      initials: 'JP',
      rating: 5,
      text: "Jayvee redesigned our entire database architecture, resulting in a 70% improvement in query performance. His expertise in optimization and scalability planning has set us up for future growth. A true professional who delivers results.",
      project: 'Database Optimization'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        {Icons.star}
      </span>
    ))
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-bg">
        <div className="testimonials-gradient gradient-1" />
        <div className="testimonials-gradient gradient-2" />
      </div>

      <div className="container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">
            <span className="badge-icon">{Icons.message}</span>
            Testimonials
          </span>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">
            Don't just take my word for it - hear from some of my satisfied clients
          </p>
        </motion.div>

        <div className="testimonials-content">
          <motion.button 
            className="nav-btn prev"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {Icons.chevronLeft}
          </motion.button>

          <div className="testimonial-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card glass-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="quote-icon">
                  {Icons.quote}
                </div>
                
                <div className="testimonial-rating">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                <p className="testimonial-text">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="testimonial-project">
                  <span className="project-label">Project:</span>
                  <span className="project-name">{testimonials[currentIndex].project}</span>
                </div>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonials[currentIndex].image ? (
                      <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                    ) : (
                      <span className="author-initials">{testimonials[currentIndex].initials}</span>
                    )}
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                    <p className="author-role">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button 
            className="nav-btn next"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {Icons.chevronRight}
          </motion.button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
