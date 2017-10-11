// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelAuthenticHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Ekaterina Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Featuring free WiFi and a restaurant, Ekaterina Hotel offers accommodation in Saint Petersburg, 600 m from Church of the Savior on Spilled Blood and 700 m from Hermitage.

            Rooms are air conditioned and have a flat-screen TV. The private bathrooms come with bathrobes.

            There is a 24-hour front desk at the property. Plenty of dining options can be found within a 5-minute walk from Ekaterina Hotel.

            Palace Square is 700 m away. Moskovsky Train Station is 4 km from the hotel, and Pulkovo Airport is 20 km away. </p>

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
export default MoscowHotelAuthenticHotel2;
