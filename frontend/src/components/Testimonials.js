import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: '"The Modern Web Design eBook completely transformed how I approach website projects. The examples and tutorials are incredibly helpful."',
      name: 'Jessica Smith',
      role: 'Web Designer',
      initials: 'JS'
    },
    {
      text: '"I\'ve purchased several eBooks from this site and each one has been worth every penny. The quality is exceptional."',
      name: 'Michael Roberts',
      role: 'Graphic Designer',
      initials: 'MR'
    },
    {
      text: '"The Color Theory Mastery eBook helped me understand color relationships in a way I never had before. Highly recommended!"',
      name: 'Amanda Davis',
      role: 'UI/UX Designer',
      initials: 'AD'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Customers Say</h2>
          <p>Don't just take our word for it - hear from some of our satisfied customers.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.initials}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;