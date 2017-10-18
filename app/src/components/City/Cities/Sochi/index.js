// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Sochi extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/sochi/stadium" className="nav-left">Stadium</NavLink>
            <a href="#" className="nav-left">Transportation</a>
            <NavLink to="/city/sochi/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/moscow/restaurants" className="nav-left">Restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Sochi</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Sochi is a city in Krasnodar Krai, Russia, located on the Black Sea coast near the border between Georgia/Abkhazia and Russia. The Greater Sochi area, which includes territories and localities subordinated to Sochi proper, has a total area of 3,526 square kilometers and sprawls for 145 kilometers along the shores of the Black Sea near the Caucasus Mountains. The area of the city proper is 176.77 square kilometers. According to the 2010 Census, the city had a permanent population of 343,334 up from 328,809 recorded in the 2002 Census, making it Russia’s largest resort city. Being part of the Caucasian Riviera, it is one of the very few places in Russia with a subtropical climate, with warm to hot summers and mild winters.

            With the alpine and Nordic events held at the nearby ski resort of Roza Khutor in Krasnaya Polyana, Sochi hosted the XXII Olympic Winter Games and XI Paralympic Winter Games in 2014, as well as the Russian Formula 1 Grand Prix from 2014 until at least 2020. It will also be one of the host cities for the 2018 FIFA World Cup.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Sochi;
