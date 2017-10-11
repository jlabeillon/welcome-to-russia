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

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Belmond Grand Hotel Europe</h1>
            <span>Carousel component</span>
            <p id="city-description">Set in a stunning central location of St. Petersburg is this grand hotel that offers elegant accommodation in a fantastic setting.

            Belmond Grand Hotel Europe provides luxurious living in rooms that are gracefully designed and equipped with all modern facilities you require. Satellite TV and minibar are offered in air-conditioned rooms. The private bathroom is fitted with bathrobes, slippers, hairdryer and free toiletries.

            To ensure a stress free stay, the property offers concierge service, tour desk and ticket service. Cash machine can be found on site.

            There are many nearby theatres, museums and attractions including the Arts Square, the Admiralty, and the Tsar’s former Winter Palace. Alternatively, there are a wide variety of shops, bars and cafés along the well known Nevsky Avenue to pass enjoyable moments.

            After a day’s exploration, return to Belmond Grand Hotel Europe and select one of the 6 restaurants and/or cafés for delightful cuisines and refreshing drinks. The friendly and helpful staff provides 24-hour assistance, making sure your stay is as hassle-free and as pleasant as possible.</p>

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
