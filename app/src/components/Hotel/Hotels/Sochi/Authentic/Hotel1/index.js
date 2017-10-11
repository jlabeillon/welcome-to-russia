// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SochiHotelAuthenticHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Villa Anna </h1>
            <span>Carousel component</span>
            <p id="city-description">This property is 8 minutes walk from the beach. Designed in the style of a 16th century Scottish castle, Villa Anna offers free Wi-Fi and an outdoor pool. Some rooms have a hot tub, a kitchenette and a seating area.

            Each room is simply furnished and includes air conditioning and a minibar. Satellite TV and a dressing room are also available in several rooms at Villa Anna.

            Good Merlin restaurant serves European and Caucasian cuisine in a chateau-style atmosphere. During the summer, Chateau Compound café offers drinks and refreshments surrounded by palm trees and banana groves.

            Guests can relax with a massage treatment and enjoy a game of table tennis and bowling. Villa Anna’s front desk is open 24 hours. Guests have access to a private beach at a nearby hotel which is 10 minutes’ walk away.</p>

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
export default SochiHotelAuthenticHotel1;
