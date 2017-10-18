// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class VolgogradHotelAuthenticHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Plaza Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Featuring free Wi-Fi and a sauna, Plaza Hotel is located 5 minutes’ walk from the Kazan Cathedral in Volgograd city. It offers a fitness centre and rooms with air conditioning.

            Relaxation at Plaza is provided by the sauna, and a massage service is offered on request. Active guests can work out in the fitness centre.

            Each room at the hotel includes classic-style décor and a flat-screen TV, as well as a fridge. Bathrooms come with a shower.

            Snacks and drinks are offered at Plaza's bar, and Voroshilovsky Shopping Centre with cafes is 10 minutes' walk away.</p>

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
export default VolgogradHotelAuthenticHotel2;
