// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelAuthenticHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">The State Hermitage Museum Official Hotel </h1>
            <span>Carousel component</span>
            <p id="city-description">This exclusive 5-star hotel is set in the 1830s mansion in the centre of Saint Petersburg and represents the atmosphere of the original Hermitage Museum. Spa and wellness centre and free Wi-Fi is featured here.

            The luxurious rooms and suites of The State Hermitage Museum Official Hotel Saint Petersburg offer elegant furnishings, designed by Italian woodwork masters from Florence. Every room includes a flat-screen TV, a minibar and a private bathroom decorated with Italian and Greek marble and fitted with bathrobes.

            Michelangelo Boutique Restaurant offers traditional Italian dishes and exquisite desserts. The quiet Lobby Bar welcomes guests to the tradition of Russian pastime of tea drinking. The elegant Catherine the Great Restaurant serves Russian cuisine based on the menu of the historic Winter Palace.

            The lively Nevsky Prospekt is a 15-minute walk away, and the Hermitage Museum itself is 3 km from the hotel.

            Vladimirskaya Metro Station is a 7-minute walk from The State Hermitage Museum Official Hotel Saint Petersburg. Moskovsky Train Station is 1.8 km away, and Pulkovo International Airport is 22 km from the hotel. </p>

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
export default MoscowHotelAuthenticHotel3;
