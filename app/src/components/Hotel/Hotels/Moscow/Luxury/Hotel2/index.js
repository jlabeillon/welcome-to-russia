// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">The St. Regis Moscow Nikolskaya</h1>
            <span>Carousel component</span>
            <p id="city-description">This hotel offers a central location in the heart of Moscow, right on Lubyanka Square, a 10-minute walk from the Kremlin. Rooms with free personalised St. Regis Butler Service and free WiFi are featured at St. Regis Moscow Nikolskaya.

            The elegant, air-conditioned hotel rooms and suites are decorated in beige and brown colours. Every room comes complete with a flat-screen TV, a minibar, a seating area and a private bathroom with bathrobes and slippers. Some rooms feature views of the Kremlin and Red Square, while others have balconies with views of the interior courtyard.

            Breakfasts are served in the Italian A Tavola Restaurant. Guests can also have Russian snacks and dishes from the Wok menu at Orlov Lobby Bar and Lounge, as well as enjoy evening champagne.

            Lubyanka Metro Station is only steps away. Belorussky Train Station is 4 km from St. Regis Moscow Nikolskaya, and Sheremetyevo International Airport is a 35-minute express train ride from this station. </p>

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
export default MoscowHotelLuxuryHotel2;
