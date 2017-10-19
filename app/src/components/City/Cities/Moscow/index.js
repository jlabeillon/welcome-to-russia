// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Moscow extends React.Component {

  componentWillMount() {
    this.props.actions.loadMoscow();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/moscow/stadium/luzhniki" className="nav-left">Luzhniki stadium</NavLink>
            <NavLink to="/city/moscow/stadium/otkrytiye" className="nav-left">Otkrytiye stadium</NavLink>
            <a href="#" className="nav-left">Transportation</a>
            <NavLink to="/city/moscow/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/moscow/restaurants" className="nav-left">Restaurants</NavLink>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">{this.props.cityName}</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">{this.props.cityDesc}</p>
          </div>

        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default Moscow;
