// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import

// Code
const Header = () => (
  <div>
    <img id="header-logo" src="/images/FIFA_World_Cup_2018_Logo.jpg" alt="competition-logo" />
    <div id="header-menu">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/transports">Transports</NavLink>
      <NavLink to="/accommodation">Accommodation</NavLink>
      <NavLink to="/visa">Come to Russia</NavLink>
      <NavLink to="/fan-zone">Fan zone</NavLink>
      <NavLink to="/competition">Competition</NavLink>
      <NavLink to="/blog">Blog</NavLink>
    </div>
  </div>
);

// Export
export default Header;
