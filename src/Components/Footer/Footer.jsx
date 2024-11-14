import React from "react";
import "./Footer.css";
import logo from "/assets/logo.svg";
import PlayApp from "./play_app/play_app.jsx";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src={logo} className="logo" />
          <p>
            FandomX is a sports media platform for buying match tickets, booking
            venues, and securing sponsorships. Access all your sports needs in
            one place!
          </p>
        </div>
        <div className="col">
          <h3>
            Office{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>Fandom Future PTE</p>
          <p>Cecil St, Singapore</p>
          {/* <p>Karnataka , PIN 999474 , India</p> */}
          <p className="email-id">venturewhiz@gmail.com </p>
          <p>+91-0123456789</p>
        </div>
        <div className="col">
          <h3>
            Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Matches</a>
            </li>
            <li>
              <a href="">Tickets</a>
            </li>
            <li>
              <a href="">Marchandise</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Newsletter{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form>
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder="Enter your email Id" />
            <button type="submit">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            {/* <i class="fa-brands fa-whatsapp"></i> */}
            <i className="fa-brands fa-linkedin"></i>
          </div>
          {/* APP AND PLAY STORE */}
           <PlayApp/>
          {/* Here end app and play store */}

        </div>
      </div>
      <hr />
      <div className="bottom-part">
        <p className="copyright">FandomX @ 2024 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

