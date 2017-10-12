// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class RostovHotelAuthenticHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Nabokov Loft-Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Offering free WiFi, Loft-Hotel Nabokov is located in in Rostov-on-Don.

            All rooms are air conditioned and come with either private or shared bathrooms.

            Guests can cook in the shared kitchen and there is a 24-hour front desk at the property.

            Rostov-on-Don Train and Bus Station is 3 km away. The nearest airport is Rostov-on-Don Airport, 7 km from the property.

            This is our guests’ favourite part of Rostov on Don, according to independent reviews.

            This property also has one of the best-rated locations in Rostov on Don! Guests are happier about it compared to other properties in the area.</p>

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
export default RostovHotelAuthenticHotel1;
