// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowEco extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/moscow/hotels/eco">ECO</NavLink>
          <NavLink to="/city/moscow/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/moscow/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/moscow/hotels/authentic/tchaikovsky">
              <img className="hotels-image" src="/images/hotels/moscow-authentic-tchaikovsky.jpg" />
              <p className="hotels-description">Situated in Moscow, 1 km from Kremlin, Red Square and State Historical Museum, Tchaikovsky Hotel boasts air-conditioned rooms with free WiFi throughout the property. The hotel is located in the historical building. Guests can enjoy the on-site bar. Private parking is available on site.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/moscow/hotels/authentic/radisson">
            <img className="hotels-image" src="/images/hotels/moscow-authentic-radisson.jpg" />
            <p className="hotels-description">This luxury hotel is situated at the intersection of Moscow’s Kutuzovskiy Prospekt and Novy Arbat and occupies a Stalinist skyscraper. It offers free Wi-Fi, an indoor pool and modern spa facilities.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/moscow/hotels/authentic/ivan">
            <img className="hotels-image" src="/images/hotels/moscow-authentic-ivan.jpg" />
            <p className="hotels-description">Featuring free WiFi throughout the property, Ivan Chai - hotel and coffee offers accommodation in Moscow. All rooms are equipped with a private bathroom. Extras include free toiletries and a hairdryer.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default MoscowEco;
