// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class NovgorodLuxuryMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/novgorod/hotels/eco">ECO</NavLink>
          <NavLink to="/city/novgorod/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/novgorod/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/novgorod/hotels/luxury/sova">
              <img className="hotels-image" src="/images/hotels/novgorod-luxury-sova.jpg" />
              <p className="hotels-description">This 4-star business City Hotel Sova is located a 10-minute drive to the centre of Nizhniy Novgorod and offers free WiFi, a business centre and underground parking. The Kremlin and the pedestrian street Bolshaya Pokrovskaya are just a few bus stops away.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/novgorod/hotels/luxury/marriott">
            <img className="hotels-image" src="/images/hotels/novgorod-luxury-marriott.jpg" />
            <p className="hotels-description">Featuring a fitness centre, Courtyard by Marriott Nizhny Novgorod City Center is located a 20-minute walk from Nizhny Novgorod Kremlin. Free WiFi and free private parking are available on site.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/novgorod/hotels/luxury/chayka">
            <img className="hotels-image" src="/images/hotels/novgorod-luxury-chayka.jpg" />
            <p className="hotels-description">Park-Hotel Chayka offers accommodation in Zhelnino. The hotel has a spa centre and water sports facilities, and guests can enjoy a drink at the bar.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default NovgorodLuxuryMain;
