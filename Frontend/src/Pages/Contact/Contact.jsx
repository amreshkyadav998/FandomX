import { div } from "framer-motion/client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0wlxxtq', 'template_1vxaqzh', form.current, 'gzsVHhFK22hgjHEQS')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Application submitted successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-title">
          Join FandomX – Your Ultimate Sports Platform
        </h2>
        <p className="contact-subtitle">
          FandomX is the go-to destination for everything sports! Whether you're looking to book tickets, secure a venue, or get involved in sponsorships, FandomX has it all. Our mission is to bring fans and sports enthusiasts together in an interactive and seamless way.
        </p>

        <div className="contact-sections">
          <div className="contact-left">
            <h3 className="contact-subheading">
              Why FandomX is the Best Sports Platform for You?
            </h3>
            <ul className="contact-list">
              <li>🎟️ <span>Event Ticket Booking</span>: Secure tickets for your favorite sports events with just a few clicks.</li>
              <li>🏟️ <span>Venue Booking</span>: Need a place for your event or training? Our platform helps you find and book the perfect venue.</li>
              <li>💼 <span>Sponsorship Opportunities</span>: Connect with brands and businesses for exclusive sponsorships and collaborations.</li>
              <li>📈 <span>Sponsorship Analytics</span>: Track your sponsorship campaigns and understand your audience through our comprehensive analytics.</li>
              <li>🛒 <span>Sports Ecommerce</span>: Shop for sports merchandise, equipment, and fan gear from your favorite teams and brands.</li>
              <li>🎮 <span>Fantasy Leagues</span>: Engage with our daily fantasy leagues, where you can compete with other fans and win big prizes.</li>
            </ul>
            <h3 className="contact-subheading">How FandomX Works</h3>
            <p>
              At FandomX, we provide a seamless experience for both sports fans and organizers. Here's how it works:
              <ol className="contact-steps">
                <li><strong>Sign Up</strong>: Create an account to get access to all our services.</li>
                <li><strong>Browse Events</strong>: Explore upcoming sports events and purchase tickets or register your venue.</li>
                <li><strong>Participate</strong>: Engage with your favorite sports teams, buy merchandise, or join our fantasy leagues.</li>
                <li><strong>Track Performance</strong>: Analyze sponsorship opportunities and track your team’s performance via our platform.</li>
              </ol>
            </p>
          </div>

          <div className="contact-right">
            <h3 className="contact-right-title">Get Involved with FandomX</h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <input type="text" placeholder="Name*" name="from_name" className="contact-input w-full" required />
              <input type="text" placeholder="Phone" name="phone" className="contact-input" />
              <input type="email" placeholder="Email*" name="from_email" className="contact-input" required />
              <input type="text" placeholder="City" name="City" className="contact-input" required />
              <input type="text" placeholder="Linkedin URL" name="Linkedin" className="contact-input" />
              <input type="text" placeholder="Resume Drive Link" name="Drive" className="contact-input" />
              <textarea placeholder="Cover Letter or Message" name="Message" className="contact-textarea" required></textarea>
              <button type="submit" className="contact-submit-button">
                Submit Application
              </button>
            </form>
          </div>
        </div>

        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>If you have any questions or want to learn more about FandomX, reach out to us:</p>
          <p>📧 Email: <input value="venturewhiz@gmail.com" readOnly className="contact-email-input" /></p>
          <p>📞 Phone: +1 (800) 123-4567</p>
          <p>🌍 Address: Ceceil St Singapore, NY 10001</p>
          <div className="contact-download">
            <p>Download the FandomX App:</p>
            <a href="https://play.google.com/store/apps/details?id=com.fandomx">
              <img src="/assets/playstore.jpg" alt="Google Play" className="contact-store-img" />
            </a>
            <a href="https://apps.apple.com/us/app/fandomx/id1234567890">
              <img src="/assets/apple.jpg" alt="Apple Store" className="contact-store-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
