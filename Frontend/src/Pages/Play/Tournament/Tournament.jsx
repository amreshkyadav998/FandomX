import React from 'react';

const Tournament = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center text-black mb-6">
        Tournaments
      </h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <div className="w-full md:w-1/2">
          <img src="/assets/tournament.jpg" alt="Tournaments" className="w-full h-auto rounded-lg shadow-md"/>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            Participate in exciting tournaments across multiple sports. Whether you're a seasoned player or a beginner,
            our tournaments provide a platform for all. Choose your sport, register for an upcoming tournament, and compete
            with players from all over the region.
          </p>
          <button className=" cursor-pointer bg-red-600 text-white py-3 px-6 rounded-lg mt-4 font-semibold hover:bg-red-700 transition duration-200">
            View All Tournaments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
