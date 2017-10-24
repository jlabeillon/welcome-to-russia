// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const NovgorodLuxuryMain = () => (
  <div className="container" id="hotels-body">
    <Header />

    <div className="nav-options-container">
      <NavLink to="/city/novgorod/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
      <NavLink to="/city/novgorod/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
      <NavLink to="/city/novgorod/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/novgorod/hotels/luxury/sova">
          <img className="hotels-image" alt="sova-hotel" src="/images/hotels/Novgorod/novgorod-luxury-sova.jpg" />
          <p className="hotels-description">This 4-star business City Hotel Sova is located a 10-minute drive to the centre of Nizhniy Novgorod and offers free WiFi, a business centre and underground parking. The Kremlin and the pedestrian street Bolshaya Pokrovskaya are just a few bus stops away.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/novgorod/hotels/luxury/marriott">
          <img className="hotels-image" alt="marriott" src="/images/hotels/Novgorod/novgorod-luxury-marriott.jpg" />
          <p className="hotels-description">Featuring a fitness centre, Courtyard by Marriott Nizhny Novgorod City Center is located a 20-minute walk from Nizhny Novgorod Kremlin. Free WiFi and free private parking are available on site.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/novgorod/hotels/luxury/chayka">
          <img className="hotels-image" alt="chayka" src="/images/hotels/Novgorod/novgorod-luxury-chayka.jpg" />
          <p className="hotels-description">Park-Hotel Chayka offers accommodation in Zhelnino. The hotel has a spa centre and water sports facilities, and guests can enjoy a drink at the bar.</p>
        </NavLink>
      </div>
    </div>

    <Footer />

  </div>
);

// Export
export default NovgorodLuxuryMain;
