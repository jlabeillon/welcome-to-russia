// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowEco extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <div className="nav-options-container">
            <NavLink to="/city/petersbourg/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
            <NavLink to="/city/petersbourg/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
            <NavLink to="/city/petersbourg/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/petersbourg/hotels/eco/piter">
              <img className="hotels-image" src="/images/hotels/Petersbourg/petersbourg-eco-piters.jpg" />
              <p className="hotels-description">Piter’s house na Nevskom is located in the Tsentralny district district in Saint Petersburg, 2.7 km from State Russian Museum.

              Each room has a flat-screen TV. Certain units feature a seating area for your convenience. You will find a kettle in the room. Every room is equipped with a private bathroom. For your comfort, you will find slippers, free toiletries and a hairdryer. Piters house na Nevskom features free WiFi throughout the property.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/petersbourg/hotels/eco/capital">
            <img className="hotels-image" src="/images/hotels/Petersbourg/petersbourg-eco-capital.jpg" />
            <p className="hotels-description">This hotel is located in the heart of Saint Petersburg, just a 4-minute walk from the Sennaya Square and Sadovaya Metro Station. Free Wi-Fi is featured at Capital Hotel.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/petersbourg/hotels/eco/gora">
            <img className="hotels-image" src="/images/hotels/Petersbourg/petersbourg-eco-gora.jpg" />
            <p className="hotels-description">Featuring free WiFi throughout the property, Staraya Gora Hostel is located in Saint Petersburg, 900 m from State Russian Museum.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default MoscowEco;
