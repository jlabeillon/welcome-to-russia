// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class VolgogradHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hilton Garden Inn Volgograd</h1>
            <span>Carousel component</span>
            <p id="city-description">Located a 5-minute walk from the Volga River Embankment and 1.8 km from Mamayev Kurgan Memorial, Hilton Garden Inn Volgograd features a fitness centre and a 24-hour front desk. Free WiFi is available throughout the property.

            The rooms provide air conditioning, a mini-fridge, a safety deposit box, a flat-screen TV with satellite channels, an electric kettle and complimentary tea/coffee.

            Hilton Garden Inn Volgograd offers buffet and cooked-to-order breakfast, as well as all-day dining at The Garden Grille & Bar. The Pavilion Pantry Convenience Mart offers snacks and souvenirs. Other facilities include self-service laundry, on-site shop, conference hall and meeting facilities.</p>

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
export default VolgogradHotelLuxuryHotel2;
