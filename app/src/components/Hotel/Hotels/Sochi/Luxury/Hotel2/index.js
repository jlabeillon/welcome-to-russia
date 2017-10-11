// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SochiHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hyatt Regency Sochi</h1>
            <span>Carousel component</span>
            <p id="city-description">This property is 2 minutes walk from the beach. Hyatt Regency Sochi Hotel is located in the centre of Sochi, 200 m from the Black Sea coast and 200 m from Kurortny Prospekt. Free WiFi access is available.

            The modern, air-conditioned rooms include a flat-screen TV, a minibar and a balcony with sea view. Featuring a shower, private bathroom also comes with a bath and a hairdryer. Extras include an iPod dock, a seating area and satellite channels.

            Passage Restaurant serves a selection of European, Caucasian and Russian dishes. An access to the terrace is available in summer.

            A two-storey spa centre Evania offers traditional aromatherapy sessions, therapeutic treatment, various types of massage services and restorative practice. The hotel features a fitness centre and an outdoor swimming pool.

            Guests are invited to visit a private beach within a 3-minute walk away, free of charge. The beach is equipped with sunbeds, umbrellas and shower cabins. A children’s playground and lounge are also available at the beach.</p>

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
export default SochiHotelLuxuryHotel2;
