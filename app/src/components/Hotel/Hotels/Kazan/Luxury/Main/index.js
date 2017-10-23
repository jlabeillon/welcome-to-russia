// Import
import React from 'react';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const KazanLuxuryMain = () => (
  <div className="container" id="hotels-body">
    <Header />
    <div className="nav-options-container">
      <NavLink to="/city/kazan/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
      <NavLink to="/city/kazan/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
      <NavLink to="/city/kazan/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/kazan/hotels/luxury/hilton">
          <img className="hotels-image" alt="hilton" src="/images/hotels/Kazan/kazan-luxury-hilton.jpg" />
          <p className="hotels-description">Located in the heart of Kazan city, the hotel is a 5-minute walk from historic sites such as the Kazan Kremlin, the National Museum of Tatarstan and Kazan Academic Drama Theatre. Free WiFi and free private parking are available on site.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/kazan/hotels/luxury/shalyapin">
          <img className="hotels-image" alt="shalyapin" src="/images/hotels/Kazan/kazan-luxury-shalyapin.jpg" />
          <p className="hotels-description">The Shalyapin Palace is a 4-star hotel, centrally located in Kazan near the pedestrian zone of Baumana street. The hotel has a total of 123 classically-designed guest rooms, offering the guest a clean and comfortable place to stay.</p>
        </NavLink>
      </div>
    </div>

    <div className="row">
      <div className="col-xs-12">
        <NavLink to="/city/kazan/hotels/luxury/luciano">
          <img className="hotels-image" alt="luciano" src="/images/hotels/Kazan/kazan-luxury-luciano.jpg" />
          <p className="hotels-description">This spa hotel features 5 indoor swimming pools, 7 saunas, 3 thermal baths, and a fully-equipped fitness centre. It is located just one metro stop from the impressive Kazan Kremlin. Free private parking is featured.</p>
        </NavLink>
      </div>
    </div>

    <Footer />

  </div>
);

// Export
export default KazanLuxuryMain;
