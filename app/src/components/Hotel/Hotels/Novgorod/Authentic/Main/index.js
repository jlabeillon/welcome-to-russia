// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class NovgorodAuthenticMain extends React.Component {
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
              <NavLink to="/city/novgorod/hotels/authentic/volne">
              <img className="hotels-image" src="/images/hotels/Novgorod/novgorod-authentic-volne.jpg" />
              <p className="hotels-description">Offering a private beach area, Na Volne Hotel is set in the historic part of Nizhniy Novgorod. Moskovskaya Train Station is a 5-minute walk away. Free WiFi is featured throughout the hotel.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/novgorod/hotels/authentic/joy">
            <img className="hotels-image" src="/images/hotels/Novgorod/novgorod-authentic-joy.jpg" />
            <p className="hotels-description">Joy Hotel is located in the historic centre, a 5-minute walk from Nizhny Novgorod Kremlin.

            The rooms offer air conditioning, a safety deposit box, flat-screen TV with cable channels, and kitchenette equipped with a fridge, microwave and electric kettle. The bathrooms include a hairdryer.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/novgorod/hotels/authentic/nikitin">
            <img className="hotels-image" src="/images/hotels/Novgorod/novgorod-authentic-nikitin.jpg" />
            <p className="hotels-description">Free Wi-Fi and a full English breakfast are offered at this hotel, located just 350 m from where the River Volga meets the River Oka. The design hotel offers a 24-hour reception.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default NovgorodAuthenticMain;
