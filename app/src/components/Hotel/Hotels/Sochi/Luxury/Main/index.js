// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SochiLuxuryMain extends React.Component {
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
              <NavLink to="/city/sochi/hotels/luxury/pullman">
              <img className="hotels-image" src="/images/hotels/sochi-luxury-pullman.jpg" />
              <p className="hotels-description">This hotel is located in the centre of Sochi, within a 2-minute walk of the Black Sea shore and a 5-minute walk of Festivalny Concert Hall. An indoor and a seasonal outdoor pool, Fit and Spa Lounge and free WiFi are provided at Pullman Sochi Centre Hotel. During the summer season, the hotel offers an equipped beach.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/sochi/hotels/luxury/hyatt">
            <img className="hotels-image" src="/images/hotels/sochi-luxury-hyatt.jpg" />
            <p className="hotels-description">This property is 2 minutes walk from the beach. Hyatt Regency Sochi Hotel is located in the centre of Sochi, 200 m from the Black Sea coast and 200 m from Kurortny Prospekt. Free WiFi access is available.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/sochi/hotels/luxury/rodina">
            <img className="hotels-image" src="/images/hotels/sochi-luxury-rodina.jpg" />
            <p className="hotels-description">This property is 7 minutes walk from the beach. This luxury 5-star hotel is located on the Black Sea Coast in Sochi. It features a private beach, several gourmet restaurants, a Wellness and Spa by Rodina with indoor and outdoor pools and kids club.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default SochiLuxuryMain;
