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
            <h1 id="city-name">Buen Retiro</h1>
            <span>Carousel component</span>
            <p id="city-description">This property is 2 minutes walk from the beach. Located near the Kaliningrad Bay, Buen Retiro offers guests classically designed rooms, an on-site restaurant, and free Wi-Fi throughout the property.

            The rooms here provide a refrigerator, a flat-screen TV with satellite channels, air conditioning, and a private bathroom with a shower.

            Other property facilities include a 24-hour front desk, a children’s playground, a games room, room service, banquet facilities, and a shuttle service. There is a gazebo with barbecue facilities. The property offers waveboarding facilities among with necessary training.

            The city centre of Kaliningrad is 12 km away, Kaliningrad Train Station is 11 km from the property. Khrabrovo Airport is 36 km from Buen Retiro. </p>

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
