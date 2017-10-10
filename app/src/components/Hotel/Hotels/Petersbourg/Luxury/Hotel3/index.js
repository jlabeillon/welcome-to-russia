// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelLuxuryHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Four Seasons Hotel Moscow</h1>
            <span>Carousel component</span>
            <p id="city-description">Four Seasons Hotel Moscow is located in the historic building of Moskva Hotel, in the very heart of Moscow, a minutes’ walk from the Kremlin, Red Square and the Bolshoi Theatre. Free WiFi access is available in this hotel.

            Each elegant room and suite will provide you with air conditioning, a flat-screen TV, a Nespresso coffee machine and an Ipad. Featuring a bath, private bathroom also comes with a hairdryer and free toiletries by Roberto Cavalli. Extras include a desk and a safety deposit box.

            Quadrum Restaurant serves Italian cuisine, and Bystro offers Russian dishes with a Nordic touch. Guests can enjoy a drink at The Silk Lounge or Moskovsky Bar. Other facilities offered at the property include meeting facilities, a ticket service and luggage storage.</p>

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
export default MoscowHotelLuxuryHotel3;
