// Import
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SamaraEcoMain extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        {/* Header */}
          <Header />

          <h1>Hotels</h1>

          <NavLink to="/city/samara/hotels/eco">ECO</NavLink>
          <NavLink to="/city/samara/hotels/authentic">AUTHENTIC</NavLink>
          <NavLink to="/city/samara/hotels/luxury">LUXURY</NavLink>

          <div className="row">
            <div className="col-xs-12">
              <NavLink to="/city/samara/hotels/eco/elyzium">
              <img className="hotels-image" src="/images/hotels/samara-eco-elyzium.jpg" />
              <p className="hotels-description">Featuring free Wi-Fi access available throughout, Elyzium Hotel Complex offers rooms in Samara, a 10-minute drive from the city centre. A sauna, hot tub and a massage service are available upon request.</p>
              </NavLink>
            </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/samara/hotels/eco/zagora">
            <img className="hotels-image" src="/images/hotels/samara-eco-zagora.jpg" />
            <p className="hotels-description">Offering a sauna, tennis court and billiards, Stara Zagora Hotel is located in Samara, on the premises of a sports centre. Free Wi-Fi access is available.</p>
            </NavLink>
          </div>
          </div>

          <div className="row">
          <div className="col-xs-12">
            <NavLink to="/city/samara/hotels/eco/volna">
            <img className="hotels-image" src="/images/hotels/samara-eco-volna.jpg" />
            <p className="hotels-description">This property is a 9-minute walk from the beach. This hotel is located in the business and cultural centre of Samara, a 20-minute walk from Samara city centre. The Volna Hotel offers a 24-hour reception and billiard table.</p>
            </NavLink>
          </div>
          </div>

        <Footer />

      </div>
    );

  };
}

// Export
export default SamaraEcoMain;
