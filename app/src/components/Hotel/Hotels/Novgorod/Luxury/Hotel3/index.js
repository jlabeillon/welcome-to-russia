// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class NovgorodHotelLuxuryHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Park-Hotel Chayka</h1>
            <span>Carousel component</span>
            <p id="city-description">Park-Hotel Chayka offers accommodation in Zhelnino. The hotel has a spa centre and water sports facilities, and guests can enjoy a drink at the bar.

            All rooms have a TV. Some units have a seating area where you can relax. The rooms are equipped with a private bathroom fitted with a bath or shower. For your comfort, you will find bath robes and slippers.

            There is a 24-hour front desk, a cash machine, a shared lounge and hairdresser’s at the property.

            You can play tennis at this hotel, and ski equipment hire is available. Nizhniy Novgorod is 37 km from Park-Hotel Chayka, while Dzerzhinsk is 8 km away.

            This property also has one of the best-rated locations in Zhelnino! Guests are happier about it compared to other properties in the area.</p>

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
export default NovgorodHotelLuxuryHotel3;
