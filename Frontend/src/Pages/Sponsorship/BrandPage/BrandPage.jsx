import React from "react";
import "./BrandPage.css";
import Boxx from "../Boxx/Boxx";

// Sample article data
const articles = [
  {
    id: 1,
    title: "MLB Marketing Partnerships 2024",
    date: "October 24, 2024",
  },
  {
    id: 2,
    title: "Savvy Brands Increasingly Tap Top Creators to Engage Key Audiences",
    date: "November 6, 2024",
  },
  {
    id: 3,
    title: "October’s Hottest Brands Have Arrived!",
    date: "November 4, 2024",
  },
];

function BrandPage() {
  return (
    <div className="brandPage-container">
      <h1 className="page-heading">FEATURED REPORTS & LATEST INSIGHTS</h1>
      <div className="main-section">
        <img
          src="/assets/nsp9.png" 
          alt="Featured Article"
          className="main-image"
        />
        <div className="article-content">
          <p className="article-date">November 6, 2024</p>
          <h2 className="article-title">
            Savvy Brands Increasingly Tap Top Creators to Engage Key Audiences
          </h2>
          <a href="/" className="learn-more">
            Learn more ➔
          </a>
        </div>
      </div>

      <div className="sidebar">
        {articles.map((article) => (
          <div className="sidebar-card" key={article.id}>
            <h3 className="sidebar-title">{article.title}</h3>
            <p className="sidebar-date">{article.date}</p>
          </div>
        ))}
      </div>
       {/* boxx page */}
    <Boxx/>
    </div>
  );
}

export default BrandPage;
