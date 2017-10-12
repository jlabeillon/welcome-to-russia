// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class NovgorodEcoMain extends React.Component {
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
              <NavLink to="/city/novgorod/hotels/eco/mona">
              <img className="hotels-image" src="/images/hotels/novgorod-eco-mona.jpg" />
              <p className="hotels-description">Located in a green area of Nizhniy Novgorod, a 30-minute drive to the city centre, Hotel Mona Lisa features an outdoor swimming pool. The Volga River is a 15-minute walk away.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/novgorod/hotels/eco/baget">
            <img className="hotels-image" src="/images/hotels/novgorod-eco-baget.jpg" />
            <p className="hotels-description">Located a 10-minute walk from the Nizhny Novgorod Kremlin, Baget Hotel features rooms with a contemporary décor. It offers a 24-hour front desk.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/novgorod/hotels/eco/max">
            <img className="hotels-image" src="/images/hotels/novgorod-eco-max.jpg" />
            <p className="hotels-description">Offering a restaurant, MaxxRoyal Hotel is located in Nizhniy Novgorod, a 20-minute drive from city centre. Free WiFi access is available.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default NovgorodEcoMain;
