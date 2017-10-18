// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class PetersbourgHotelEcoHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Piter’s house na Nevskom</h1>
            <span>Carousel component</span>
            <p id="city-description">Piter’s house na Nevskom is located in the Tsentralny district district in Saint Petersburg, 2.7 km from State Russian Museum.

            Each room has a flat-screen TV. Certain units feature a seating area for your convenience. You will find a kettle in the room. Every room is equipped with a private bathroom. For your comfort, you will find slippers, free toiletries and a hairdryer. Piters house na Nevskom features free WiFi throughout the property.

            Church of the Savior on Spilled Blood is 2.9 km from Piter’s house na Nevskom, while Palace Square is 3.5 km away. The nearest airport is Pulkovo Airport, 15 km from the property.  </p>

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
export default PetersbourgHotelEcoHotel1;
