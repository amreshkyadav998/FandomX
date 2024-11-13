import React from 'react';
import './Sponsorship.css';
import SponsorshipPage from './SponsorshipPage/SponsorshipPage';

const Sponsorship = () => {
  return (
    <div className='pt-[111px] bg-gray-100'>
      <div className='sponsorship-container'>
        <div className='sponsorship-content'>
          <h2 className='sponsorship-heading'>Ready to ...</h2>
          <ul className='sponsorship-list'>
            <li>Save time on competitive intelligence</li>
            <li>Negotiate the right partnerships</li>
            <li>Discover opportunities for brand growth</li>
            <li>Optimize your marketing strategy</li>
          </ul>
          <p className='sponsorship-subtext'>We've got you covered!</p>
          <button className='sponsorship-button'>See for yourself →</button>
        </div>
        <div className='sponsorship-image-container'>
          <img
            src="/assets/nsp1.png"
            alt="NBA Play-In Tournament"
            className='sponsorship-image'
          />
        </div>
      </div>
      <div className='bg-[#F2F2F5]'>
      <SponsorshipPage/>
      </div>
    </div>
  );
};

export default Sponsorship;



// import React from 'react';
// import Slider from 'react-slick';
// import './Sponsorship.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Sponsorship = () => {
//   const logoSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <div className="sponsorship-page">
//       {/* Hero Banner Section */}
//       <div className="hero-banner">
//         <h1 className="hero-heading">Empower Your Brand with FandomX</h1>
//         <p className="hero-description">Partner with us and reach a passionate audience of sports fans.</p>
//         <button className="cta-button">Become a Sponsor</button>
//       </div>

//       {/* Sponsorship Categories */}
//       <div className="categories-section">
//         <div className="category">
//           <h2>Event Sponsorship</h2>
//           <p>Get your brand front and center at top sports events.</p>
//           <img src="/assets/sp1.jpg" alt="Event Sponsorship" />
//         </div>
//         <div className="category">
//           <h2>Team Sponsorship</h2>
//           <p>Showcase your brand with professional and amateur teams.</p>
//           <img src="/assets/sp2.jpg" alt="Team Sponsorship" />
//         </div>
//         <div className="category">
//           <h2>Digital Campaigns</h2>
//           <p>Engage with fans through social media and online campaigns.</p>
//           <img src="/assets/sp3.jpg" alt="Digital Campaigns" />
//         </div>
//       </div>
//       <div className='bg-gray-100 items-center text-center p-8'>
//       <h1 className='mb-[18px]'> Sponsors Associated With Us</h1>
//       </div>

//       {/* Logo Carousel */}
//       <div className="logo-carousel">
//         <Slider {...logoSettings}>
//           <div><img src="/assets/sl.svg" alt="Sponsor 1" className="logo" /></div>
//           <div><img src="/assets/sl1.svg" alt="Sponsor 2" className="logo" /></div>
//           <div><img src="/assets/sl2.svg" alt="Sponsor 3" className="logo" /></div>
//           <div><img src="/assets/sl3.svg" alt="Sponsor 4" className="logo" /></div>
//           <div><img src="/assets/sl4.svg" alt="Sponsor 5" className="logo" /></div>
//           <div><img src="/assets/sl5.svg" alt="Sponsor 6" className="logo" /></div>
//           <div><img src="/assets/sl6.svg" alt="Sponsor 7" className="logo" /></div>
//           <div><img src="/assets/sl7.svg" alt="Sponsor 8" className="logo" /></div>
//         </Slider>
//       </div>

//       {/* Advantages Section */}
//       <div className="advantages-section">
//         <h2 className="section-heading">The Advantages</h2>
//         <div className="advantages">
//           <div className="sports-people">
//             <h3>FOR SPORTS PEOPLE</h3>
//             <ul>
//               <li>Easy registration</li>
//               <li>Free sponsorship profile</li>
//               <li>Higher visibility to sponsors</li>
//               <li>Increased sponsorship revenues</li>
//             </ul>
//             <button>Learn more</button>
//           </div>
//           <div className="sponsors">
//             <h3>FOR SPONSORS</h3>
//             <ul>
//               <li>Vast choice of sponsorship opportunities</li>
//               <li>Targeted sponsorship selection</li>
//               <li>Just sponsorship costs - no additional fees</li>
//               <li>Emotional marketing environment</li>
//             </ul>
//             <button>Learn more</button>
//           </div>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="contact-section">
//         <h2>Interested in Sponsorship?</h2>
//         <p>Contact us to learn more about our sponsorship packages and opportunities.</p>
//         <button className="contact-button">Contact Us</button>
//       </div>

//       {/* Uploaded Image Section */}
//       <div className="uploaded-image-section bg-gray-100">
//         <img src="/assets/banner.jpg" alt="Advantages Section" />
//       </div>
//     </div>
//   );
// };

// export default Sponsorship;
