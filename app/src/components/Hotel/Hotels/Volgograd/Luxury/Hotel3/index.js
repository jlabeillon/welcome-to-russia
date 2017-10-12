// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class VolgogradHotelLuxuryHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hotel Volgograd</h1>
            <span>Carousel component</span>
            <p id="city-description">Located in the centre of Volgograd, a 5-minute walk to Komsomolskaya Metro Station, Hotel Volgograd offers a fitness centre and business facilities. Free WiFi is available. Guests can order a meal in the 24-hour on-site restaurant serving dishes of European and Russian cuisine.

            The comfortable rooms offer air conditioning, a flat-screen TV, minibar and private bathroom with a shower or bath, hairdryer and free toiletries.

            Various cafes and restaurants are situated within a 5-minute walk. The Battle for Stalingrad Museum is 1.5 km away. The Mamayev Kurgan Memorial is 5 metro stops away. Free parking is available.

            Volgograd-1 Train Station is 1.5 km away. Gumrak Airport is 19 km away.

            This is our guests’ favorite part of Volgograd, according to independent reviews.

            This property also has one of the top-rated locations in Volgograd! Guests are happier about it compared to other properties in the area.</p>

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
export default VolgogradHotelLuxuryHotel3;
