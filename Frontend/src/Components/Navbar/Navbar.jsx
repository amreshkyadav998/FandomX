import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/Signup') {
      setIsLogin(false);
    } else if (location.pathname === '/Login') {
      setIsLogin(true);
    }
  }, [location]);

  useEffect(() => {
    const links = document.querySelectorAll('.onlynav-link');
    const logoLink = document.querySelector('.onlynav-logo a');
    const checkbox = document.getElementById('onlynav-chk');

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      checkbox.checked = false;
    };

    [...links, logoLink].forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      [...links, logoLink].forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="onlynav-container">
      <header className="onlynav-header">
        <input type="checkbox" id="onlynav-chk" />
        <div className="onlynav-logo">
          <NavLink to="/">
            <img src="/assets/logo.svg" alt="Logo" />
          </NavLink>
        </div>
        <ul className="onlynav-links">
          <li><NavLink className="onlynav-link" activeClassName="onlynav-active" to="/About">About</NavLink></li>
          <li><NavLink className="onlynav-link" activeClassName="onlynav-active" to="/Live">Live</NavLink></li>
          <li><NavLink className="onlynav-link" activeClassName="onlynav-active" to="/Tickets">Tickets</NavLink></li>
          <li><NavLink className="onlynav-link" activeClassName="onlynav-active" to="/Shopping">Shopping</NavLink></li>
          <li><NavLink className="onlynav-link" activeClassName="onlynav-active" to="/Sports_tour">Tours</NavLink></li>
          <li><NavLink className="onlynav-link" activeClassName="onlynav-active" to="/Play">Play</NavLink></li>
          <li><NavLink className="onlynav-link" activeClassName="onlynav-active" to="/Rewards">Rewards</NavLink></li>
          <li><NavLink className="onlynav-link" activeClassName="onlynav-active" to="/Sponsorships">Sponsorships</NavLink></li>
          <li><NavLink className="onlynav-link" activeClassName="onlynav-active" to="/Blog">Blog</NavLink></li>
          <li><NavLink className="onlynav-link" activeClassName="onlynav-active" to="/Contact">Contact</NavLink></li>
          {!isLogin ? (
            <li>
              <NavLink className="onlynav-link" activeClassName="onlynav-active" to="/login">Login</NavLink>
            </li>
          ) : (
            <li>
              <NavLink className="onlynav-link" activeClassName="onlynav-active" to="/signup">Signup</NavLink>
            </li>
          )}
        </ul>
        <div className="onlynav-menu">
          <label htmlFor="onlynav-chk">
            <i className="fa fa-bars"></i>
          </label>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
