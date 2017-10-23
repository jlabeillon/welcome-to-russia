// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const SochiLuxuryMain = () => (
  <div className="container" id="hotels-body">
    <Header />
    <div className="nav-options-container">
      <NavLink to="/city/sochi/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
      <NavLink to="/city/sochi/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
      <NavLink to="/city/sochi/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/sochi/hotels/luxury/pullman">
          <img className="hotels-image" alt="pullman" src="/images/hotels/Sochi/sochi-luxury-pullman.jpg" />
          <p className="hotels-description">This hotel is located in the centre of Sochi, within a 2-minute walk of the Black Sea shore and a 5-minute walk of Festivalny Concert Hall. An indoor and a seasonal outdoor pool, Fit and Spa Lounge and free WiFi are provided at Pullman Sochi Centre Hotel. During the summer season, the hotel offers an equipped beach.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/sochi/hotels/luxury/hyatt">
          <img className="hotels-image" alt="hyatt" src="/images/hotels/Sochi/sochi-luxury-hyatt.jpg" />
          <p className="hotels-description">This property is 2 minutes walk from the beach. Hyatt Regency Sochi Hotel is located in the centre of Sochi, 200 m from the Black Sea coast and 200 m from Kurortny Prospekt. Free WiFi access is available.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/sochi/hotels/luxury/rodina">
          <img className="hotels-image" alt="rodina" src="/images/hotels/Sochi/sochi-luxury-rodina.jpg" />
          <p className="hotels-description">This property is 7 minutes walk from the beach. This luxury 5-star hotel is located on the Black Sea Coast in Sochi. It features a private beach, several gourmet restaurants, a Wellness and Spa by Rodina with indoor and outdoor pools and kids club.</p>
        </NavLink>
      </div>
    </div>

    <Footer />

  </div>
);

// Export
export default SochiLuxuryMain;
