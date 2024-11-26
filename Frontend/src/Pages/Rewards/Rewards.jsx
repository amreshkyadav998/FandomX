import React, { useState } from "react";
import EventsPage from "./EventsPage/EvenstsPage";
import { Crown, Ticket, Shirt, Gift, Video, Calendar, Users } from "lucide-react";

const RewardsCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
  {
    icon: <Crown size={24} />,
    title: 'PREMIUM',
    backgroundColor: 'rgb(74, 222, 128)',
    activeBackground: 'rgb(34, 197, 94)', // darker green
    textColor: 'black'
  },
  {
    icon: <Ticket size={24} />,
    title: 'TICKETS',
    backgroundColor: 'white',
    activeBackground: '#e1ee7c', // light gray
    textColor: 'black'
  },
  {
    icon: <Shirt size={24} />,
    title: 'MERCHANDISE',
    backgroundColor: 'white',
    activeBackground: '#fb543b',
    textColor: 'black'
  },
  {
    icon: <Gift size={24} />,
    title: 'COLLECTIBLES',
    backgroundColor: 'white',
    activeBackground: '#97A4E3',
    textColor: 'black'
  },
  {
    icon: <Video size={24} />,
    title: 'Exclusive Videos',
    backgroundColor: 'white',
    activeBackground: '#fb545b',
    textColor: 'black'
  },
  {
    icon: <Calendar size={24} />,
    title: 'Events',
    backgroundColor: 'white',
    activeBackground: '#97C8B6',
    textColor: 'black'
  },
  {
    icon: <Users size={24} />, 
    title: 'Fan Meetings',
    backgroundColor: 'white',
    activeBackground: '#97D6C8',
    textColor: 'black'
  }
];



  const handleCategoryClick = (index) => {
    setSelectedCategory(selectedCategory === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem', padding: '0 1rem' }}>
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => handleCategoryClick(index)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            width: '12rem',
            height: '8rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '0.5rem',
            backgroundColor: selectedCategory === index ? category.activeBackground : category.backgroundColor,
            color: category.textColor,
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            transform: selectedCategory === index ? 'scale(1.05)' : 'scale(1)',
          }}
          onMouseOver={(e) => {
            if (selectedCategory !== index) {
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
          }}
          onMouseOut={(e) => {
            if (selectedCategory !== index) {
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
            }
          }}
        >
          <div style={{ marginBottom: '0.5rem' }}>{category.icon}</div>
          <div style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>{category.title}</div>
        </div>
      ))}
    </div>
  );
};

const Rewards = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#e8f5e9', paddingTop: '120px' }}>
      <h1 style={{ fontSize: '48px', margin: '10px 0', color: 'black' }}>
        REWARD YOUR PASSION<span style={{ color: 'red' }}>.</span>
      </h1>
      <p style={{ fontSize: '20px', color: '#666' }}>
        The World's Best Fan Rewards. Exclusively for Fan Token holders.
      </p>
      <div style={{ margin: '20px auto', width: '50%' }}>
        <input
          type="text"
          placeholder="Search by Team Name"
          value={searchInput}
          onChange={handleSearchChange}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
      </div>
      {/* Event and Reward part */}
      <RewardsCategories />
      <EventsPage searchTeamName={searchInput} />

     {/* About Reward and tokens section */}
<div className="reward-section" style={{ padding: '20px', textAlign: 'center', marginTop: '60px' }}>
  <h1 style={{ color: 'black' }}>FandomX Rewards Program</h1>
  <p style={{ color: '#666' }}>
    Welcome to FandomX's Fan Engagement Rewards! We value our dedicated fans and offer exclusive perks for your loyalty and participation.
  </p>
  <div className="what-you-can-earn" style={{ margin: '20px 0' }}>
    <h2 style={{ color: 'black' }}>What You Can Earn:</h2>
    <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto', padding: '0', listStylePosition: 'inside', color: '#666' }}>
      <li><strong>Exclusive Merchandise:</strong> Earn limited-edition FandomX gear.</li>
      <li><strong>VIP Match Tickets:</strong> Get early access to ticket bookings and VIP seating options.</li>
      <li><strong>Discounts on Venue Rentals:</strong> Enjoy discounted rates for event spaces.</li>
      <li><strong>Sponsorship Deals:</strong> Participate in special promotions and sponsorship opportunities.</li>
    </ul>
  </div>
  <button style={{ margin: '20px 0', padding: '10px 20px', borderRadius: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
    Join the Rewards Program
  </button>
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
    <img src="./assets/11.svg" alt="FandomX Reward Graphic" style={{ maxWidth: '100%', height: 'auto', flex: '1 1 200px' }} />
    <img src="./assets/12.svg" alt="FandomX Reward Graphic" style={{ maxWidth: '100%', height: 'auto', flex: '1 1 200px' }} />
    <img src="./assets/13.svg" alt="FandomX Reward Graphic" style={{ maxWidth: '100%', height: 'auto', flex: '1 1 200px' }} />
    <img src="./assets/14.svg" alt="FandomX Reward Graphic" style={{ maxWidth: '100%', height: 'auto', flex: '1 1 200px' }} />
  </div>
</div>

    </div>
  );
};

export default Rewards;
