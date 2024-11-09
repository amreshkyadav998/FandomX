import React from "react";
import "./Services.css";
import image1 from "/assets/s1.jpg";
import image2 from "/assets/ticket1.jpg";
import image3 from "/assets/s3.jpg";
import image4 from "/assets/s4.jpg";
import image5 from "/assets/match.jpg";
import aboutImage from "/assets/s5.jpg";

const servicesData = [
  { image: image1, alt: "Live Show", title: "Live Shows" },
  { image: image2, alt: "Tickets", title: "Tickets" },
  { image: image3, alt: "Shopping", title: "Shopping" },
  { image: image4, alt: "Fan Engagement", title: "Fan Engagement" },
  { image: image5, alt: "Sponsorship", title: "Sponsorship" },
  { image: aboutImage, alt: "Fan Token", title: "Fan Token" },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading" data-aos="zoom-in-down">
        What <span>We Do</span>
      </h2>

      <div className="services-content" data-aos="zoom-in-up">
        {servicesData.map((service, index) => (
          <div className="row" key={index}>
            <img src={service.image} alt={service.alt} />
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
