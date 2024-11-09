import React, { useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.navbar-link');
    const checkbox = document.getElementById('chk1');

    links.forEach(link => {
      link.addEventListener('click', () => {
        // Uncheck the checkbox when any link is clicked
        checkbox.checked = false;
      });
    });

    return () => {
      // Cleanup the event listener
      links.forEach(link => {
        link.removeEventListener('click', () => {
          checkbox.checked = false;
        });
      });
    };
  }, []);

  return (
    <div className='first_page'>
      <header>
        <input type='checkbox' name='' id='chk1' />
        <div className='logo'>
          <NavLink to="/">
            <img src='/assets/logo.svg' alt="Logo" />
          </NavLink>
        </div>
        <ul>
          <li><NavLink className="navbar-link" activeClassName="cadetblue" to='/About'>About</NavLink></li>
          <li><NavLink className="navbar-link" activeClassName="cadetblue" to='/Live'>Live</NavLink></li>
          <li><NavLink className="navbar-link" activeClassName="cadetblue" to='/Tickets'>Tickets</NavLink></li>
          <li><NavLink className="navbar-link" activeClassName="cadetblue" to='/Shopping'>Shopping</NavLink></li>
          <li><NavLink className="navbar-link" activeClassName="cadetblue" to='/Sports_tour'>Tours</NavLink></li>
          <li><NavLink className="navbar-link" activeClassName="cadetblue" to='/Play'>Play</NavLink></li>
          <li><NavLink className="navbar-link" activeClassName="cadetblue" to='/Rewards'>Rewards</NavLink></li>
          <li><NavLink className="navbar-link" activeClassName="cadetblue" to='/Sponsorships'>Sponsorships</NavLink></li>
          <li><NavLink className="navbar-link" activeClassName="cadetblue" to='/Blog'>Blog</NavLink></li>
          <li><NavLink className="navbar-link" activeClassName="cadetblue" to='/Contact'>Contact</NavLink></li>
        </ul>
        <div className='menu'>
          <label htmlFor='chk1'>
            <i className='fa fa-bars'></i>
          </label>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
