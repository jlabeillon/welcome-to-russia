// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class NovgorodHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Courtyard by Marriott Nizhny Novgorod City Center </h1>
            <span>Carousel component</span>
            <p id="city-description">Featuring a fitness centre, Courtyard by Marriott Nizhny Novgorod City Center is located a 20-minute walk from Nizhny Novgorod Kremlin. Free WiFi and free private parking are available on site.

            All rooms are fitted with air conditioning, a flat-screen TV with satellite channels, electric kettle and working area. The bathrooms come with a hairdryer and free toiletries.

            Guests can dine in the hotel’s restaurant and there is also a 24-hour front desk at the property.

            Moskovsky Train Station is 5 km away and Nizhny Novgorod International Airport is 23 km from Courtyard by Marriott Nizhny Novgorod City Center. </p>

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
export default NovgorodHotelLuxuryHotel2;
