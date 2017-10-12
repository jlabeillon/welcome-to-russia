// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class VolgogradLuxuryMain extends React.Component {
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
              <NavLink to="/city/volgograd/hotels/luxury/hampton">
              <img className="hotels-image" src="/images/hotels/volgograd-luxury-hampton.jpg" />
              <p className="hotels-description">Hampton by Hilton Volgograd Profsoyuznaya is located in Volgograd, in a quiet residential area just 5 minutes’ drive from the city centre. It features a 24-hour reception and a gym. Free Wi-Fi and free private parking are provided.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/volgograd/hotels/luxury/hilton">
            <img className="hotels-image" src="/images/hotels/volgograd-luxury-hilton.jpg" />
            <p className="hotels-description">Located a 5-minute walk from the Volga River Embankment and 1.8 km from Mamayev Kurgan Memorial, Hilton Garden Inn Volgograd features a fitness centre and a 24-hour front desk. Free WiFi is available throughout the property.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/volgograd/hotels/luxury/volgograd">
            <img className="hotels-image" src="/images/hotels/volgograd-luxury-volgograd.jpg" />
            <p className="hotels-description">Located in the centre of Volgograd, a 5-minute walk to Komsomolskaya Metro Station, Hotel Volgograd offers a fitness centre and business facilities. Free WiFi is available. Guests can order a meal in the 24-hour on-site restaurant serving dishes of European and Russian cuisine.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default VolgogradLuxuryMain;
