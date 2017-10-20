// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Yekaterinburg extends React.Component {

      componentWillMount() {
        this.props.actions.loadYekaterinburg();
      }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/yekaterinburg/stadium" className="nav-left">Stadium</NavLink>
            <a href="#" className="nav-left">Transportation</a>
            <NavLink to="/city/yekaterinburg/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/yekaterinburg/restaurants" className="nav-left">Restaurants</NavLink>
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
export default Yekaterinburg;
