// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SochiAuthenticMain extends React.Component {
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
              <NavLink to="/city/sochi/hotels/authentic/anna">
              <img className="hotels-image" src="/images/hotels/Sochi/sochi-authentic-anna.jpg" />
              <p className="hotels-description">This property is 8 minutes walk from the beach. Designed in the style of a 16th century Scottish castle, Villa Anna offers free Wi-Fi and an outdoor pool. Some rooms have a hot tub, a kitchenette and a seating area.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/sochi/hotels/authentic/chebotarev">
            <img className="hotels-image" src="/images/hotels/Sochi/sochi-authentic-chebotarev.jpg" />
            <p className="hotels-description">This property is 8 minutes walk from the beach. Situated along the Black Sea coast and surrounded by Russian Riviera’s palm and banana trees is this 4-star hotel offering comfortable accommodation in an ideal location.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/sochi/hotels/authentic/tsvetnoy">
            <img className="hotels-image" src="/images/hotels/Sochi/sochi-authentic-tsvetnoy.jpg" />
            <p className="hotels-description">This property is 12 minutes walk from the beach. Featuring free WiFi, Tsvetnoy 5 Hotel is set in Sochi, a 7-minute walk from the city centre. The beach is 1,7 km away from the property.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default SochiAuthenticMain;
