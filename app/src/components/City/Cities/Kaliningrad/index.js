// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class Kaliningrad extends React.Component {
  // Props validation
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    cityName: PropTypes.string.isRequired,
    cityDesc: PropTypes.string.isRequired,
  }
  // Lifecycle
  componentWillMount() {
    this.props.actions.loadKaliningrad();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-xs-2 nav">
            <NavLink to="/city/kaliningrad/stadium" className="nav-left">Stadium</NavLink>
            <NavLink to="/city/kaliningrad/hotels/luxury" className="nav-left">Hotels</NavLink>
            <NavLink to="/city/kaliningrad/restaurants" className="nav-left">Restaurants</NavLink>
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
  }
}
// Export
export default Kaliningrad;
