import React from 'react';

const SomeDetail = ({images}) => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header Section */}
      <h1 className="text-3xl font-bold border border-gray-300 p-4 mb-6">
        Sports Tours Worldwide
      </h1>

      {/* Main Content Container */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <img 
            src={images}
            alt="Sports tour participants in stadium"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 leading-relaxed">
            International sports travel packages provide opportunities for youth teams to 
            travel and compete against sports teams from other countries. Besides 
            participating, the team members and their families or friends can visit the 
            nations, cities, and areas where the matches are held. International sports travel 
            packages offer opportunities to learn in geography, foreign language, sociology, 
            history, art and music of the foreign land.
          </p>
          <button className="text-blue-600 hover:text-blue-800 mt-4 font-medium">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SomeDetail;