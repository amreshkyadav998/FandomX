import React from 'react';

// Sample data stored as objects
const eventData = [
  {
    id: 1,
    date: 'May 2025',
    title: 'Leicester Tigers – Newcastle Falcons',
    image: '/assets/rw1.jpg', // Replace with actual paths
    ticketType: 'GRANDSTAND TICKETS',
    team: 'Leicester Tigers',
    teamLogo: '/assets/rw1.jpg', // Replace with actual paths
  },
  {
    id: 2,
    date: 'June 2025',
    title: 'Team B – Another Match',
    image: '/assets/rw2.jpg',
    ticketType: 'VIP TICKETS',
    team: 'India',
    teamLogo: '/assets/rw2.jpg',
  },{
    id: 3,
    date: 'June 2025',
    title: 'Team B – Another Match',
    image: '/assets/rw7.jpg',
    ticketType: 'GRANDSTAND TICKETS',
    team: 'Australia',
    teamLogo: '/assets/rw3.jpeg',
  },{
    id: 4,
    date: 'June 2025',
    title: 'Team B – Another Match',
    image: '/assets/rw8.jpg',
    ticketType: 'VIP TICKETS',
    team: 'New-Zealand',
    teamLogo: '/assets/rw4.jpeg',
  },{
    id: 5,
    date: 'June 2025',
    title: 'Team B – Another Match',
    image: '/assets/rw5.jpeg',
    ticketType: 'GRANDSTAND TICKETS',
    team: 'England',
    teamLogo: '/assets/rw5.jpeg',
  },{
    id: 6,
    date: 'June 2025',
    title: 'Team B – Another Match',
    image: '/assets/rw6.jpeg',
    ticketType: 'VIP TICKETS',
    team: 'Argentina',
    teamLogo: '/assets/rw6.jpeg',
  },{
    id: 7,
    date: 'June 2025',
    title: 'Team B – Another Match',
    image: '/assets/rw3.jpeg',
    ticketType: 'GRANDSTAND TICKETS',
    team: 'Portuguese',
    teamLogo: '/assets/rw7.jpg',
  },{
    id: 8,
    date: 'June 2025',
    title: 'Team B – Another Match',
    image: '/assets/rw4.jpeg',
    ticketType: 'VIP TICKETS',
    team: 'Afghanistan',
    teamLogo: '/assets/rw8.jpg',
  },{
    id: 9,
    date: 'June 2025',
    title: 'Team B – Another Match',
    image: '/assets/rw9.jpg',
    ticketType: 'GRANDSTAND TICKETS',
    team: 'America',
    teamLogo: '/assets/rw9.jpg',
  },{
    id: 10,
    date: 'June 2025',
    title: 'Team B – Another Match',
    image: '/assets/rw2.jpg',
    ticketType: 'VIP TICKETS',
    team: 'RCB',
    teamLogo: '/assets/rw2.jpg',
  },{
    id: 11,
    date: 'June 2025',
    title: 'Team B – Another Match',
    image: '/assets/rw2.jpg',
    ticketType: 'GRANDSTAND TICKETS',
    team: 'Mumbai Indians',
    teamLogo: '/assets/rw2.jpg',
  },{
    id: 12,
    date: 'June 2025',
    title: 'Team B – Another Match',
    image: '/assets/rw2.jpg',
    ticketType: 'VIP TICKETS',
    team: 'Lucknow Supergiants',
    teamLogo: '/assets/rw2.jpg',
  },
  // Add more entries as needed
];

const EventsPage = ({ searchTeamName }) => {
  // Filter events based on the team name
  const filteredEvents = eventData.filter((event) => {
    return event.team.toLowerCase().includes(searchTeamName.toLowerCase());
  });

  return (
    <div className="p-8 bg-gray-100 grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden flex flex-col max-w-[400px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            style={{ border: '1px solid #e0e0e0' }}
          >
            {/* Image section */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-[250px] object-cover rounded-t-md"
              style={{ borderBottom: '3px solid #f0ad4e' }}
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <p className="text-sm text-red-500 font-semibold">{event.date}</p>
              <h2 className="text-2xl font-bold mt-2 mb-2 text-gray-900">{event.title}</h2>
              <button className="bg-yellow-300 text-black font-bold py-2 px-4 rounded-full mb-4 hover:bg-yellow-400">
                {event.ticketType}
              </button>
              <div className="flex items-center mt-0">
                <img
                  src={event.teamLogo}
                  alt={event.team}
                  className="w-12 h-12 rounded-full mr-3"
                  style={{ border: '2px solid #f0ad4e' }}
                />
                <p className="text-lg text-gray-700 font-medium mt-9">{event.team}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 text-lg">No matching events found.</p>
      )}
    </div>
  );
};

export default EventsPage;
