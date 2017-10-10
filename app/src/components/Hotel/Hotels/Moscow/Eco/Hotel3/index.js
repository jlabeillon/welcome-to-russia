// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelEcoHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Izmailovo Beta Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Set near the Izmailovsky Park, within a 3-minute walk of Partizanskaya Metro Station, Izmailovo Beta Hotel features free WiFi, banquet and meeting facilities and a variety of dining options. It is located within a 15-minute metro ride from the city centre.

            The restaurant serves a selection of traditional Russian and European dishes. At the lobby café, fresh pastry from the hotel’s bakery is offered. Guests can enjoy a drink in one of the on-site bars or order room service.

            The modern rooms have a TV and a private bathroom with a hairdryer. The hotel offers a business centre and 11 conference halls with a capacity from 10 to 700 guests.

            Lokomotiv Stadium is within a 10-minute drive of Izmailovo Beta Hotel and Kursky Train Station is 4 metro stops away. Kazansky, Leningradsky and Yaroslavsky Train Stations are within a 23-minute drive. Domodedovo International Airport is 57 km from the property. It takes 30 minutes to drive to Belorussky Train Station from which you can get to Sheremetyevo International Airport by Aeroexpress.  </p>

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
export default MoscowHotelEcoHotel3;
