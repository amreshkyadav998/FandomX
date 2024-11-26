import React from 'react'
import './Choose.css'
import aboutImage from "/assets/s5.jpg";

const Choose = () => {
  return (
    <div>
         <section id="about" className="about">
        <div className="about-img" data-aos="zoom-in-down">
          <img src={aboutImage} alt="About Us" />
        </div>

        <div className="about-content" data-aos="zoom-in-up">
          <h2 className="heading">Why <span>Choose</span> Us?</h2>
          <p>
            FandomX is a sports platform offering ticket booking, venue
            reservations, sponsorships, and sports merchandise. It streamlines
            access to sports services for fans and event organizers. The
            platform enhances the fan experience by providing a comprehensive,
            all-in-one solution.
          </p>
          <p>Seamless ticket booking for sports events.</p>
          <p>Convenient venue reservations for organizers.</p>
          <p>Access to sponsorship opportunities in one platform.</p>
          <p>Wide range of sports merchandise for fans.</p>
          <p>User-friendly interface for an all-in-one sports experience.</p>
          <a href="#" className="btn">
            Book A Free Class
          </a>
        </div>
      </section>
    </div>
  )
}

export default Choose;