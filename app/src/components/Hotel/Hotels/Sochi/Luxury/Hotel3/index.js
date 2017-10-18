// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SochiHotelLuxuryHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Rodina Grand Hotel & SPA</h1>
            <span>Carousel component</span>
            <p id="city-description">This property is 7 minutes walk from the beach. This luxury 5-star hotel is located on the Black Sea Coast in Sochi. It features a private beach, several gourmet restaurants, a Wellness and Spa by Rodina with indoor and outdoor pools and kids club.

            Rodina Grand Hotel & SPA is surrounded by 15-hectare sub-tropical gardens. Its stylish rooms and suites feature flat-screen TVs and designer furniture.

            Buffet breakfasts are served in the main Moscow Restaurant. The beachside BSBC Restaurant serves drinks and snacks, and guests can relax with a cocktail in one of the stylish bars. There is also a rooftop terrace, Nebesa.

            Rodina Grand Hotel & SPA is the only 5-star boutique hotel in Sochi. Other exclusive facilities include a private movie theatre, billiard room, tennis courts and basketball and volleyball courts. Rodina provides guests with golf carts for transport around the resort. </p>

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
export default SochiHotelLuxuryHotel3;
