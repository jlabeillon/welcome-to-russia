// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelAuthenticHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Radisson Royal Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">This luxury hotel is situated at the intersection of Moscow’s Kutuzovskiy Prospekt and Novy Arbat and occupies a Stalinist skyscraper. It offers free Wi-Fi, an indoor pool and modern spa facilities.

            Rooms at Radisson Royal Hotel offer stylish décor and classic-style furniture, offering a flat-screen TV and views of the city or inner courtyard. All rooms have high ceilings, and some have a separate seating area.

            11 restaurants of the Radisson Royal are known for their unique cuisine, original cocktails and panoramic views of Moscow. Breakfast, served at Veranda Restaurant, offers a variety of dining options. Guests can enjoy evening cocktails and light snacks at the Radisson’s 24-hour Lobby Bar and Club restaurant.

            After working out in the gym, visitors can relax in the sauna or in the spa bath. Massage services can also be booked. River boat trips along the Moskva River are available all year round.</p>

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
export default MoscowHotelAuthenticHotel2;
