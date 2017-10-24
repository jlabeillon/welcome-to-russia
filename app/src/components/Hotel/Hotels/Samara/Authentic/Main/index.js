// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const SamaraAuthenticMain = () => (
  <div className="container" id="hotels-body">
    <Header />

    <div className="nav-options-container">
      <NavLink to="/city/samara/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
      <NavLink to="/city/samara/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
      <NavLink to="/city/samara/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/samara/hotels/authentic/hotel19">
          <img className="hotels-image" alt="hotel19" src="/images/hotels/Samara/samara-authentic-hotel19.jpg" />
          <p className="hotels-description">Featuring free WiFi, HOTEL 19 offers accommodation in Mekhzavod. Guests can enjoy the on-site restaurant. Free private parking is available on site.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/samara/hotels/authentic/sivre">
          <img className="hotels-image" alt="sivre-hotel" src="/images/hotels/Samara/samara-authentic-sivre.jpg" />
          <p className="hotels-description">This property is 4 minutes walk from the beach. Offering bike rental, Dom Sivre Hotel is located in Samara, a minutes’ walk from the bank of the Volga River. Free WiFi and private parking are available.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/samara/hotels/authentic/europe">
          <img className="hotels-image" alt="europe" src="/images/hotels/Samara/samara-authentic-europe.jpg" />
          <p className="hotels-description">This property is 11 minutes walk from the beach. Situated in the historic city centre of Samara, this hotel features free Wi-Fi. Russian specialities are served in the hotel restaurant, and guests benefit from a 24-hour reception.</p>
        </NavLink>
      </div>
    </div>

    <Footer />

  </div>
);

// Export
export default SamaraAuthenticMain;
