// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SochiHotelLuxuryHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Pullman Sochi Centre Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">This hotel is located in the centre of Sochi, within a 2-minute walk of the Black Sea shore and a 5-minute walk of Festivalny Concert Hall. An indoor and a seasonal outdoor pool, Fit and Spa Lounge and free WiFi are provided at Pullman Sochi Centre Hotel. During the summer season, the hotel offers an equipped beach.

            The luxurious rooms are equipped with a king size bed, a flat-screen TV and a balcony. Complete with a fridge and minibar, the dining area also has tea & coffee facilities. Featuring a rain shower, private bathroom comes with a hairdryer and C.O. Bigelow toiletries. Some rooms have a sea view. There are also a working area, safety deposit box and laptop safe.

            Sel Marin Restaurant serves Mediterranean cuisine, and a variety of drinks is offered at the lobby bar.</p>

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
export default SochiHotelLuxuryHotel1;
