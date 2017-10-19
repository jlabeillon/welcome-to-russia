// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KaliningradEcoMain extends React.Component {
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
              <NavLink to="/city/kaliningrad/hotels/eco/cottbus">
              <img className="hotels-image" src="/images/hotels/Kaliningrad/kaliningrad-eco-cottbus.jpg" />
              <p className="hotels-description">Located in the peaceful Rosgarten district of Kaliningrad, this hotel offers European cuisine, a sauna and a small pool. Guests enjoy free Wi-Fi and free on-site parking.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/kaliningrad/hotels/eco/traktir">
            <img className="hotels-image" src="/images/hotels/Kaliningrad/kaliningrad-eco-traktir.jpg" />
            <p className="hotels-description">Set in Kaliningrad, 6 km from Church of the Holy Family, Traktir Zerkalny Karp features a barbecue and sauna. Guests can enjoy the on-site restaurant. Free WiFi is provided and free private parking is available on site.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/kaliningrad/hotels/eco/smile">
            <img className="hotels-image" src="/images/hotels/Kaliningrad/kaliningrad-eco-smile.jpg" />
            <p className="hotels-description">Featuring free WiFi and a terrace, Smile Hostel and Mini-Hotel offers accommodation in Kaliningrad, 2.7 km from Königsberg Cathedral. Free private parking is available on site.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default KaliningradEcoMain;
