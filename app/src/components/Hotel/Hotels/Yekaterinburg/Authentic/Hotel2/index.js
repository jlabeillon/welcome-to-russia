// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class YekaterinburgHotelAuthenticHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Chekhov Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">The Chekhov is a 3-star hotel in central Ekaterinburg, 300 m from Geologicheskaya Metro Station. Set in 19th-century restored mansion, it features free Wi-Fi and free private parking on site.

            The soundproofed rooms of the Chekhov Hotel are equipped with air conditioning, flat-screen TVs and DVD player. The private bathrooms include a bathtub and provide comfortable bathrobes and slippers.

            Hotel Chekhov offers a permanent exhibition dedicated to the life and work of the writer A.P. Chekhov and his days in Ekaterinburg.

            Guests can enjoy the central location and discover contemporary Russian cuisine in one of the many cafes and restaurants that surround the hotel. </p>

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
export default YekaterinburgHotelAuthenticHotel2;
