// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KazanAuthenticMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/kazan/hotels/eco">ECO</NavLink>
          <NavLink to="/city/kazan/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/kazan/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/kazan/hotels/authentic/kikhot">
              <img className="hotels-image" src="/images/hotels/kazan-authentic-kikhot.jpg" />
              <p className="hotels-description">Offering a fitness centre, Don Kikhot Hotel is located in the centre of Kazan, just a 5-minute walk from Kazan Central Train Station and a 15-minute walk from the Kremlin. Free WiFi access is available.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/kazan/hotels/authentic/sapozhok">
            <img className="hotels-image" src="/images/hotels/kazan-authentic-sapozhok.jpg" />
            <p className="hotels-description">Set in Kazan, 200 m from Marcani Mosque, Kaushchi features air-conditioned rooms.The rooms have a flat-screen TV. Kaushchi features free WiFi throughout the property. You will find a 24-hour front desk at the property.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/kazan/hotels/authentic/tatarskaya">
            <img className="hotels-image" src="/images/hotels/kazan-authentic-tatarskaya.jpg" />
            <p className="hotels-description">Located a 2-minute walk from Al-Mardzhani Mosque on the bank of Nizhny Kaban Lake in Kazan, Tatarskaya Usadba offers free WiFi. All rooms are air conditioned and come with cable TV and a minibar. A private bathroom includes free toiletries.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default KazanAuthenticMain;
