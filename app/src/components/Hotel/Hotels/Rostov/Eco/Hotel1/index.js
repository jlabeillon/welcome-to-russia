// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class RostovHotelEcoHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Don Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">This hotel is located in the western residential area, a 15-minute drive from the centre of Rostov-on-Don. Hotel Don offers free Wi-Fi and modern rooms with a flat-screen TV.

            Rooms at Hotel Don feature classic design and air conditioning. All rooms include a refrigerator and a private bathroom with shower.

            Guests can find many shops and restaurants within a 10-minute walk. The 24-hour reception can also order food for guests.

            Hotel Don offers free parking, and shuttle services can be arranged. It is a 15-minute drive from Rostov-on-Don’s train station, bus station and ferry port. Rostov-on-Don Airport is a 30-minute drive away. </p>

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
export default RostovHotelEcoHotel1;
