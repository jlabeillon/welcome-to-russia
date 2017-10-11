// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelLuxuryHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hyatt Regency Ekaterinburg</h1>
            <span>Carousel component</span>
            <p id="city-description">Hyatt Regency Ekaterinburg offers accommodation a short walk from the city square. All rooms feature individual climate control, LCD TVs and bathrooms with deep baths and rain showers.

            The spa & fitness centre includes a state-of-the-art gym, a sauna, a hammam and a whirlpool bath. There’s also an indoor swimming pool with poolside seating and panoramic views of the city.

            The hotel features 2 restaurants and 3 lounge bars. The lounge area provides daily complimentary evening cocktails and hors d’ oeuvres, available for Club room categories.

            The Hyatt can provide guided tours of the historic city of Yekaterinburg, visiting the Historical Square, the Dam and the Cathedral–on–the-Blood.A dedicated concierge can help you make dinner reservations and arrange transportation to Koltsovo International Airport. </p>

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
export default MoscowHotelLuxuryHotel1;
