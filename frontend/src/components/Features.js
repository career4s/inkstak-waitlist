import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-paint-brush',
      title: 'Professional Quality',
      description: 'All our Books are created by industry professionals with years of experience.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Fully Customizable',
      description: 'Experience reading in style with our beautifully crafted custom templates.'
    },
    {
      icon: 'fas fa-download',
      title: 'Instant Purchase',
      description: 'Get immediate access to all resources after purchase with no waiting.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Our  Books</h2>
          <p>We provide high-quality resources designed to help artists and designers create stunning work.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;