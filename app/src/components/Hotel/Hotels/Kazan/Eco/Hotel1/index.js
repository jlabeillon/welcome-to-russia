// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KazanHotelEcoHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Berison Moskovskaya</h1>
            <span>Carousel component</span>
            <p id="city-description">Berison Moskovskaya is located in the centre of Kazan, on the bank of Lake Kaban. The Kazan Kremlin is 2 km away. Free WiFi access is available.

            Each room here will provide you with air conditioning and cable TV. Featuring a shower, private bathroom also comes with free toiletries.

            At Berison Moskovskaya you will find a 24-hour front desk. A variety of cafés and restaurants can be found within a 5-minute walk of the hotel.

            Ploshchad Tukaya Metro Station is 500 m away. Kazan Central Train Station is 1.5 km from the hotel, and Kazan International Airport is 25 km away. </p>

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
export default KazanHotelEcoHotel1;
