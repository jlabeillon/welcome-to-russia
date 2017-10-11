// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KazanHotelAuthenticHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Don Kikhot Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Offering a fitness centre, Don Kikhot Hotel is located in the centre of Kazan, just a 5-minute walk from Kazan Central Train Station and a 15-minute walk from the Kremlin. Free WiFi access is available.

            Each elegant room here will provide you with a flat-screen TV, air conditioning and a minibar. Featuring a hairdryer, private bathroom also comes with free toiletries and slippers. Extras include cable channels.

            At Don Kikhot Hotel you will find a 24-hour front desk. The on-site restaurant serves Tatar, Russian and Spanish cuisine. The property offers free parking.

            Kazan International Airport is a 30-minute drive away. </p>

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
export default KazanHotelAuthenticHotel1;
