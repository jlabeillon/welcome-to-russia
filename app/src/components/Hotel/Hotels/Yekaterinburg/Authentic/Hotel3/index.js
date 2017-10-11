// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class YekaterinburgHotelAuthenticHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hotel Renomme</h1>
            <span>Carousel component</span>
            <p id="city-description">Featuring a sauna and fitness centre, Hotel Renomme is located in Yekaterinburg, right by Geologicheskaya Metro Station. The pedestrian Vaynera Street is within a 5-minute walk. Free WiFi and free private parking are provided.

            The air-conditioned rooms are decorated in bright colours and feature a flat-screen TV with cable channels. The bathroom comes with a hairdryer and free toiletries.

            At Hotel Renomme you will find a 24-hour front desk and Mélange cafe, serving pastry and deserts as well as Kryushon Restaurant, offering provincial cuisine. Other facilities offered at the property include a shared lounge, luggage storage and an ironing service.</p>

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
export default YekaterinburgHotelAuthenticHotel3;
