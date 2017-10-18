// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SaranskHotelEcoHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hotel Olympia</h1>
            <span>Carousel component</span>
            <p id="city-description">Located just a 15-minute walk from Mordovian Fine Arts Museum, Hotel Olympia features a sauna, indoor swimming pool and wellness centre. This property offers a steam bath, fitness centre and billiards.

            The air-conditioned rooms feature a minibar, fridge and flat-screen TV with cable channels. The private bathroom is equipped with a hairdryer, slippers and free toiletries.

            Guests can have a meal at the restaurant on site and have a drink at the bar. Plenty of cafes and restaurants are just a 5-minute walk away.

            Olympia Hotel is 3 km from Saransk Central Train Station and 11 km from Saransk Airport. The nearest bus stop is a 5-minute walk away. </p>

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
export default SaranskHotelEcoHotel2;
