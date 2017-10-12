// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SamaraHotelEcoHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Volna Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">This property is a 9-minute walk from the beach. This hotel is located in the business and cultural centre of Samara, a 20-minute walk from Samara city centre. The Volna Hotel offers a 24-hour reception and billiard table.

            Rooms at the Volna Hotel Samara are warmly decorated and feature classic décor. Some rooms include a TV, refrigerator, electric kettle and private bathroom.

            Restaurants and cafés can be found within a 10-minute walk of the hotel. Breakfast can be ordered to the room.</p>

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
export default SamaraHotelEcoHotel3;
