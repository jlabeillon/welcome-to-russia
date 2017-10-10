// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelAuthenticHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Tchaikovsky Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Situated in Moscow, 1 km from Kremlin, Red Square and State Historical Museum, Tchaikovsky Hotel boasts air-conditioned rooms with free WiFi throughout the property. The hotel is located in the historical building. Guests can enjoy the on-site bar. Private parking is available on site.

            Each room has a flat-screen TV. Some rooms feature a seating area for your convenience. You will find a coffee machine in the room. For your comfort, you will find bathrobes, slippers and free toiletries.

            You will find a 24-hour front desk at the property. Russian and European cuisine is offered in the on’site restaurant. Banquet facilities are also offered.

            Arbat Street is 1 km from Tchaikovsky Hotel, while The Kremlin is 1.1 km away. The nearest airport is Sheremetyevo International Airport, 26 km from Tchaikovsky Hotel.  </p>

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
export default MoscowHotelAuthenticHotel1;
