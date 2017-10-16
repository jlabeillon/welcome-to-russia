// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SochiEcoMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/sochi/hotels/eco">ECO</NavLink>
          <NavLink to="/city/sochi/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/sochi/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/sochi/hotels/eco/victor">
              <img className="hotels-image" src="/images/hotels/Sochi/sochi-eco-victor.jpg" />
              <p className="hotels-description">This property is 7 minutes walk from the beach. Just 450 m from the Black Sea, this non-smoking hotel in Sochi stands beside the Arboretum Park and State Circus. It offers Wi-Fi, a 24-hour reception, and a spacious terrace.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/sochi/hotels/eco/prima">
            <img className="hotels-image" src="/images/hotels/Sochi/sochi-eco-prima.jpg" />
            <p className="hotels-description">This property is 4 minutes walk from the beach. Featuring free WiFi, a year-round outdoor pool and a seasonal outdoor pool, Pansionat PrimaVera offers accommodation in Sochi. Guests can enjoy the on-site restaurant.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/sochi/hotels/eco/marika">
            <img className="hotels-image" src="/images/hotels/Sochi/sochi-eco-marika.jpg" />
            <p className="hotels-description">Offering an outdoor pool and barbecue, Marika Hotel is set in Sochi, a 10-minute walk of the Black Sea coast. Guests can enjoy the on-site restaurant. Free WiFi is provided and free private parking is available on site.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default SochiEcoMain;
