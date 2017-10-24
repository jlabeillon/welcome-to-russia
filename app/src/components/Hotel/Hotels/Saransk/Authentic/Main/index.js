// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const SaranskAuthenticMain = () => (
  <div className="container" id="hotels-body">
    <Header />

    <div className="nav-options-container">
      <NavLink to="/city/saransk/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
      <NavLink to="/city/saransk/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
      <NavLink to="/city/saransk/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/saransk/hotels/authentic/meridian">
          <img className="hotels-image" alt="meridian-hotel" src="/images/hotels/Saransk/saransk-authentic-meridian.jpg" />
          <p className="hotels-description">This hotel is located in the centre of Saransk, a 5-minute walk from the National Theatre of Mordovia. Free Wi-Fi, a sauna, billiards and a 24-hour reception are featured at Meridian Hotel.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/saransk/hotels/authentic/park">
          <img className="hotels-image" alt="park-hotel" src="/images/hotels/Saransk/saransk-authentic-park.jpg" />
          <p className="hotels-description">Located 1.3 km from Mordovia Arena in Saransk, Park Hotel features a restaurant and free WiFi. The hotel has a sauna and fitness center, and guests can enjoy a meal at the restaurant. Free private parking is available on site.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/saransk/hotels/authentic/makarovskaya">
          <img className="hotels-image" alt="makarovskaya-hotel" src="/images/hotels/Saransk/saransk-authentic-makarovskaya.jpg" />
          <p className="hotels-description">Located 8 km from the city centre of Saransk, Hotel Makarovskaya features an on-site restaurant serving Russian cuisine, free internet access, and free private parking.</p>
        </NavLink>
      </div>
    </div>

    <Footer />

  </div>
);

// Export
export default SaranskAuthenticMain;
