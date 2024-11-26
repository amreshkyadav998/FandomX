import React, { useRef } from 'react';
import './Coaching.css';

const venues = [
  {
    image: "/assets/coach1.jpg",
    name: "Coach Sherfone Gayle",
    tag: "Cricket Ground",
    sport: "Cricket",
    location: "Bangalore",
  },
  {
    image: "/assets/coach2.jpg",
    name: "Coach Amit Verma",
    tag: "Sec 9 GGN",
    sport: "Cricket",
    location: "Delhi NCR",
  },
  {
    image: "/assets/coach3.jpg",
    name: "Coach Suresh Kumar",
    tag: "Cricket Stadium at Shamshabad",
    sport: "Cricket",
    location: "Hyderabad",
  },
  {
    image: "/assets/coach4.jpg",
    name: "Coach Priya Singh",
    tag: "Badminton Academy",
    sport: "Badminton",
    location: "Delhi NCR",
  },
  {
    image: "/assets/coach5.jpg",
    name: "Coach Rajesh Gupta",
    tag: "Badminton Academy",
    sport: "Badminton",
    location: "Delhi NCR",
  },
  {
    image: "/assets/coach6.jpg",
    name: "Coach Kavita Patil",
    tag: "Badminton Academy",
    sport: "Badminton",
    location: "Delhi NCR",
  },
  {
    image: "/assets/coach7.jpg",
    name: "Coach Ankit Rao",
    tag: "Badminton Academy",
    sport: "Badminton",
    location: "Delhi NCR",
  },
];

const Coaching = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="coaching-container">
      <h2 className="coaching-title">Coaches for Growth</h2>
      <div className="coaching-wrapper" ref={scrollRef}>
        {venues.map((venue, index) => (
          <div key={index} className="coaching-card">
            <div className="relative">
              <span className="absolute top-2 left-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                {venue.sport}
              </span>
              <img src={venue.image} alt={venue.name} className="coaching-image" />
            </div>
            <div className="coaching-card-content">
              <h3 className="coaching-title-text">{venue.name}</h3>
              <span className="coaching-tag">{venue.tag}</span>
              <p className="coaching-location">{venue.location}</p>
              <button className="coaching-book-button cursor-pointer">Book Now</button>
            </div>
          </div>
        ))}
      </div>
      <button className="coaching-scroll-button coaching-scroll-left" onClick={scrollLeft}>
        <span className="material-icons">chevron_left</span>
      </button>
      <button className="coaching-scroll-button coaching-scroll-right" onClick={scrollRight}>
        <span className="material-icons">chevron_right</span>
      </button>
    </div>
  );
};

export default Coaching;
