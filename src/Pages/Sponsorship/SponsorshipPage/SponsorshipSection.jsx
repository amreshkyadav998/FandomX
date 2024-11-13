import React from 'react';
import './Sponsorshippage.css';

const SponsorshipSection = ({ title, content, image, alignment }) => {
  return (
    <div className={`sponsorshipSection-container ${alignment === 'right' ? 'right' : 'left'}`}>
      {alignment === 'left' && (
        <div className="sponsorshipSection-image-container">
          <img src={image} alt="Sponsorship" className="sponsorshipSection-image" />
        </div>
      )}
      <div className="sponsorshipSection-content">
        <h2 className="sponsorshipSection-heading">{title}</h2>
        <ul className="sponsorshipSection-list">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="sponsorshipSection-button">Learn more →</button>
      </div>
      {alignment === 'right' && (
        <div className="sponsorshipSection-image-container">
          <img src={image} alt="Sponsorship" className="sponsorshipSection-image" />
        </div>
      )}
    </div>
  );
};

export default SponsorshipSection;
