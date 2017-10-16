// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class YekaterinburgEcoMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/yekaterinburg/hotels/eco">ECO</NavLink>
          <NavLink to="/city/yekaterinburg/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/yekaterinburg/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/yekaterinburg/hotels/eco/bolshoy">
              <img className="hotels-image" src="/images/hotels/Yekaterinburg/yekaterinburg-eco-bolshoy.jpg" />
              <p className="hotels-description">Situated in Yekaterinburg, 400 m from the central stadium and Cathedral of St. John the Baptist, Bolshoy Ural na Malysheva Hotel features air-conditioned rooms with free WiFi. Free private parking is available on site.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/yekaterinburg/hotels/eco/ural">
            <img className="hotels-image" src="/images/hotels/Yekaterinburg/yekaterinburg-eco-ural.jpg" />
            <p className="hotels-description">Located 1.5 km from Mashinostroiteley Metro Station in Yekaterinburg, Bolshoy Ural na Stachek offers a 24-hour front desk and luggage storage. Yekaterinburg city centre is a 30-minute drive away.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/yekaterinburg/hotels/eco/lhouse">
            <img className="hotels-image" src="/images/hotels/Yekaterinburg/yekaterinburg-eco-lhouse.jpg" />
            <p className="hotels-description">Lhouse Hotel is located in Yekaterinburg, 4 km from the city centre. It offers en suite accommodation, a quiet private yard and free WiFi. Free public parking is possible on site.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default YekaterinburgEcoMain;
