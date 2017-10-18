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

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Four Seasons Hotel Lion Palace St. Petersburg </h1>
            <span>Carousel component</span>
            <p id="city-description">Four Seasons Hotel Lion Palace is located in the heart of Saint Petersburg, just 300 m from the Dvortsovaya Square. It boasts luxury interiors in Russian Empire style and exclusive fine dining options.

            All elegant, air conditioned rooms come with a flat-screen TV, a DVD player, a minibar and a coffee machine. Free Wi-Fi and 2 telephone lines are provided. Marble bathrooms are fitted with a soak bath tub, separated walk-in tropical shower and built-in mirror flat-screen TV. The free toiletries are by Lorenzo Villoresi.

            Percorso Restaurant specializes in fine Italian cuisine, while Sintoho Restaurant offers contemporary Asian dishes. Guests can have a drink at the stylish Xander Bar or enjoy delicious snacks and pastry at the Tea Lounge. The exquisite breakfast is served there every morning.

            The Hermitage Museum is 3 minutes’ walk from Four Seasons Hotel Lion Palace, and the lively Nevsky Prospekt is 400 m away. The Mariinsky Theatre is within a 15-minute walk of the hotel.</p>

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
