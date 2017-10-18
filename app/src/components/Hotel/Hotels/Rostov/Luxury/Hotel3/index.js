// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class RostovHotelLuxuryHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Mercure Rostov-On-Don Center</h1>
            <span>Carousel component</span>
            <p id="city-description">Located a 7-minute walk from the Don River embankment, Mercure Rostov-On-Don Center features a sauna and a fitness centre. Free WiFi is available on site.

            The rooms offer air conditioning, an electric kettle and a flat-screen TV with satellite channels.

            Guests can dine in D’Ajemoff Restaurant serving traditional Russian and French cuisine, or order room service and breakfasts in the room.

            Pushkinskaya Alleya is a 5-minute walk away, and Bolshaya Sadovaya Street is 100 m from the hotel. Rostov-on-Don Train Station is 3.5 km away, and Rostov-on-Don Airport is 9 km from Mercure Rostov-On-Don Center.

            This is our guests’ favourite part of Rostov on Don, according to independent reviews.</p>

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
export default RostovHotelLuxuryHotel3;
