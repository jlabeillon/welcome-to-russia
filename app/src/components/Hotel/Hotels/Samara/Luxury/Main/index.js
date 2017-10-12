// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SamaraLuxuryMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/samara/hotels/eco">ECO</NavLink>
          <NavLink to="/city/samara/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/samara/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/samara/hotels/luxury/holiday">
              <img className="hotels-image" src="/images/hotels/samara-luxury-holiday.jpg" />
              <p className="hotels-description">This property is 3 minutes walk from the beach. Holiday Inn Samara is located in the historic centre of Samara, a 5-minute walk from the Volga River Embankment. Free WiFi, Swedish and Finnish saunas, swimming pool and a 24-hour fitness centre are offered.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/samara/hotels/luxury/renaissance">
            <img className="hotels-image" src="/images/hotels/samara-luxury-renaissance.jpg" />
            <p className="hotels-description">The Renaissance Samara Hotel is a luxury hotel with river views, located in the city centre. It combines impressive interiors with facilities that include restaurants and indoor swimming pool.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/samara/hotels/luxury/glinka">
            <img className="hotels-image" src="/images/hotels/samara-luxury-glinka.jpg" />
            <p className="hotels-description">Located in Samara, Hotel Moya Glinka features a spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is provided throughout the property and free private parking is available on site.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default SamaraLuxuryMain;
