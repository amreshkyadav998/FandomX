// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { details } from './details.js'; // Importing the data for sports

// function SportDetails() {
//   // Get the sport ID from the URL
//   const { id } = useParams();
  
//   // Find the sport that matches the given ID
//   const sport = details.find(item => item.id === parseInt(id, 10));

//   // If no sport matches the ID, display an error message
//   if (!sport) {
//     return <p>Sport not found.</p>;
//   }

//   // Display the sport details
//   return (
//     <section className="flex flex-col items-center bg-[var(--bg-color)] text-[var(--text-color)] pt-120">
//       <h2 className="text-3xl font-bold mb-4">{sport.sports_name}</h2>
      
//       {/* Display all images */}
//       <div className="mb-6">
//         {sport.images.map((image, index) => (
//           <img
//             key={index}
//             src={image} // Using the sport's image
//             alt={sport.sports_name}
//             className="w-full h-[300px] mb-4 rounded-lg shadow-lg object-cover"
//           />
//         ))}
//       </div>

//       <p className="text-lg mb-2">{sport.description}</p> {/* Displaying sport description */}
//       <p className="text-lg mb-2"><strong>Tickets:</strong> {sport.tickets}</p> {/* Ticket status */}
//       <p className="text-lg mb-2"><strong>Series:</strong> {sport.series}</p> {/* Series name */}
//       <p className="text-lg mb-2"><strong>Matches:</strong> {sport.matches}</p> {/* Number of matches */}
//     </section>
//   );
// }

// export default SportDetails;

import React from 'react';
import { useParams } from 'react-router-dom';
import { details } from './details.js'; // Importing the data for sports
import ReactCardSlider from "react-card-slider-component"; // Ensure this library is installed
import './SportDetails.css';
import images from './images/images.js';
import CustomCarousel from './customSlider/custom.slider.jsx';

