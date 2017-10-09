// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowLuxury extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/moscow/hotels/eco">ECO</NavLink>
          <NavLink to="/city/moscow/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/moscow/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <a href="">
              <img className="hotels-image" src="/images/hotels/moscow-eco-novinsky.jpg" />
              <p className="hotels-description">Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.</p>
              </a>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <a href="">
            <img className="hotels-image" src="/images/hotels/moscow-eco-novinsky.jpg" />
            <p className="hotels-description">Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.</p>
            </a>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <a href="">
            <img className="hotels-image" src="/images/hotels/moscow-eco-novinsky.jpg" />
            <p className="hotels-description">Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.</p>
            </a>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default MoscowLuxury;
