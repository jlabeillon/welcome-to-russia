// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SochiHotelAuthenticHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Tsvetnoy 5 Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">This property is 12 minutes walk from the beach. Featuring free WiFi, Tsvetnoy 5 Hotel is set in Sochi, a 7-minute walk from the city centre. The beach is 1,7 km away from the property.

            Guests can enjoy the on-site bar.

            Each room at this hotel is air conditioned and is fitted with a TV. Rooms have a private bathroom. Free toiletries are provided.

            Central Market is 1.2 km from Tsvetnoy 5 Hotel, while Riviera Park is 1.5 km away. The nearest airport is Adler-Sochi International Airport, 31 km from the property. </p>

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
export default SochiHotelAuthenticHotel3;
