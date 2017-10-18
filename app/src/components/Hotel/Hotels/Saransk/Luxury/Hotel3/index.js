// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SaranskHotelLuxuryHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Severny Zamok Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Located in Saransk, Severny Zamok Hotel features free WiFi and free private parking.

            Each room offers a air conditioning and a flat-screen TV with satellite channels. You will also find a fridge. The private bathrooms are fitted with a hairdryer.

            Guests can enjoy breakfast or lunch at the properties cafe. Banquet facilities with an à la carte service are also available. An array of activities offered on site include billiards and table tennis.

            Saransk Train Station is 7 km away, and Saransk Airport is 13.5 km from Severny Zamok Hotel. </p>

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
export default SaranskHotelLuxuryHotel3;
