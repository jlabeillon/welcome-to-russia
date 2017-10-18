// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Novgorod extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/novgorod/stadium" className="nav-left">Stadium</NavLink>
            <a href="#" className="nav-left">Transportation</a>
            <NavLink to="/city/novgorod/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/novgorod/restaurants" className="nav-left">Restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Nizhny Novgorod</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Nizhny Novgorod, colloquially shortened to Nizhny, is a city in the administrative center of Volga Federal District and Nizhny Novgorod Oblast in Russia. From 1932 to 1990, it was known as Gorky after the writer Maxim Gorky, who was born there. The city is an important economic, transportation, scientific, educational and cultural center in Russia and the vast Volga-Vyatka economic region, and is the main center of river tourism in Russia. In the historic part of the city there is a large number of universities, theaters, museums and churches. Nizhny Novgorod is located about 400 km east of Moscow, where the Oka empties into the Volga. Population: 1,250,619 (2010 Census)</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Novgorod;
