// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowLuxury extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />
          <div className="nav-options-container">
            <NavLink to="/city/moscow/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
            <NavLink to="/city/moscow/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
            <NavLink to="/city/moscow/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/moscow/hotels/luxury/ararat">
              <img className="hotels-image" src="/images/hotels/Moscow/moscow-luxury-ararat.jpg" />
              <p className="hotels-description">Ararat Park Hyatt has an excellent location 5 minutes from Red Square in the prime shopping area, moments from both TSUM and Detsky Mir department stores. It features superb service.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/moscow/hotels/luxury/regis">
            <img className="hotels-image" src="/images/hotels/Moscow/moscow-luxury-regis.jpg" />
            <p className="hotels-description">This 5-star hotel is in a central location in the heart of Moscow, right on Lubyanka Square, a 10-minute walk from the Kremlin. Rooms with personalized St. Regis Butler Service and free Wi-Fi are featured at St. Regis Moscow Nikolskaya.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/moscow/hotels/luxury/four">
            <img className="hotels-image" src="/images/hotels/Moscow/moscow-luxury-four.jpg" />
            <p className="hotels-description">Four Seasons Hotel Moscow is in the historic building of Moskva Hotel, in the very heart of Moscow, a short walk from the Kremlin, Red Square and the Bolshoi Theatre. Free Wi-Fi access is available in this 5-star hotel.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default MoscowLuxury;
