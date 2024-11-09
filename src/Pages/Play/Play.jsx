import React, { useState } from 'react';
import Venues from './Venues/Venues';
import './Play.css';
import Coaching from './Coaching/Coaching';
import Tournament from './Tournament/Tournament';
import FindPlayers from './FindPlayers/FindPlayers';

const Play = () => {
  const [selectedTab, setSelectedTab] = useState("Venues");

  const tabs = ["Venues", "Coaching", "Tournaments", "Find Players"];

  // Scroll to the section when a tab is clicked
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    const section = document.getElementById(tab.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className='play_container '>
      <div
        className="relative pt-32 pb-16 bg-center bg-cover flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/assets/sports_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="text-white text-4xl font-bold z-10">BOOK YOUR SPORTS</h2>
        
        <div className="flex justify-center space-x-6 mt-6 z-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-black text-lg pb-2 cursor-pointer ${
                selectedTab === tab ? 'border-b-4 border-red-500' : ''
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex items-center bg-white rounded-lg shadow-lg p-4 mt-8 space-x-4 z-10 w-11/12 lg:w-2/3">
          <div className="flex items-center space-x-2">
            <span className="material-icons text-gray-500">place</span>
            <select className="bg-transparent text-gray-700 focus:outline-none">
              <option>Delhi NCR, Delhi</option>
              <option>Mumbai</option>
              <option>Bengaluru</option>
              <option>Delhi NCR, Delhi</option>
              <option>Mumbai</option>
              <option>Bengaluru</option>
              <option>Delhi NCR, Delhi</option>
              <option>Mumbai</option>
              <option>Bengaluru</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons text-gray-500">sports_soccer</span>
            <select className="bg-transparent text-gray-700 focus:outline-none">
              <option>Select Sport</option>
              <option>Football</option>
              <option>Cricket</option>
              <option>Hockey</option>
              <option>Kabaddi</option>
              <option>Golf</option>
              <option>Rugby</option>
              <option>Javelin</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons text-gray-500">calendar_today</span>
            <input type="date" className="bg-transparent text-gray-700 focus:outline-none" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="material-icons text-gray-500">view_list</span>
            <select className="bg-transparent text-gray-700 focus:outline-none">
              <option>List view</option>
              <option>Grid view</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold cursor-pointer">Search</button>
        </div>
      </div>

      {/* Sections */}
      <div id="venues" className="pt-20">
        <Venues />
      </div>
      <div id="coaching" className="pt-20">
        <Coaching/>
      </div>
      <div id="tournaments" className="pt-20">
        <Tournament/>
      </div>
      <div id="find players" className="pt-20">
        <FindPlayers/>
      </div>
    </div>
  );
};

export default Play;
