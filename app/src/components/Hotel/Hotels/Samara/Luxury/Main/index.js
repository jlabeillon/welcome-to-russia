// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SaranskLuxuryMain extends React.Component {
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
              <NavLink to="/city/saransk/hotels/luxury/admiral">
              <img className="hotels-image" src="/images/hotels/saransk-luxury-admiral.jpg" />
              <p className="hotels-description">Located a 10-minute walk from Sovetskaya Square in Saransk, Admiral Hotel features a free access to indoor pool and a gym. A spa and wellness centre and a bar are also featured.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/saransk/hotels/luxury/victoria">
            <img className="hotels-image" src="/images/hotels/saransk-luxury-victoria.jpg" />
            <p className="hotels-description">Located in Saransk, 6 km from Mordovia Arena, Hotel Victoria at the sports school features air-conditioned rooms with free WiFi throughout the property. The hotel has a hot tub and sauna, and guests can enjoy a drink at the bar.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/saransk/hotels/luxury/severny">
            <img className="hotels-image" src="/images/hotels/saransk-luxury-severny.jpg" />
            <p className="hotels-description">Located in Saransk, Severny Zamok Hotel features free WiFi and free private parking.

            Each room offers a air conditioning and a flat-screen TV with satellite channels. You will also find a fridge. The private bathrooms are fitted with a hairdryer.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default SaranskLuxuryMain;
