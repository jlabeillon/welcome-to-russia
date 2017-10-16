// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class RostovEcoMain extends React.Component {
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
              <NavLink to="/city/rostov/hotels/eco/don">
              <img className="hotels-image" src="/images/hotels/Rostov/rostov-eco-don.jpg" />
              <p className="hotels-description">This hotel is located in the western residential area, a 15-minute drive from the centre of Rostov-on-Don. Hotel Don offers free Wi-Fi and modern rooms with a flat-screen TV.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/rostov/hotels/eco/zagora">
            <img className="hotels-image" src="/images/hotels/Rostov/rostov-eco-dobroslawa.jpg" />
            <p className="hotels-description">This property is 7 minutes walk from the beach. Featuring free Wi-Fi, a kitchen and 24-hour reception, this aparthotel is located in the South-Western suburb of Rostov-on-Don city, 200 m from the Don River Embankmet.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/rostov/hotels/eco/volna">
            <img className="hotels-image" src="/images/hotels/Rostov/rostov-eco-alfa.jpg" />
            <p className="hotels-description">Free Wi-Fi and paid private parking are provided at Alfa Hotel is located in the western suburbs of Rostov-on-Don city. Zolotoy Vavilon Shopping Mall and Fortuna 1 Car Market are 2 km away.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default RostovEcoMain;
