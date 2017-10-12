// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class RostovAuthenticMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/rostov/hotels/eco">ECO</NavLink>
          <NavLink to="/city/rostov/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/rostov/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/rostov/hotels/authentic/nabokov">
              <img className="hotels-image" src="/images/hotels/rostov-authentic-nabokov.jpg" />
              <p className="hotels-description">Offering free WiFi, Loft-Hotel Nabokov is located in in Rostov-on-Don. All rooms are air conditioned and come with either private or shared bathrooms.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/rostov/hotels/authentic/legenda">
            <img className="hotels-image" src="/images/hotels/rostov-authentic-legenda.jpg" />
            <p className="hotels-description">Hotel Legenda offers accommodation in Rostov on Don. Free WiFi is provided throughout the property and free private parking is available on site.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/rostov/hotels/authentic/petrovsky">
            <img className="hotels-image" src="/images/hotels/rostov-authentic-petrovsky.jpg" />
            <p className="hotels-description">Offering an indoor pool and a spa and wellness centre, Hotel Petrovsky Prichal Luxury Hotel&SPA is located in Rostov-on-Don, on the edge of the river. The luxury-style hotel features a restaurant, a terrace and a garden.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default RostovAuthenticMain;
