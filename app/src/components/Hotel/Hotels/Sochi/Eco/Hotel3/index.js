// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SochiHotelEcoHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Marika Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Offering an outdoor pool and barbecue, Marika Hotel is set in Sochi, a 10-minute walk of the Black Sea coast. Guests can enjoy the on-site restaurant. Free WiFi is provided and free private parking is available on site.

            Rooms come with a flat-screen TV. You will find a kettle in the room. For your comfort, you will find bathrobes and slippers.

            You will find a 24-hour front desk at the property.

            Green Theatre is 5 km from Marika Hotel, while Tayny Okeana Aquarium is 5 km from the property. The nearest airport is Adler-Sochi International Airport, 28 km from the property. </p>

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
export default SochiHotelEcoHotel3;
