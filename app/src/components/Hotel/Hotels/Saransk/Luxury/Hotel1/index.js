// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SaranskHotelLuxuryHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Admiral Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Located a 10-minute walk from Sovetskaya Square in Saransk, Admiral Hotel features a free access to indoor pool and a gym. A spa and wellness centre and a bar are also featured.

            All rooms are air-conditioned and come with flat-screen TV with satellite channels, and safety deposit box.

            The hotel serves a buffet breakfast. Guests can dine in the property’s à la carte restaurant offering European, Mediterranean and Mordovian cuisine.

            Saransk Airport is within a 20-minute drive of Admiral Hotel. A shuttle service to the airport and Central Train Station is provided upon request. </p>

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
export default SaranskHotelLuxuryHotel1;
