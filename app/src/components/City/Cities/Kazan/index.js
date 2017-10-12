// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class Kazan extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2">
            <NavLink to="/city/kazan/stadium" className="nav-left">Kazan stadium</NavLink>
            <a href="#" className="nav-left">Kazan transportation</a>
            <NavLink to="/city/kazan/hotels/luxury" className="nav-left">Kazan hotels</NavLink>
            <NavLink to="/city/moscow/restaurants" className="nav-left">Kazan restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Kazan</h1>
            <span>Carousel component</span>
            <p id="city-description">Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury. Outside its walls is Red Square, Russia’s symbolic center. It’s home to Lenin’s Mausoleum, the State Historical Museum’s comprehensive collection and St. Basil’s Cathedral, known for its colorful, onion-shaped domes.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Kazan;
