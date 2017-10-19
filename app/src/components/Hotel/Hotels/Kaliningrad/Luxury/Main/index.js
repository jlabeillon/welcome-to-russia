// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KaliningradLuxuryMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <div className="nav-options-container">
            <NavLink to="/city/kaliningrad/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
            <NavLink to="/city/kaliningrad/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
            <NavLink to="/city/kaliningrad/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/kaliningrad/hotels/luxury/palace">
              <img className="hotels-image" src="/images/hotels/Kaliningrad/kaliningrad-luxury-palace.jpg" />
              <p className="hotels-description">This property is 1 minute walk from the beach. Situated on the coast of the Baltic Sea, Grand Palace Hotel offers luxurious rooms with cable TV and Italian furniture. Facilities include a private beach and a heated outdoor swimming pool.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/kaliningrad/hotels/luxury/kaiserhof">
            <img className="hotels-image" src="/images/hotels/Kaliningrad/kaliningrad-luxury-kaiserhof.jpg" />
            <p className="hotels-description">Located on the bank of the Pregolia River on the territory of so called Fishing Village, Kaiserhof Hotel offers elegant rooms with free WiFi. It features spa centre facilities.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/kaliningrad/hotels/luxury/buen">
            <img className="hotels-image" src="/images/hotels/Kaliningrad/kaliningrad-luxury-buen.jpg" />
            <p className="hotels-description">This property is 2 minutes walk from the beach. Located near the Kaliningrad Bay, Buen Retiro offers guests classically designed rooms, an on-site restaurant, and free Wi-Fi throughout the property.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default KaliningradLuxuryMain;
