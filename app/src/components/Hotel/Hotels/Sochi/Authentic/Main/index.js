// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const SochiAuthenticMain = () => (
  <div className="container" id="hotels-body">
    <Header />

    <div className="nav-options-container">
      <NavLink to="/city/sochi/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
      <NavLink to="/city/sochi/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
      <NavLink to="/city/sochi/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/sochi/hotels/authentic/anna">
          <img className="hotels-image" alt="annas" src="/images/hotels/Sochi/sochi-authentic-anna.jpg" />
          <p className="hotels-description">This property is 8 minutes walk from the beach. Designed in the style of a 16th century Scottish castle, Villa Anna offers free Wi-Fi and an outdoor pool. Some rooms have a hot tub, a kitchenette and a seating area.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/sochi/hotels/authentic/chebotarev">
          <img className="hotels-image" alt="chebotarev" src="/images/hotels/Sochi/sochi-authentic-chebotarev.jpg" />
          <p className="hotels-description">This property is 8 minutes walk from the beach. Situated along the Black Sea coast and surrounded by Russian Riviera’s palm and banana trees is this 4-star hotel offering comfortable accommodation in an ideal location.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/sochi/hotels/authentic/tsvetnoy">
          <img className="hotels-image" alt="tsvetnoy" src="/images/hotels/Sochi/sochi-authentic-tsvetnoy.jpg" />
          <p className="hotels-description">This property is 12 minutes walk from the beach. Featuring free WiFi, Tsvetnoy 5 Hotel is set in Sochi, a 7-minute walk from the city centre. The beach is 1,7 km away from the property.</p>
        </NavLink>
      </div>
    </div>

    <Footer />

  </div>
);

// Export
export default SochiAuthenticMain;
