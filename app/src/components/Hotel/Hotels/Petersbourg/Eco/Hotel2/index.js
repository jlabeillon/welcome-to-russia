// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelEcoHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Cosmos Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Located next to the All-Russia Exhibition Centre, this hotel offers a spa with a swimming pool, fitness centre and massage services. VDNKh Metro Station is 400 m away.

            The colourful rooms at the Cosmos Hotel have Wi-Fi access, a flat-screen TV with satellite channels, and a refrigerator. Toiletries and a hairdryer are provided in the private bathrooms.

            There are 11 restaurants and cafés at Cosmos Hotel. Planet Cosmos restaurant serves Russian and European cuisine and offers views of the Moscow skyline from the 25th floor.

            An American-style breakfast is served in the Kalinka restaurant. Guests can also enjoy Mediterranean dishes in the Il Gusto restaurant, and Chinese meals and karaoke in the Empress Hall restaurant. </p>

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
export default MoscowHotelEcoHotel2;
