// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class NovgorodHotelEcoHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Baget Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Located a 10-minute walk from the Nizhny Novgorod Kremlin, Baget Hotel features rooms with a contemporary décor. It offers a 24-hour front desk.

            With air conditioning, rooms all come with a flat-screen TV and a private bathroom equipped with free toiletries. Studios also have an equipped kitchenette.

            Guests will find several cafes and restaurants within a radius of 200 m of the property.

            Nizhniy Novgorod Train Station is a 15-minute drive from Hotel Baget. Nizhny Novgorod International Airport is 25 km away.

            This is our guests’ favourite part of Nizhny Novgorod, according to independent reviews.</p>

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
export default NovgorodHotelEcoHotel2;
