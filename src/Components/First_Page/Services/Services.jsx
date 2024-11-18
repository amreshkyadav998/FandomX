import React from "react";
import "./Services.css";
import image1 from "/assets/s1.jpg";
import image2 from "/assets/ticket1.jpg";
import image3 from "/assets/s3.jpg";
import image4 from "/assets/s4.jpg";
import image5 from "/assets/sp1.jpg";
import aboutImage from "/assets/s5.jpg";
import image6 from "/assets/tournament.jpg";
import image7 from "/assets/wimbeldon.jpg";
import image8 from "/assets/hockey.jpg";
import { NavLink } from "react-router-dom";

const servicesData = [
  { image: image1, alt: "Live Show", title: "Live Shows", Link: "/Live" },
  { image: image2, alt: "Tickets", title: "Tickets", Link: "/Tickets" },
  { image: image3, alt: "Shopping", title: "Shopping", Link: "/Shopping" },
  { image: image4, alt: "Fan Engagement", title: "Fan Engagement", Link: "/Rewards" },
  { image: image5, alt: "Sponsorship", title: "Sponsorships", Link: "/Sponsorships" },
  { image: aboutImage, alt: "Fan Token", title: "Fan Token", Link: "/Rewards" },
  { image: image7, alt: "Tours", title: "Tours", Link: "/sports_tour" },
  { image: image6, alt: "Play", title: "Play", Link: "/Play" },
  { image: image8, alt: "Blog", title: "Blog", Link: "/Blog" },
];

const Services = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <section className="services" id="services">
      <h2 className="heading" data-aos="zoom-in-down">
        What <span>We Do</span>
      </h2>

      <div className="services-content" data-aos="zoom-in-up">
        {servicesData.map((service, index) => (
          <div className="row" key={index}>
            <img src={service.image} alt={service.alt} />
            <NavLink to={service.Link} onClick={handleLinkClick}>
              <h4 className="text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-red-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                {service.title}
              </h4>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
