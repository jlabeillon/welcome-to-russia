// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KaliningradHotelAuthenticHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hotel Tchaikovsky</h1>
            <span>Carousel component</span>
            <p id="city-description">Located in a historical building in Kaliningrad, 2 km from the city centre, Hotel Chaikovsky features an on-site café serving Russian and French cuisine, a breakfast buffet, free Wi-Fi, and free private parking.

            Rooms here provide guests with a refrigerator, a flat-screen TV, air conditioning, and a private bathroom with a bath or shower and free toiletries.

            Guests can enjoy the on-site Tchaikovsky restaurant. Other property facilities include a 24-hour front desk, room service, a daily maid service, and a shuttle service.

            Kenigsburg Cathedral is 3.5 km away, Kaliningrad Zoo is a 20-minute walk, and the Museum of the World Ocean is 3 km from the property.

            Hotel Chaikovsky is 4.5 km from Kaliningrad Train Station, and 24 km from Khrabrovo Airport. </p>

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
export default KaliningradHotelAuthenticHotel1;
