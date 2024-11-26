import React from 'react';
import './Sports_tour.css';
import CustomCarousel from './customSlider/custom.slider';
import images from './images.js';
import { div } from 'framer-motion/client';
import SportTour from './SportTourSlider/SportTour.jsx';
import SomeDetail from './someDetail/someDetail.jsx';

const Sports_tour = () => {
  return (
    <div className='bg-gray-100 p-8 text-black'>
    <div className=" shadow-lg rounded-lg overflow-hidden sports_tour_container">
      <CustomCarousel>
        {images.map((image, index) => (
          <a href={image.linkURL} key={index} className="relative h-[492px] w-full block">
            <img
              className="h-full w-full object-cover"
              src={image.imgURL}
              alt={image.imgAlt}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 px-4">
              <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-2 text-center text-shadow title">
                {image.title}
              </h1>
              <h3 className="text-white text-xl md:text-2xl mb-2 text-center font-semibold text-shadow subtitle">
                {image.subtitle}
              </h3>
              <h2 className="text-white text-2xl md:text-3xl font-bold text-center text-shadow description">
                {image.description}
              </h2>
            </div>
          </a>
        ))}
      </CustomCarousel>
      <SportTour/>
      <SomeDetail images="/assets/sd.webp" />
      <SomeDetail images="/assets/sd2.jpeg"/>
      <SomeDetail images="/assets/sd2.jpeg"/>
    </div>
    </div>
  );
};

export default Sports_tour;
