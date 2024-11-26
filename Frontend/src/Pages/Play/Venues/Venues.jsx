import React, { useRef } from 'react';
import './Venues.css';

const venues = [
  {
    image: "/assets/s1.jpg",
    title: "Chinnaswamy Cricket Ground",
    tag: "Cricket Ground",
    location: "Bangalore",
  },
  {
    image: "/assets/v1.jpg",
    title: "Sports Arena",
    tag: "Sec 9 GGN",
    location: "Delhi NCR",
  },
  {
    image: "/assets/v2.png",
    title: "Humming Bird 🏏 Stadium",
    tag: "Cricket Stadium at Shamshabad",
    location: "Hyderabad",
  },
  {
    image: "/assets/v3.jpeg",
    title: "Surjit Singh 🏸 Academy",
    tag: "Badminton Academy",
    location: "Delhi NCR",
  },{
    image: "/assets/v3.jpeg",
    title: "Surjit Singh 🏸 Academy",
    tag: "Badminton Academy",
    location: "Delhi NCR",
  },{
    image: "/assets/v3.jpeg",
    title: "Surjit Singh 🏸 Academy",
    tag: "Badminton Academy",
    location: "Delhi NCR",
  },{
    image: "/assets/v3.jpeg",
    title: "Surjit Singh 🏸 Academy",
    tag: "Badminton Academy",
    location: "Delhi NCR",
  },
  // Add more venue objects as needed
];

const Venues = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="venues-container">
      <h2 className="venues-title">FEATURED SPORTS VENUE & EVENTS</h2>
      <div className="venues-wrapper" ref={scrollRef}>
        {venues.map((venue, index) => (
          <div key={index} className="venue-card">
            <img src={venue.image} alt={venue.title} className="venue-image" />
            <div className="venue-card-content">
              <h3 className="venue-title">{venue.title}</h3>
              <span className="venue-tag">{venue.tag}</span>
              <p className="venue-location">{venue.location}</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
      <button className="scroll-button scroll-left" onClick={scrollLeft}>
        <span className="material-icons">chevron_left</span>
      </button>
      <button className="scroll-button scroll-right" onClick={scrollRight}>
        <span className="material-icons">chevron_right</span>
      </button>
    </div>
  );
};

export default Venues;
