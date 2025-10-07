import React from 'react';

const Ebooks = () => {
  const ebooks = [
    {
      icon: 'fas fa-book-open',
      title: 'Modern Web Design',
      description: 'A comprehensive guide to creating stunning websites with modern design principles.',
      price: '$29'
    },
    {
      icon: 'fas fa-palette',
      title: 'Color Theory Mastery',
      description: 'Learn how to use color effectively in your designs with this in-depth guide.',
      price: '$24'
    },
    {
      icon: 'fas fa-font',
      title: 'Typography Essentials',
      description: 'Master the art of typography and create beautiful text layouts for any project.',
      price: '$27'
    }
  ];

  return (
    <section className="ebooks">
      <div className="container">
        <div className="section-title">
          <h2>Featured Books</h2>
          <p>Check out our most popular design resources and Books.</p>
        </div>
        <div className="ebooks-grid">
          {ebooks.map((ebook, index) => (
            <div key={index} className="ebook-card">
              <div className="ebook-image">
                <i className={ebook.icon}></i>
              </div>
              <div className="ebook-content">
                <h3>{ebook.title}</h3>
                <p>{ebook.description}</p>
                <div className="ebook-price">
                  <span className="price">{ebook.price}</span>
                  <button className="btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ebooks;