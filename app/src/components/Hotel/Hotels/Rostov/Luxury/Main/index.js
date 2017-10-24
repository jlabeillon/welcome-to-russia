// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const RostovLuxuryMain = () => (
  <div className="container" id="hotels-body">
    <Header />

    <div className="nav-options-container">
      <NavLink to="/city/rostov/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
      <NavLink to="/city/rostov/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
      <NavLink to="/city/rostov/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/rostov/hotels/luxury/izvolte">
          <img className="hotels-image" alt="izvolte-hotel" src="/images/hotels/Rostov/rostov-luxury-izvolte.jpg" />
          <p className="hotels-description">Get the celebrity treatment with world-class service at Residentsiya (Izvolte) Hotel. One of our top picks in Rostov on Don. This hotel is situated in the historic building in the centre of Rostov. Hotel Residence features stylish rooms with free WiFi. It has a fitness centre, spa with massage services and wellness centre</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/rostov/hotels/luxury/soho">
          <img className="hotels-image" alt="soho-hotel" src="/images/hotels/Rostov/rostov-luxury-soho.jpg" />
          <p className="hotels-description">Grand Hotel Soho offers accommodation in Azov. Guests can enjoy the on-site restaurant. Free WiFi is offered throughout the property and free private parking is available on site.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/rostov/hotels/luxury/mercure">
          <img className="hotels-image" alt="mercure-hotel" src="/images/hotels/Rostov/rostov-luxury-mercure.jpg" />
          <p className="hotels-description">Located a 7-minute walk from the Don River embankment, Mercure Rostov-On-Don Center features a sauna and a fitness centre. Free WiFi is available on site.</p>
        </NavLink>
      </div>
    </div>

    <Footer />

  </div>
);

// Export
export default RostovLuxuryMain;
