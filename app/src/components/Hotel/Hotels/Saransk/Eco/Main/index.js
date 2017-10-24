// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const SaranskEcoMain = () => (
  <div className="container" id="hotels-body">
    <Header />

    <div className="nav-options-container">
      <NavLink to="/city/saransk/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
      <NavLink to="/city/saransk/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
      <NavLink to="/city/saransk/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/saransk/hotels/eco/shpinat">
          <img className="hotels-image" alt="shpinat-hotel" src="/images/hotels/Saransk/saransk-eco-shpinat.jpg" />
          <p className="hotels-description">Hostel Shpinat is located in Saransk, just 1.9 km from Mordovia Arena.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/saransk/hotels/eco/olympia">
          <img className="hotels-image" alt="olympia-hotel" src="/images/hotels/Saransk/saransk-eco-olympia.jpg" />
          <p className="hotels-description">Located just a 15-minute walk from Mordovian Fine Arts Museum, Hotel Olympia features a sauna, indoor swimming pool and wellness centre. This property offers a steam bath, fitness centre and billiards.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/saransk/hotels/eco/vizit">
          <img className="hotels-image" alt="vizit-hotel" src="/images/hotels/Saransk/saransk-eco-vizit.jpg" />
          <p className="hotels-description">Featuring free WiFi throughout the property, Hotel Vizit offers accommodations in Saransk. Guests can enjoy the on-site restaurant. Free private parking is available on site.</p>
        </NavLink>
      </div>
    </div>

    <Footer />

  </div>
);

// Export
export default SaranskEcoMain;
