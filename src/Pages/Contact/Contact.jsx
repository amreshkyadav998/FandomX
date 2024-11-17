import { div } from "framer-motion/client";
 import React, { useRef } from 'react';
 import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_0wlxxtq', 'template_1vxaqzh', form.current, 'gzsVHhFK22hgjHEQS') // Ensure key is correct
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            alert('Application submitted successfully!');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text); // Print error message for debugging
          }
        );
    };
  return (
    <div style={{ background: "#e8f5e9" }}>
      <div
        style={{
          padding: "50px 0",
          maxWidth: "1200px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
          paddingTop: "120px",
          background: "#e8f5e9",
          color: "gray",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "600",
            marginBottom: "40px",
            color: "black",
          }}
        >
          Join FandomX – Your Ultimate Sports Platform
        </h2>
        <p style={{ textAlign: "center", fontSize: "15px", color: "black", marginBottom: "40px"  }}>
          FandomX is the go-to destination for everything sports! Whether you're looking to book tickets, secure a venue, or get involved in sponsorships, FandomX has it all. Our mission is to bring fans and sports enthusiasts together in an interactive and seamless way.
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          {/* Left Section */}
          <div style={{ flex: "1", minWidth: "400px", paddingRight: "20px" }}>
            <h3 style={{ fontSize: "20px", marginBottom: "30px" }}>
              Why FandomX is the Best Sports Platform for You?
            </h3>
            <ul style={{ listStyle: "none", padding: "0", marginTop: "20px", fontSize: "12px", color: "black" }}>
              <li>🎟️ <span>**Event Ticket Booking**</span>: Secure tickets for your favorite sports events with just a few clicks.</li>
              <li>🏟️ <span>**Venue Booking**</span>: Need a place for your event or training? Our platform helps you find and book the perfect venue.</li>
              <li>💼 <span>**Sponsorship Opportunities**</span>: Connect with brands and businesses for exclusive sponsorships and collaborations.</li>
              <li>📈 <span>**Sponsorship Analytics**</span>: Track your sponsorship campaigns and understand your audience through our comprehensive analytics.</li>
              <li>🛒 <span>**Sports Ecommerce**</span>: Shop for sports merchandise, equipment, and fan gear from your favorite teams and brands.</li>
              <li>🎮 <span>**Fantasy Leagues**</span>: Engage with our daily fantasy leagues, where you can compete with other fans and win big prizes.</li>
            </ul>
            <h3 style={{ fontSize: "20px", marginTop: "30px", color:"#333" }}>How FandomX Works</h3>
            <p className="mt-[12px] gap-9">
              At FandomX, we provide a seamless experience for both sports fans and organizers. Here's how it works:
              <ol style={{ paddingLeft: "20px" }}>
                <li><strong>Sign Up</strong>: Create an account to get access to all our services.</li>
                <li><strong>Browse Events</strong>: Explore upcoming sports events and purchase tickets or register your venue.</li>
                <li><strong>Participate</strong>: Engage with your favorite sports teams, buy merchandise, or join our fantasy leagues.</li>
                <li><strong>Track Performance</strong>: Analyze sponsorship opportunities and track your team’s performance via our platform.</li>
              </ol>
            </p>
          </div>

          {/* Right Section - Apply Form */}
          <div
            style={{
              flex: "1",
              minWidth: "400px",
              paddingLeft: "20px",
              background: "#f9f9f9",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "20px", marginBottom: "20px" }}><span>Get Involved with FandomX</span></h3>
            <form ref={form} onSubmit={sendEmail} style={{ display: "grid", gap: "10px" }}>
              <input type="text" placeholder="Name*" name="from_name" style={inputStyle} required />
              <input type="text" placeholder="Phone" name="phone" style={inputStyle} />
              <input type="email" placeholder="Email*" name="from_email" style={inputStyle} required />
              <input type="text" placeholder="City" name="City" style={inputStyle} required/>
              <input type="text" placeholder="Resume Drive Link" name="Drive" style={inputStyle} />
              <textarea placeholder="Cover Letter or Message" name="Message" style={{ ...inputStyle, height: "100px" }} required></textarea>
              {/* Resume Upload Section */}
              {/* <p>Upload Resume</p> */}
              {/* <input type="file" name="Resume" /> */}
              <button
                type="submit"
                style={{
                  backgroundColor: "#d32f2f",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details Section */}
        <div
          style={{
            marginTop: "50px",
            textAlign: "center",
            backgroundColor: "#f2f2f2",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>Contact Us</h3>
          <p>If you have any questions or want to learn more about FandomX, reach out to us:</p>
          <p>
            📧 Email: <input value="venturewhiz@gmail.com" readOnly style={inputStyle} />
          </p>
          <p>📞 Phone: +1 (800) 123-4567</p>
          <p>🌍 Address: Ceceil St Singapore, NY 10001</p>

          {/* Download Section */}
          <div style={{ marginTop: "30px" }}>
            <p>Download the FandomX App:</p>
            <a href="https://play.google.com/store/apps/details?id=com.fandomx" style={storeLinkStyle}>
              <img src="/assets/playstore.jpg" alt="Google Play" style={storeImgStyle} />
            </a>
            <a href="https://apps.apple.com/us/app/fandomx/id1234567890" style={storeLinkStyle}>
              <img src="/assets/apple.jpg" alt="Apple Store" style={storeImgStyle} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Input Style for reuse
const inputStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "14px",
  backgroundColor: "#f2f2f2",
  color: "#333",
  minWidth: "540px", // Increased width for better spacing
};

// Store Link Styles
const storeLinkStyle = {
  margin: "10px",
};

const storeImgStyle = {
  width: "150px",
  height: "auto",
};

export default Contact;
