import React from 'react';
import './Card.css'; // Import the CSS file for the Card component

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src="/assets/2.png" alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
