// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KazanHotelEcoHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Gvardeiskaya Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Located 3 km from the large Koltso shopping mall, this hotel in South-East Kazan offers a 24-hour reception, and rooms feature refrigerators and free toiletries.

            Individually furnished rooms and suites await you at the Gvardeiskaya Hotel. Each room has a living area with desk and TV.

            Gvardeiskaya’s café-bar is open all day, and serves a range of international meals. Packed lunches can be prepared on request.

            The Ulitsa Adelya Kutuya Tram Stop is 100 m from Hotel Gvardeiskaya, and Omet’evo Train Station is 1 km away. </p>

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
export default KazanHotelEcoHotel3;
