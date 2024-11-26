// BoxxApp.js
import React from 'react';
import './Boxx.css';

const boxxCardData = [
    {
        id: 1,
        category: "Basketball",
        image: "/assets/bx1.png",  // Replace with actual image path
        date: "October 30, 2024",
        title: "New Brands Make Their Mark with NBA Jersey Patches",
        link: "#"
    },
    {
        id: 2,
        category: "SponsorInsights",
        image: "/assets/bx2.png",  // Replace with actual image path
        date: "October 29, 2024",
        title: "Why Freebies Are Key to Winning Over Sports Fans",
        link: "#"
    },
    {
        id: 2,
        category: "SponsorInsights",
        image: "/assets/bx3.png",  // Replace with actual image path
        date: "October 29, 2024",
        title: "Why Freebies Are Key to Winning Over Sports Fans",
        link: "#"
    }
    ,{
        id: 2,
        category: "SponsorInsights",
        image: "/assets/bx4.png",  // Replace with actual image path
        date: "October 29, 2024",
        title: "Why Freebies Are Key to Winning Over Sports Fans",
        link: "#"
    },
    {
        id: 2,
        category: "SponsorInsights",
        image: "/assets/bx2.png",  // Replace with actual image path
        date: "October 29, 2024",
        title: "Why Freebies Are Key to Winning Over Sports Fans",
        link: "#"
    },
    {
        id: 2,
        category: "SponsorInsights",
        image: "/assets/bx2.png",  // Replace with actual image path
        date: "October 29, 2024",
        title: "Why Freebies Are Key to Winning Over Sports Fans",
        link: "#"
    }
];

const Boxx = () => {
    return (
        <div className="boxx-app">
            <div className="boxx-card-container">
                {boxxCardData.map((card) => (
                    <div key={card.id} className="boxx-card">
                        <div
                            className="boxx-card-image"
                            style={{ backgroundImage: `url(${card.image})` }}
                        >
                            <span className="boxx-card-category">{card.category}</span>
                        </div>
                        <div className="boxx-card-content">
                            <p className="boxx-card-date">{card.date}</p>
                            <h3 className="boxx-card-title">{card.title}</h3>
                            <a href={card.link} className="boxx-card-link">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Boxx;
