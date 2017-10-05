// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import

// Code
class Header extends React.Component {
  render() {
    return (
      <div>
        <img id="header-logo" src="/images/FIFA_World_Cup_2018_Logo.png" />
        <div id="header-menu">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/transports">Transports</NavLink>
          <NavLink to="/accommodation">Accommodation</NavLink>
          <NavLink to="/come-to-russia">Come to Russia</NavLink>
          <NavLink to="/fan-zone">Fan zone</NavLink>
          <NavLink to="/competition">Competition</NavLink>
        </div>
        <div id="header-connection">
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/signin">Signin</NavLink>
        </div>
      </div>
    );
  };
}

// Export
export default Header;
