// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KazanHotelAuthenticHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hotel Sapozhok-Kaushchi</h1>
            <span>Carousel component</span>
            <p id="city-description">Set in Kazan, 200 m from Marcani Mosque, Kaushchi features air-conditioned rooms.

            The rooms have a flat-screen TV. Kaushchi features free WiFi throughout the property.

            You will find a 24-hour front desk at the property.

            Church of the Exaltation of the Holy Cross is 800 m from Kaushchi, while Kazan State University is 1.4 km away. Kazan International Airport is 22 km from the property.

            This is our guests’ favourite part of Kazan, according to independent reviews.

            Couples particularly like the location — they rated it 9.5 for a two-person trip.</p>

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
export default KazanHotelAuthenticHotel2;
