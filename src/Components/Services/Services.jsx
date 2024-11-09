import React from "react";
// import "./Services.css";
// import image1 from "/assets/s1.jpg";
// import image2 from "/assets/ticket1.jpg";
// import image3 from "/assets/s3.jpg";
// import image4 from "/assets/s4.jpg";
// import image5 from "/assets/match.jpg";
// import aboutImage from "/assets/s5.jpg";
import Home from "../First_Page/Home/Home";
import Services from "../First_Page/Services/Services";
import Accordian from "../First_Page/Accordian/Accordian";
import Choose from "../First_Page/Choose/Choose";
import Review from "../First_Page/Review/Review";

const Services = () => {
  return (
    <div>
      <Home/>
      <Services/>
      <Choose/>
      <Review/>
      <Accordian/>
      
      {/* Header Section */}
      {/* <header>
                <a href="#" className="logo">Royal <span>Fitness</span></a>

                <div className="bx bx-menu" id="menu-icon"></div>

                <ul className="navbar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#plans">Pricing</a></li>
                    <li><a href="#review">Review</a></li>
                </ul>

                <div className="top-btn">
                    <a href="#contact" className="nav-btn">Join Us</a>
                </div>
            </header> */}

      {/* Home Section */}

      {/* <section id="home" className="home">
        <div className="home-content">
          <h3>FandomX</h3>
          <h1>Sports Content</h1>
          <h3>
            <span className="multiple-text"></span>
          </h3>
          <p>
            FandomX is your go-to platform for sports tickets, venue booking,
            sponsorships, and merchandise. Simplifying the sports experience for
            fans and organizers in one place.
          </p>
          <a href="#" className="btn">
            Join Us
          </a>
        </div>

        <div className="home-img" data-aos="zoom-in">
          <img src="/assets/logo.svg" alt="HeroImage" />
        </div>
      </section> */}

      {/* Services Section */}

      {/* <section className="services" id="services">
        <h2 className="heading" data-aos="zoom-in-down">
          Our <span>Services</span>
        </h2>

        <div className="services-content" data-aos="zoom-in-up">
          <div className="row">
            <img src={image1} alt="Physical Fitness" />
            <h4>Live Shows</h4>
          </div>

          <div className="row">
            <img src={image2} alt="Weight Gain" />
            <h4>Tickets</h4>
          </div>

          <div className="row">
            <img src={image3} alt="Strength Training" />
            <h4>Shopping</h4>
          </div>

          <div className="row">
            <img src={image4} alt="Fat Loss" />
            <h4>Fan Engagement</h4>
          </div>

          <div className="row">
            <img src={image5} alt="Weightlifting" />
            <h4>Sponsorship</h4>
          </div>

          <div className="row">
            <img src={aboutImage} alt="Running" />
            <h4>Fan Token</h4>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      {/* <section id="about" className="about">
        <div className="about-img" data-aos="zoom-in-down">
          <img src={aboutImage} alt="About Us" />
        </div>

        <div className="about-content" data-aos="zoom-in-up">
          <h2 className="heading">Why Choose Us?</h2>
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
      </section> */}


      {/* Pricing Section */}
      <section className="plans" id="plans">
        <h2 className="heading" data-aos="zoom-in-down">
          Our <span>Plans</span>
        </h2>

        <div className="plans-content" data-aos="zoom-in-up">
          <div className="box">
            <h3>BASIC</h3>
            <h2>
              <span>$100/Month</span>
            </h2>
            <ul>
              <li>Smart workout plan</li>
              <li>At home workouts</li>
            </ul>
            <a href="#">
              Join Now
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>

          <div className="box">
            <h3>PRO</h3>
            <h2>
              <span>$150/Month</span>
            </h2>
            <ul>
              <li>Pro GYMS</li>
              <li>Smart workout plan</li>
              <li>At home workouts</li>
            </ul>
            <a href="#">
              Join Now
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>

          <div className="box">
            <h3>PREMIUM</h3>
            <h2>
              <span>$300/Month</span>
            </h2>
            <ul>
              <li>ELITE Gyms &amp; Classes</li>
              <li>Pro GYMS</li>
              <li>Smart workout plan</li>
              <li>At home workouts</li>
              <li>Personal Training</li>
            </ul>
            <a href="#">
              Join Now
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Review Section */}
      {/* <section id="review" className="review">
        <div className="review-box">
          <h2 className="heading" data-aos="zoom-in-down">
            <span>Client </span>Reviews
          </h2>

          <div className="wrapper" data-aos="zoom-in-up">
            <div className="review-item">
              <img src="/assets/person_2.jpg" alt="John" />
              <h2>John</h2>
              <div className="rating">
                <i className="bx bxs-star" id="star"></i>
                <i className="bx bxs-star" id="star"></i>
                <i className="bx bxs-star" id="star"></i>
                <i className="bx bxs-star" id="star"></i>
                <i className="bx bxs-star" id="star"></i>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                reiciendis consequatur officia recusandae porro at?
              </p>
            </div>

            <div className="review-item">
              <img src="/assets/person_1.jpg" alt="Steve" />
              <h2>Kethy</h2>
              <div className="rating">
                <i className="bx bxs-star" id="star"></i>
                <i className="bx bxs-star" id="star"></i>
                <i className="bx bxs-star" id="star"></i>
                <i className="bx bxs-star" id="star"></i>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                reiciendis consequatur officia recusandae porro at?
              </p>
            </div>

            <div className="review-item">
              <img src="/assets/person_3.jpg" alt="David" />
              <h2>David</h2>
              <div className="rating">
                <i className="bx bxs-star" id="star"></i>
                <i className="bx bxs-star" id="star"></i>
                <i className="bx bxs-star" id="star"></i>
                <i className="bx bxs-star" id="star"></i>
                <i className="bx bxs-star" id="star"></i>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                reiciendis consequatur officia recusandae porro at?
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
