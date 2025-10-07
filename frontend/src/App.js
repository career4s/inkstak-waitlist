import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Features from './components/Features';
// import Ebooks from './components/Ebooks';
// import Testimonials from './components/Testimonials'; 
import Footer from './components/Footer';
import AboutPage from './About';
import './styles.css';

function App() {
  return (
    <div className="App">
      <AboutPage/>
     {/* <Header />
      <Hero />
      <Features />
       <Ebooks />
      <Testimonials />  */}
      <Footer />
    </div>
  );
}

export default App;