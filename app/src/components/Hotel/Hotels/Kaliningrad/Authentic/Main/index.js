// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KaliningradAuthenticMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <div className="nav-options-container">
            <NavLink to="/city/kaliningrad/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
            <NavLink to="/city/kaliningrad/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
            <NavLink to="/city/kaliningrad/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/kaliningrad/hotels/authentic/tchaikovsky">
              <img className="hotels-image" src="/images/hotels/Kaliningrad/kaliningrad-authentic-tchaikovsky.jpg" />
              <p className="hotels-description">Located in a historical building in Kaliningrad, 2 km from the city centre, Hotel Chaikovsky features an on-site café serving Russian and French cuisine, a breakfast buffet, free Wi-Fi, and free private parking.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/kaliningrad/hotels/authentic/chaika">
            <img className="hotels-image" src="/images/hotels/Kaliningrad/kaliningrad-authentic-chaika.jpg" />
            <p className="hotels-description">Chaika Hotel is situated in historical Kaliningrad, just outside the city centre. There is public transport available from outside the hotel. Chaika offers free parking and free Wi-Fi.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/kaliningrad/hotels/authentic/usadba">
            <img className="hotels-image" src="/images/hotels/Kaliningrad/kaliningrad-authentic-usadba.jpg" />
            <p className="hotels-description">Housed in an old German mansion, this hotel offers resort-style accommodation and is surrounded by the peaceful, green woodlands of Kaliningrad’s countryside. It is 7 km from Kaliningard city centre.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default KaliningradAuthenticMain;
