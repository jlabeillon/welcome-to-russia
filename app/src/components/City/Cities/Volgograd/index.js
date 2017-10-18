// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Volgograd extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/volgograd/stadium" className="nav-left">Stadium</NavLink>
            <a href="#" className="nav-left">Transportation</a>
            <NavLink to="/city/volgograd/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/moscow/restaurants" className="nav-left">Restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Volgograd</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Volgograd, formerly Tsaritsyn, 1589–1925, and Stalingrad, 1925–1961, is an important industrial city and the administrative center of Volgograd Oblast, Russia. It is 80 kilometers long, north to south and is situated on the western bank of the Volga River, after which the city was named. Population: 1,021,215 (2010 Census).

            The city became famous for its resistance during the Battle of Stalingrad against the German Army in World War II. It is often regarded as the largest and bloodiest battle in the history of warfare.</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Volgograd;
