// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class RostovHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Grand Hotel Soho</h1>
            <span>Carousel component</span>
            <p id="city-description">Grand Hotel Soho offers accommodation in Azov. Guests can enjoy the on-site restaurant. Free WiFi is offered throughout the property and free private parking is available on site.

            Each room at this hotel is air conditioned and features a flat-screen TV with cable channels. Certain rooms include views of the river or city. Each room is equipped with a private bathroom equipped with a bath. Extras include bath robes and slippers.

            You will find a 24-hour front desk at the property.

            Rostov on Don is 24 km from Grand Hotel Soho, while Taganrog is 41 km away. The nearest airport is Rostov on Don Airport, 33 km from Grand Hotel Soho.

            This property also has one of the best-rated locations in Azov! Guests are happier about it compared to other properties in the area.</p>

            <div id="form-hotel" className="col-xs-6">
              <form>
              <input type="text" placeholder="Lastname" />
              <input type="text" placeholder="Firstname" />
              <br />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <br />
              <input type="radio" />I accept to be contacted by phone
              <br />
              <textarea rows="4" cols="50" placeholder="Here you can send a message to the hotel. Note that it is preferable to send your message in English."></textarea>
              <br />
              <button>Send</button>
              </form>
            </div>

            <div id="map-hotel" className="col-xs-6">
              <p>Map</p>
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default RostovHotelLuxuryHotel2;
