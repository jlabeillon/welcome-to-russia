// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class VolgogradAuthenticMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <div className="nav-options-container">
            <NavLink to="/city/volgograd/hotels/eco" className="nav-options" activeClassName="active-nav">eco</NavLink>
            <NavLink to="/city/volgograd/hotels/authentic" className="nav-options" activeClassName="active-nav">authentic</NavLink>
            <NavLink to="/city/volgograd/hotels/luxury" className="nav-options" activeClassName="active-nav">luxury</NavLink>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/volgograd/hotels/authentic/zamok">
              <img className="hotels-image" src="/images/hotels/Volgograd/volgograd-authentic-zamok.jpg" />
              <p className="hotels-description">Zamok Hotel is located a 7-minute drive from Mamaev Kurgan in Volgograd. The hotel features a sauna, free Wi-Fi and free private parking.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/volgograd/hotels/authentic/plaza">
            <img className="hotels-image" src="/images/hotels/Volgograd/volgograd-authentic-plaza.jpg" />
            <p className="hotels-description">Featuring free Wi-Fi and a sauna, Plaza Hotel is located 5 minutes’ walk from the Kazan Cathedral in Volgograd city. It offers a fitness centre and rooms with air conditioning.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/volgograd/hotels/authentic/sloboda">
            <img className="hotels-image" src="/images/hotels/Volgograd/volgograd-authentic-sloboda.jpg" />
            <p className="hotels-description">Featuring a spa centre with a sauna and outdoor swimming pool, Tsaritsinskaya Sloboda is located in natural surroundings in Volgograd, a 10-minute drive to the city centre. It also offers a large garden with BBQ facilities. Free Wi-Fi and parking are available.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default VolgogradAuthenticMain;
