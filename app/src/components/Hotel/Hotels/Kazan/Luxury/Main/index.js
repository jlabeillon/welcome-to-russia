// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KazanLuxuryMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/kazan/hotels/eco">ECO</NavLink>
          <NavLink to="/city/kazan/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/kazan/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/kazan/hotels/luxury/hilton">
              <img className="hotels-image" src="/images/hotels/Kazan/kazan-luxury-hilton.jpg" />
              <p className="hotels-description">Located in the heart of Kazan city, the hotel is a 5-minute walk from historic sites such as the Kazan Kremlin, the National Museum of Tatarstan and Kazan Academic Drama Theatre. Free WiFi and free private parking are available on site.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/kazan/hotels/luxury/shalyapin">
            <img className="hotels-image" src="/images/hotels/Kazan/kazan-luxury-shalyapin.jpg" />
            <p className="hotels-description">The Shalyapin Palace is a 4-star hotel, centrally located in Kazan near the pedestrian zone of Baumana street. The hotel has a total of 123 classically-designed guest rooms, offering the guest a clean and comfortable place to stay.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/kazan/hotels/luxury/luciano">
            <img className="hotels-image" src="/images/hotels/Kazan/kazan-luxury-luciano.jpg" />
            <p className="hotels-description">This spa hotel features 5 indoor swimming pools, 7 saunas, 3 thermal baths, and a fully-equipped fitness centre. It is located just one metro stop from the impressive Kazan Kremlin. Free private parking is featured.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default KazanLuxuryMain;
