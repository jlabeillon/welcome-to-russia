// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';

// Code
class Hotels extends React.Component {
  render() {
    return (
      <div className="container" id="hotels-body">

        <div className="row">
          <div className="col-xs-1">
            <img className="logo-russia" src="" alt="logo-russia" />
          </div>
          <div className="col-xs-7">
            <span>Nav component</span>
          </div>
          <div className="col-xs-4">
            <a href="">Inscription</a>
            <a href="">Connection</a>
          </div>
        </div>

          <h1>Hotels</h1>

          <button>ECO</button>
          <button>AUTHENTIC</button>
          <button>LUXURY</button>

          <div className="row">
            <div className="col-xs-6 col-xs-offset-3">
              <img className="hotels-image" src="images/hotels/moscow-eco-novinsky.jpg" />
              <p className="hotels-description">Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6 col-xs-offset-3">
              <img className="hotels-image" src="images/hotels/moscow-eco-novinsky.jpg" />
              <p className="hotels-description">Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6 col-xs-offset-3">
              <img className="hotels-image" src="images/hotels/moscow-eco-novinsky.jpg" />
              <p className="hotels-description">Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.</p>
            </div>
          </div>

        <Footer />

      </div>
    );
  };
}

// Export
export default Hotels;
