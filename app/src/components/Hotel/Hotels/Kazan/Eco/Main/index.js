// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const KazanEcoMain = () => (
  <div className="container" id="hotels-body">
    <Header />

    <div className="nav-options-container">
      <NavLink to="/city/kazan/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
      <NavLink to="/city/kazan/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
      <NavLink to="/city/kazan/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/kazan/hotels/eco/moskovskaya">
          <img className="hotels-image" alt="moskovskaya" src="/images/hotels/Kazan/kazan-eco-moskovskaya.jpg" />
          <p className="hotels-description">Berison Moskovskaya is located in the centre of Kazan, on the bank of Lake Kaban. The Kazan Kremlin is 2 km away. Free WiFi access is available.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/kazan/hotels/eco/kamala">
          <img className="hotels-image" alt="kamala" src="/images/hotels/Kazan/kazan-eco-kamala.jpg" />
          <p className="hotels-description">Set in Kazan, 800 m from Marcani Mosque, Berison Kamala features free WiFi. The air-conditioned rooms have a flat-screen TV. Every room includes a private bathroom equipped with a shower.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/kazan/hotels/eco/gvardeiskaya">
          <img className="hotels-image" alt="gvardeiskaya" src="/images/hotels/Kazan/kazan-eco-gvardeiskaya.jpg" />
          <p className="hotels-description">Located 3 km from the large Koltso shopping mall, this hotel in South-East Kazan offers a 24-hour reception, and rooms feature refrigerators and free toiletries. Individually furnished rooms and suites await you at the Gvardeiskaya Hotel. Each room has a living area with desk and TV.</p>
        </NavLink>
      </div>
    </div>

    <Footer />

  </div>
);

// Export
export default KazanEcoMain;
