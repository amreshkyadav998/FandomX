import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="home" className="home">
        <div className="home-content pt-[30px]">
          {/* <h3>FandomX</h3> */}
          <img className="mt-2" src="/assets/FandomX.png" />
          <h1>ALL THINGS SPORTS</h1>
          <h3>
            <span className="multiple-text"></span>
          </h3>
          <p>
            {/* FandomX is your go-to platform for sports tickets, venue booking,
            sponsorships, and merchandise. Simplifying the sports experience for
            fans and organizers in one place. */}
            Fx is the only end-to-end fan experience platform built for sports
            teams and venues, breaking the mold for what fans can expect at live
            events. Fx enterprise software enables sports teams and venues to
            unlock the massive opportunities that come from real relationships
            with their fans, rethinking the traditional model that hasn’t put
            the fan experience first.
          </p>
          <div class="flex items-center">
            <NavLink to="/Explore" className="btn mb-8">
              <i>Explore</i>
            </NavLink>

            <NavLink to="/play-store">
              <img
                src="/assets/playstore.jpg"
                class="h-12 ml-2 rounded-lg mb-8"
                alt="Play Store"
              />
            </NavLink>
            <NavLink to="/app-store">
              <img
                src="/assets/apple.jpg"
                class="h-12 ml-1 rounded-lg mb-8"
                alt="App Store"
              />
            </NavLink>
          </div>
        </div>

        <div className="home-img" data-aos="zoom-in">
          <img src="/assets/6.png" alt="HeroImage" />
        </div>
      </section>
    </div>
  );
};

export default Home;
