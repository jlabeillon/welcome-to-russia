// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KazanHotelAuthenticHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Tatarskaya Usadba</h1>
            <span>Carousel component</span>
            <p id="city-description">Stay in the heart of Kazan – Excellent location - show map

            One of our top picks in Kazan.

            Located a 2-minute walk from Al-Mardzhani Mosque on the bank of Nizhny Kaban Lake in Kazan, Tatarskaya Usadba offers free WiFi.

            All rooms are air conditioned and come with cable TV and a minibar. A private bathroom includes free toiletries.

            Guests can dine in the hotel’s own restaurant that features traditional Tatar dishes baked in an old Bulgarian wood oven. The local vinotheque provides a variety of wine types.

            A gallery of folk craft with local crafted goods is available on site.

            Kol Sharif Mosque and Kazan Kremlin are 2 km from the property. Kazan Train Station is 1.5 km away, and Kazan International Airport is 25 km from Tatarskaya Usadba. </p>

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
export default KazanHotelAuthenticHotel3;
