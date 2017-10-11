// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KazanHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Shalyapin Palace Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">The Shalyapin Palace is a 4-star hotel, centrally located in Kazan near the pedestrian zone of Baumana street.

            The hotel has a total of 123 classically-designed guest rooms, offering the guest a clean and comfortable place to stay.

            Every morning a rich buffet breakfast is servied in the on-site restaurant. Guests can also enjoy delicious Tatar and Russian cuisine in the Capella Restaurant, which also serves a range of European dishes. The Shalyapins Piano Bar is open 24-hours.

            All guests of the Shalyapin Palace receive complimentary access to the fitness centre with its indoor swimming pool, gym and sauna. The hotel offers business meeting facilities of different capacity. There is also an on site car parking, available upon request to hotel guests.</p>

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
export default KazanHotelLuxuryHotel2;
