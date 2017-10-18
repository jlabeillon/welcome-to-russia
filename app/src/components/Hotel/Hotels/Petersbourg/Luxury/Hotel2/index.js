// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Lotte Hotel St. Petersburg</h1>
            <span>Carousel component</span>
            <p id="city-description">Offering a terrace and spa centre, Lotte Hotel St. Petersburg is located in Saint Petersburg. The hotel has a sauna and fitness centre, and guests can enjoy a meal at the restaurant.

            Every room is equipped with a flat-screen TV. All rooms come with a private bathroom equipped with a bath or shower. For your comfort, you will find bathrobes, slippers and a hairdryer.

            There is a 24-hour front desk at the property.

            Saint Isaac’s Cathedral is 400 m from Lotte Hotel St. Petersburg, while Admiralty Building is 700 m away. The nearest airport is Pulkovo Airport, 21 km from the property. </p>

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
export default MoscowHotelLuxuryHotel2;
