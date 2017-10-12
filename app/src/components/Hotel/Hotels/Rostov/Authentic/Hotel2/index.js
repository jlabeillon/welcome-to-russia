// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class RostovHotelAuthenticHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hotel Legenda</h1>
            <span>Carousel component</span>
            <p id="city-description">Hotel Legenda offers accommodation in Rostov on Don. Free WiFi is provided throughout the property and free private parking is available on site.

            All rooms include a flat-screen TV. Certain units include a seating area to relax in after a busy day. Each room is equipped with a private bathroom equipped with a shower. For your comfort, you will find bathrobes, slippers and free toiletries.

            There is a 24-hour front desk at the property.

            Rostov Arena is 7 km from Hotel Legenda, while Olimp-2 Stadium is 5 km from the property. The nearest airport is Rostov on Don Airport, 2 km from Hotel Legenda.

            This property also has one of the best-rated locations in Rostov on Don! Guests are happier about it compared to other properties in the area. </p>

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
export default RostovHotelAuthenticHotel2;
