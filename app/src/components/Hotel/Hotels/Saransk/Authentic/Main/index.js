// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SaranskAuthenticMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/saransk/hotels/eco">ECO</NavLink>
          <NavLink to="/city/saransk/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/saransk/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/saransk/hotels/authentic/meridian">
              <img className="hotels-image" src="/images/hotels/Saransk/saransk-authentic-meridian.jpg" />
              <p className="hotels-description">This hotel is located in the centre of Saransk, a 5-minute walk from the National Theatre of Mordovia. Free Wi-Fi, a sauna, billiards and a 24-hour reception are featured at Meridian Hotel.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/saransk/hotels/authentic/park">
            <img className="hotels-image" src="/images/hotels/Saransk/saransk-authentic-park.jpg" />
            <p className="hotels-description">Located 1.3 km from Mordovia Arena in Saransk, Park Hotel features a restaurant and free WiFi. The hotel has a sauna and fitness center, and guests can enjoy a meal at the restaurant. Free private parking is available on site.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/saransk/hotels/authentic/makarovskaya">
            <img className="hotels-image" src="/images/hotels/Saransk/saransk-authentic-makarovskaya.jpg" />
            <p className="hotels-description">Located 8 km from the city centre of Saransk, Hotel Makarovskaya features an on-site restaurant serving Russian cuisine, free internet access, and free private parking.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default SaranskAuthenticMain;
