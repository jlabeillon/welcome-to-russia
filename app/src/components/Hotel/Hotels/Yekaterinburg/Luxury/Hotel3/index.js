// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelLuxuryHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Ramada Ekaterinburg Hotel & Spa</h1>
            <span>Carousel component</span>
            <p id="city-description">Get the celebrity treatment with world-class service at Ramada Ekaterinburg Hotel & Spa

            One of our top picks in Yekaterinburg.

            This property is 3 minutes walk from the beach. A 10-minute drive from Koltsovo Airport, this hotel offers free Wi-Fi and a free spa with 2 swimming pools, sauna and steam room. This lakefront hotel is surrounded by forests.

            The Ramada Ekaterinburg Hotel & Spa offers rooms with modern décor and wonderful views of the surrounding countryside. Each air-conditioned room has a seating area, a TV and tea/coffee facilities.

            The Ramada Ekaterinburg spa features an indoor swimming pool and a year-round outdoor heated pool, hot tub and gym. Guests can also make an appointment in the hairdressing salon.</p>

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
export default MoscowHotelLuxuryHotel3;
