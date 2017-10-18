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

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Kaiserhof Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Located on the bank of the Pregolia River on the territory of so called Fishing Village, Kaiserhof Hotel offers elegant rooms with free WiFi. It features spa centre facilities.

            The Kaiserhof has spacious guest rooms and suites, many with balconies with a river or Cathedral view. Every room includes a flat-screen TV.

            Hofburg Restaurant with its transparent roof and stunning stained-glass windows is the perfect place to enjoy European cuisine.

            Spa facilities include a stylish pool, pool bar and sun terrace. There are also 5 steam baths and a hot tub.

            Kaiserhof Hotel is close to Konigsberg Cathedral and the BalticExpo Exhibition Centre. </p>

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
