// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class VolgogradEcoMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/volgograd/hotels/eco">ECO</NavLink>
          <NavLink to="/city/volgograd/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/volgograd/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/volgograd/hotels/eco/lambert">
              <img className="hotels-image" src="/images/hotels/Volgograd/volgograd-eco-lambert.jpg" />
              <p className="hotels-description">Set in Volgograd, 2.4 km from Mamayev Kurgan, Mini-Hotel Lambert features a barbecue and views of the garden. Free WiFi is available throughout the property and free private parking is available on site.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/volgograd/hotels/eco/kani">
            <img className="hotels-image" src="/images/hotels/Volgograd/volgograd-eco-kani.jpg" />
            <p className="hotels-description">Offering a sauna and hammam, Kani is located in Volgograd in the Volgograd Region Region, 5 km from River Port.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/volgograd/hotels/eco/ram">
            <img className="hotels-image" src="/images/hotels/Volgograd/volgograd-eco-ram.jpg" />
            <p className="hotels-description">Featuring free WiFi throughout the property, Ram Hotel offers accommodation in Volgograd, 24 km from River Port. Free private parking is available on site.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default VolgogradEcoMain;
