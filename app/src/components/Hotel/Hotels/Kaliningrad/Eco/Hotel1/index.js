// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KaliningradHotelEcoHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Cottbus</h1>
            <span>Carousel component</span>
            <p id="city-description">Located in the peaceful Rosgarten district of Kaliningrad, this hotel offers European cuisine, a sauna and a small pool. Guests enjoy free Wi-Fi and free on-site parking.

            Individually furnished rooms are provided at the Cottbus Hotel. Every room includes cable TV and a private bathroom with shower.

            Decorated in the style of a Medieval church, Cottbus’s restaurant features a colourful bar. Wines, spirits and karaoke can be enjoyed here in the evenings. Guests also have use of a barbecue area, and can book packed lunches on request.

            Kaliningrad city centre is 6 km away, and the 24-hour reception can organise rental cars for you. The peaceful Botanichesky Sad gardens are just a 7-minute walk away. </p>

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
export default KaliningradHotelEcoHotel1;
