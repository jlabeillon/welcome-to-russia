// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const MoscowEco = () => (
  <div className="container" id="hotels-body">

    <Header />

    <div className="nav-options-container">
      <NavLink to="/city/moscow/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
      <NavLink to="/city/moscow/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
      <NavLink to="/city/moscow/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/moscow/hotels/eco/novinsky">
          <img className="hotels-image" alt="novinsky" src="/images/hotels/Moscow/moscow-eco-novinsky.jpg" />
          <p className="hotels-description">Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/moscow/hotels/eco/cosmos">
          <img className="hotels-image" alt="cosmos" src="/images/hotels/Moscow/moscow-eco-cosmos.jpg" />
          <p className="hotels-description">Located next to the All-Russia Exhibition Centre, this hotel offers a spa with a swimming pool, fitness centre and massage services. VDNKh Metro Station is 400 m away.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/moscow/hotels/eco/izmailovo">
          <img className="hotels-image" alt="izmailovo" src="/images/hotels/Moscow/moscow-eco-izmailovo.jpg" />
          <p className="hotels-description">Set near the Izmailovsky Park, within a 3-minute walk of Partizanskaya Metro Station, Izmailovo Beta Hotel features free WiFi, banquet and meeting facilities and a variety of dining options. It is located within a 15-minute metro ride from the city centre.</p>
        </NavLink>
      </div>
    </div>

    <Footer />

  </div>
);

// Export
export default MoscowEco;
