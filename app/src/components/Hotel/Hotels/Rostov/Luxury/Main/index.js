// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class RostovLuxuryMain extends React.Component {
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
              <NavLink to="/city/rostov/hotels/luxury/izvolte">
              <img className="hotels-image" src="/images/hotels/rostov-luxury-izvolte.jpg" />
              <p className="hotels-description">Get the celebrity treatment with world-class service at Residentsiya (Izvolte) Hotel. One of our top picks in Rostov on Don. This hotel is situated in the historic building in the centre of Rostov. Hotel Residence features stylish rooms with free WiFi. It has a fitness centre, spa with massage services and wellness centre</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/rostov/hotels/luxury/soho">
            <img className="hotels-image" src="/images/hotels/rostov-luxury-soho.jpg" />
            <p className="hotels-description">Grand Hotel Soho offers accommodation in Azov. Guests can enjoy the on-site restaurant. Free WiFi is offered throughout the property and free private parking is available on site.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/rostov/hotels/luxury/mercure">
            <img className="hotels-image" src="/images/hotels/rostov-luxury-mercure.jpg" />
            <p className="hotels-description">Located a 7-minute walk from the Don River embankment, Mercure Rostov-On-Don Center features a sauna and a fitness centre. Free WiFi is available on site.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default RostovLuxuryMain;
