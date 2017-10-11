// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class PetersbourgAuthentic extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/petersbourg/hotels/eco">ECO</NavLink>
          <NavLink to="/city/petersbourg/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/petersbourg/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/petersbourg/hotels/authentic/pushka">
              <img className="hotels-image" src="/images/hotels/petersbourg-authentic-pushka.jpg" />
              <p className="hotels-description">Pushka Inn is a 18th Century mansion located in an historic part of St. Petersburg, one minute walk from the Palace Square. It offers non-smoking rooms with air conditioning, satellite TV and free Wi-Fi.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/petersbourg/hotels/authentic/ekaterina">
            <img className="hotels-image" src="/images/hotels/petersbourg-authentic-ekaterina.jpg" />
            <p className="hotels-description">Featuring free WiFi and a restaurant, Ekaterina Hotel offers accommodation in Saint Petersburg, 600 m from Church of the Savior on Spilled Blood and 700 m from Hermitage.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/petersbourg/hotels/authentic/hermitage">
            <img className="hotels-image" src="/images/hotels/petersbourg-authentic-hermitage.jpg" />
            <p className="hotels-description">This exclusive 5-star hotel is set in the 1830s mansion in the centre of Saint Petersburg and represents the atmosphere of the original Hermitage Museum. Spa and wellness centre and free Wi-Fi is featured here.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default PetersbourgAuthentic;
