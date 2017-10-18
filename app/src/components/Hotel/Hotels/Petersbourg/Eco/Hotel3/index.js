// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelEcoHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Staraya Gora Hostel</h1>
            <span>Carousel component</span>
            <p id="city-description">Featuring free WiFi throughout the property, Staraya Gora Hostel is located in Saint Petersburg, 900 m from State Russian Museum.

            You will find a kettle in the room. The rooms are fitted with a shared bathroom equipped with a shower. For your comfort, you will find free toiletries and a hairdryer. A flat-screen TV with cable channels is provided.

            There is a 24-hour front desk at the property.

            Church of the Savior on Spilled Blood is 1.1 km from Staraya Gora Hostel, while Palace Square is 1.8 km away. The nearest airport is Pulkovo Airport, 16 km from Staraya Gora Hostel. </p>

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
export default MoscowHotelEcoHotel3;
