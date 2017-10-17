// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Rostov extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2">
            <NavLink to="/city/rostov/stadium" className="nav-left">Rostov-on-Don stadium</NavLink>
            <a href="#" className="nav-left">Rostov-on-Don transportation</a>
            <NavLink to="/city/rostov/hotels/luxury" className="nav-left">Rostov-on-Don hotels</NavLink>
            <NavLink to="/city/rostov/restaurants" className="nav-left">Rostov-on-Don restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Rostov-on-Don</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Rostov-on-Don is a port city and the administrative center of Rostov Oblast and the Southern Federal District of Russia. It lies in the southeastern part of the East European Plain on the Don River, 32 kilometers from the Sea of Azov. The southwestern suburbs of the city abut the Don River delta. Population: 1,089,261 (2010 Census)</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Rostov;
