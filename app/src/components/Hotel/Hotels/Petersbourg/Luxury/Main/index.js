// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class PetersbourgLuxury extends React.Component {
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
              <NavLink to="/city/petersbourg/hotels/luxury/four">
              <img className="hotels-image" src="/images/hotels/Petersbourg/petersbourg-luxury-four.jpg" />
              <p className="hotels-description">Four Seasons Hotel Lion Palace is located in the heart of Saint Petersburg, just 300 m from the Dvortsovaya Square. It boasts luxury interiors in Russian Empire style and exclusive fine dining options.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/petersbourg/hotels/luxury/lotte">
            <img className="hotels-image" src="/images/hotels/Petersbourg/petersbourg-luxury-lotte.jpg" />
            <p className="hotels-description">Offering a terrace and spa centre, Lotte Hotel St. Petersburg is located in Saint Petersburg. The hotel has a sauna and fitness centre, and guests can enjoy a meal at the restaurant.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/petersbourg/hotels/luxury/belmond">
            <img className="hotels-image" src="/images/hotels/Petersbourg/petersbourg-luxury-belmond.jpg" />
            <p className="hotels-description">Set in a stunning central location of St. Petersburg is this grand hotel that offers elegant accommodation in a fantastic setting.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default PetersbourgLuxury;
