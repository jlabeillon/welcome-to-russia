// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class YekaterinburgAuthenticMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <div className="nav-options-container">
            <NavLink to="/city/yekaterinburg/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
            <NavLink to="/city/yekaterinburg/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
            <NavLink to="/city/yekaterinburg/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/yekaterinburg/hotels/authentic/red">
              <img className="hotels-image" src="/images/hotels/Yekaterinburg/yekaterinburg-authentic-red.jpg" />
              <p className="hotels-description">Featuring free WiFi throughout the property, R.E.D. Inn is located in Yekaterinburg, 400 m from Uralochka Sports Centre. Free private parking is available on site.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/yekaterinburg/hotels/authentic/chekhov">
            <img className="hotels-image" src="/images/hotels/Yekaterinburg/yekaterinburg-authentic-chekhov.jpg" />
            <p className="hotels-description">The Chekhov is a 3-star hotel in central Ekaterinburg, 300 m from Geologicheskaya Metro Station. Set in 19th-century restored mansion, it features free Wi-Fi and free private parking on site.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/yekaterinburg/hotels/authentic/renomme">
            <img className="hotels-image" src="/images/hotels/Yekaterinburg/yekaterinburg-authentic-renomme.jpg" />
            <p className="hotels-description">Featuring a sauna and fitness centre, Hotel Renomme is located in Yekaterinburg, right by Geologicheskaya Metro Station. The pedestrian Vaynera Street is within a 5-minute walk. Free WiFi and free private parking are provided.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default YekaterinburgAuthenticMain;
