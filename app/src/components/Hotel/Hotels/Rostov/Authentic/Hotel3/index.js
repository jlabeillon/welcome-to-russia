// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class RostovHotelAuthenticHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hotel Petrovsky Prichal Luxury Hotel&SPA </h1>
            <span>Carousel component</span>
            <p id="city-description">Offering an indoor pool and a spa and wellness centre, Hotel Petrovsky Prichal Luxury Hotel&SPA is located in Rostov-on-Don, on the edge of the river. The luxury-style hotel features a restaurant, a terrace and a garden.

            All of the en suite rooms feature a garden and river view. Most of the rooms are decorated in gold. They all include a flat-screen TV with satellite channels, free WiFi and a minibar.

            Tea/coffee facilities are also available in each accommodation. Guests can sample a drink at the bar and the continental breakfast or groceries can be delivered to the comfort of your room.

            At Hotel Petrovsky Prichal Luxury Hotel&SPA you will find a fitness centre. Other facilities offered at the property include meeting facilities, a shared lounge and a games room. Rostov- on-Don Airport is 21 km away and Rostov-on-Don Train Station is 7 km from the hotel. </p>

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
export default RostovHotelAuthenticHotel3;
