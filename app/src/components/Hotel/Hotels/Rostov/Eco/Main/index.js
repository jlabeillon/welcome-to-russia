// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const RostovEcoMain = () => (
  <div className="container" id="hotels-body">
    <Header />

    <div className="nav-options-container">
      <NavLink to="/city/rostov/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
      <NavLink to="/city/rostov/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
      <NavLink to="/city/rostov/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/rostov/hotels/eco/don">
          <img className="hotels-image" alt="don-hotel" src="/images/hotels/Rostov/rostov-eco-don.jpg" />
          <p className="hotels-description">This hotel is located in the western residential area, a 15-minute drive from the centre of Rostov-on-Don. Hotel Don offers free Wi-Fi and modern rooms with a flat-screen TV.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/rostov/hotels/eco/zagora">
          <img className="hotels-image" alt="dobroslawa-hotel" src="/images/hotels/Rostov/rostov-eco-dobroslawa.jpg" />
          <p className="hotels-description">This property is 7 minutes walk from the beach. Featuring free Wi-Fi, a kitchen and 24-hour reception, this aparthotel is located in the South-Western suburb of Rostov-on-Don city, 200 m from the Don River Embankmet.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/rostov/hotels/eco/volna">
          <img className="hotels-image" alt="alfa-hotel" src="/images/hotels/Rostov/rostov-eco-alfa.jpg" />
          <p className="hotels-description">Free Wi-Fi and paid private parking are provided at Alfa Hotel is located in the western suburbs of Rostov-on-Don city. Zolotoy Vavilon Shopping Mall and Fortuna 1 Car Market are 2 km away.</p>
        </NavLink>
      </div>
    </div>

    <Footer />

  </div>
);

// Export
export default RostovEcoMain;