function SportDetails() {
  // Get the sport ID from the URL
  const { id } = useParams();

  // Find the sport that matches the given ID
  const sport = details.find(item => item.id === parseInt(id, 10));

  // If no sport matches the ID, display an error message
  if (!sport) {
    return <p>Sport not found.</p>;
  }

  const sliderClick = (slide) => {
    alert(`You clicked on: ${slide.title}`);
  };

  const slides = [
    {
      image: "/assets/tt1.jpg",
      title: (
        <div className='flex text-black items-center space-x-4 rounded-lg p-2'>
          <div className='flex flex-col items-center text-red-600'>
            <h1 className='text-3xl font-bold mt-3'>04</h1>
            <h4 className='text-lg uppercase -mt-6'>Nov</h4>
          </div>
          <div>
            <div className="text-xl font-semibold">Mumbai City FC VS Bengaluru FC ISL</div>
            <div className="text-sm text-cadetblue">07:30 PM Bengaluru</div>
          </div>
        </div>
      ),
      clickEvent: () => sliderClick({ title: "Mumbai City FC VS Bengaluru FC ISL" }),
    },
    {
      image: "/assets/tt2.jpg",
      title: (
        <div className='flex text-black items-center space-x-4 rounded-lg p-2'>
          <div className='flex flex-col items-center text-red-600'>
            <h1 className='text-3xl font-bold mt-3'>05</h1>
            <h4 className='text-lg uppercase -mt-6'>Nov</h4>
          </div>
          <div>
            <div className="text-xl font-semibold">Argentina vs Portugal football</div>
            <div className="text-sm text-cadetblue">08:00 PM England</div>
          </div>
        </div>
      ),
      clickEvent: () => sliderClick({ title: "Argentina vs Portugal football" }),
    },
    {
      image: "/assets/tt3.jpg",
      title: (
        <div className='flex text-black items-center space-x-4 rounded-lg p-2'>
          <div className='flex flex-col items-center text-red-600'>
            <h1 className='text-3xl font-bold mt-3'>06</h1>
            <h4 className='text-lg uppercase -mt-6'>Nov</h4>
          </div>
          <div>
            <div className="text-xl font-semibold">RCB V/S MI</div>
            <div className="text-sm text-cadetblue">06:30 PM Mumbai</div>
          </div>
        </div>
      ),
      clickEvent: () => sliderClick({ title: "RCB V/S MI" }),
    },
    {
      image: "/assets/tt4.jpg",
      title: (
        <div className='flex text-black items-center space-x-4 rounded-lg p-2'>
          <div className='flex flex-col items-center text-red-600'>
            <h1 className='text-3xl font-bold mt-3'>07</h1>
            <h4 className='text-lg uppercase -mt-6'>Nov</h4>
          </div>
          <div>
            <div className="text-xl font-semibold">India V/S England</div>
            <div className="text-sm text-cadetblue">05:00 PM London</div>
          </div>
        </div>
      ),
      clickEvent: () => sliderClick({ title: "India V/S England" }),
    },
    {
      image: "/assets/tt5.jpg",
      title: (
        <div className='flex text-black items-center space-x-4 rounded-lg p-2'>
          <div className='flex flex-col items-center text-red-600'>
            <h1 className='text-3xl font-bold mt-3'>08</h1>
            <h4 className='text-lg uppercase -mt-6'>Nov</h4>
          </div>
          <div>
            <div className="text-xl font-semibold">India V/S Iran</div>
            <div className="text-sm text-cadetblue">03:30 PM Tehran</div>
          </div>
        </div>
      ),
      clickEvent: () => sliderClick({ title: "India V/S Iran" }),
    },
    {
      image: "/assets/t2.png",
      title: (
        <div className='flex text-black items-center space-x-4 rounded-lg p-2'>
          <div className='flex flex-col items-center text-red-600'>
            <h1 className='text-3xl font-bold mt-3'>09</h1>
            <h4 className='text-lg uppercase -mt-6'>Nov</h4>
          </div>
          <div>
            <div className="text-xl font-semibold">Fifth Title Event</div>
            <div className="text-sm text-cadetblue">04:00 PM Delhi</div>
          </div>
        </div>
      ),
      clickEvent: () => sliderClick({ title: "Fifth Title Event" }),
    },
    {
      image: "https://picsum.photos/800/700",
      title: (
        <div className='flex text-black items-center space-x-4 rounded-lg p-2'>
          <div className='flex flex-col items-center text-red-600'>
            <h1 className='text-3xl font-bold mt-3'>10</h1>
            <h4 className='text-lg uppercase -mt-6'>Nov</h4>
          </div>
          <div>
            <div className="text-xl font-semibold">Sixth Title Event</div>
            <div className="text-sm text-cadetblue">05:30 PM Paris</div>
          </div>
        </div>
      ),
      clickEvent: () => sliderClick({ title: "Sixth Title Event" }),
    },
    {
      image: "https://picsum.photos/300/400",
      title: (
        <div className='flex text-black items-center space-x-4 rounded-lg p-2'>
          <div className='flex flex-col items-center text-red-600'>
            <h1 className='text-3xl font-bold mt-3'>11</h1>
            <h4 className='text-lg uppercase -mt-6'>Nov</h4>
          </div>
          <div>
            <div className="text-xl font-semibold">Seventh Title Event</div>
            <div className="text-sm text-cadetblue">06:00 PM Tokyo</div>
          </div>
        </div>
      ),
      clickEvent: () => sliderClick({ title: "Seventh Title Event" }),
    },
  ];

  // Display the sport details
  return (
    <div className="slider-container px-4 lg:px-36 py-10">
      <CustomCarousel>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomCarousel>
      <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-black text-center mt-5 bg-[cadetblue] rounded-md p-5">
        {sport.sports_name}
      </h1>
      <ReactCardSlider slides={slides} />
      <button className="ticket-button">Buy Ticket</button> {/* Button added here */}
    </div>
  );
}

export default SportDetails;

