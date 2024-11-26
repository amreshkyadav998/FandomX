import React from 'react';
import './SportTour.css';

const SportTour = () => {
  // Card data with new titles, descriptions, dates, and prices
  const cardData = [
    {
      title: "Charleston Open",
      description: "CHARLESTON OPEN 2025 - FINAL ROUNDS",
      date: "April 3 - 6, 2025",
      price: "$150",
      imageUrl: "/assets/st1.jpg",
    },
    {
      title: "Formula 1 Singapore Grand Prix 2025",
      description: "Experience the thrill of the night race!",
      date: "September 20 - 22, 2025",
      price: "$450",
      imageUrl: "/assets/st2.png",
    },
    {
      title: "Portugal Golf Tour Lisbon/Faro (10N/11D)",
      description: "Enjoy a stunning golf journey through Portugal.",
      date: "May 15 - 25, 2025",
      price: "$2,000",
      imageUrl: "/assets/st3.jpg",
    },
    {
      title: "Wimbledon 2025 - First Round",
      description: "Catch the first round of the legendary tournament.",
      date: "June 28 - July 1, 2025",
      price: "$200",
      imageUrl: "/assets/wimbeldon.jpg",
    },
    {
      title: "US Open 2025",
      description: "The biggest tennis event in the US awaits!",
      date: "August 28 - September 10, 2025",
      price: "$300",
      imageUrl: "/assets/us.jpg",
    },
    {
      title: "13 Days Golf In Thailand And Laos",
      description: "Explore beautiful courses in Thailand and Laos.",
      date: "October 1 - 13, 2025",
      price: "$2,500",
      imageUrl: "/assets/golf.jpg",
    },
    {
      title: "Rio de Janeiro Carnival Experience",
      description: "Join the biggest party on Earth!",
      date: "February 10 - 14, 2025",
      price: "$1,200",
      imageUrl: "/assets/rio.jpg",
    },
    {
      title: "NBA Playoffs and Finals",
      description: "Witness the excitement of the playoffs live!",
      date: "April 15 - June 10, 2025",
      price: "$600",
      imageUrl: "/assets/nba.jpg",
    },
    {
      title: "NBA Playoffs and Finals",
      description: "Witness the excitement of the playoffs live!",
      date: "April 15 - June 10, 2025",
      price: "$600",
      imageUrl: "/assets/st3.jpg",
    }
  ];

  return (
    <div className="tour-section">
      <h2 className="tour-heading">Exciting Sports Tours Await You!</h2>
      <div className="tour-container">
        {cardData.map((card, index) => (
          <div className="tour-card" key={index}>
            <div className="tour-image" style={{ backgroundImage: `url(${card.imageUrl})` }}></div>
            <div className="tour-content">
              <a href="#">
                <span className="tour-title">{card.title}</span>
              </a>
              <p className="tour-desc">{card.description}</p>
              <p className="tour-date">Date: {card.date}</p>
              <p className="tour-price">Price: {card.price}</p>
              <a className="tour-action" href="#">
                Buy Tickets
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportTour;
