// WelcomeSection.js
import React from 'react';

const WelcomeSection = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #FFDAB9, #E0FFFF)',
  };

  const scrollIndicatorStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '24px',
    color: '#333',
    cursor: 'pointer',
  };

  const headingStyle = {
    fontFamily: 'Georgia, serif', // Choose a font-family
    fontWeight: 'normal', // Set font-weight to normal (non-bold)
  };

  const leadTextStyle = {
    fontFamily: 'Arial, sans-serif', // Choose a different font-family for the lead text
  };

  return (
    <section className="vh-100 d-flex align-items-center justify-content-center position-relative" style={gradientStyle}>
      <div className="text-center container">
        <h1 className="display-3 mb-4" style={headingStyle}>
          Welcome to DiabEaseDetect - Your Diabetes Detection System
        </h1>
        <p className="lead mb-5" style={leadTextStyle}>
          Empowering you to monitor and understand your diabetes risk with precision and ease. Take control of your health today.
        </p>
      </div>
      {/* Scroll indicator */}
      <div style={scrollIndicatorStyle}>
        <span>&darr;</span>
      </div>
    </section>
  );
};

export default WelcomeSection;
