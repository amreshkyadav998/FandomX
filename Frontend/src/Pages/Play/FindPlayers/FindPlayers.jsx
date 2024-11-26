import React from 'react';

const FindPlayers = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center text-black mb-6">
        Find Players
      </h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <div className="w-full md:w-1/2">
          <img src="/assets/sp4.jpg" alt="Find Players" className="w-full h-auto rounded-lg shadow-md"/>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            Looking for players to join your team or sports activity? Use our Find Players feature to connect with individuals
            who share the same passion for your sport. Post your requirement and connect with local players easily.
          </p>
          <button className="cursor-pointer bg-red-600 text-white py-3 px-6 rounded-lg mt-4 font-semibold hover:bg-red-700 transition duration-200">
            Find Players
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindPlayers;
