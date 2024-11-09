import React from 'react';
import './Shopping.css';
import CustomCarousel from './customSlider/custom.slider.jsx';
import images from './images.js';
import ShoppingCardSlider from './ShoppingCardSlider/ShoppingCardSlider.jsx';

// Sample data for leagues
const leagues = [
  { name: "NFL", logo: "/assets/ss14.png" },
  { name: "College", logo: "/assets/ss2.avif" },
  { name: "MLB", logo: "/assets/ss3.avif" },
  { name: "NBA", logo: "/assets/ss4.avif" },
  { name: "NHL", logo: "/assets/ss5.svg" },
  { name: "MLS", logo: "/assets/ss6.svg" },
  { name: "Soccer", logo: "/assets/ss7.svg" },
  { name: "WWE", logo: "/assets/ss8.svg" },
  { name: "WNBA", logo: "/assets/ss9.svg" },
  { name: "Golf", logo: "/assets/ss10.svg" },
  { name: "NASCAR", logo: "/assets/ss13.svg" },
  { name: "F1", logo: "/assets/ss12.avif" },
];

const Shopping = () => {
  return (
    // bg-gray-100
    <div className="bg-gray-100 p-8 text-black pt-[120px]">  
      {/* League Circles Section */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-semibold text-black">Shop Your Favorite Cloths</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {leagues.map((league, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
              <img
                src={league.logo}
                alt={league.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-center text-lg font-medium mt-3">{league.name}</p>
          </div>
        ))}
      </div>

      {/* Carousel Section */}
      <div className="shadow-lg rounded-lg overflow-hidden mt-8">
        <CustomCarousel>
          {images.map((image, index) => (
            <img className='h-[492px] w-full object-cover' key={index} src={image.imgURL} alt={image.imgAlt} />
          ))}
        </CustomCarousel>
      </div>
      {/* Shopping Card Slider */}
      <ShoppingCardSlider/>
      <ShoppingCardSlider/>

      {/* New Banner */}
      <div className="shadow-lg rounded-lg overflow-hidden mt-8 transition-all duration-700 ease-in-out">
  <img
    className='h-[492px] w-full object-cover transition-transform duration-200 ease-in-out'
    src="/assets/s2.webp"
    alt=""
  />
</div>
{/* Shopping Card Slider */}
<ShoppingCardSlider/>
<ShoppingCardSlider/>
    </div>
  );
};

export default Shopping;
