// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SamaraHotelAuthenticHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hotel Europe</h1>
            <span>Carousel component</span>
            <p id="city-description">This property is 11 minutes walk from the beach. Situated in the historic city centre of Samara, this hotel features free Wi-Fi. Russian specialities are served in the hotel restaurant, and guests benefit from a 24-hour reception.

            The air-conditioned rooms at Hotel Europe are decorated in shades of peach, and come with satellite TV and a seating area. A hairdryer is provided in the en suite bathroom.

            A variety of traditional cuisine is served in the Europe Hotel’s Dublin restaurant, a continental breakfast is served there too. After dinner guests can enjoy a drink at the bar.

            The Volga River is a 10-minute walk from the hotel, and Samara Opera and Drama Theatre is a 5-minute drive away. After a day of sightseeing, guests can relax in the hotel’s sauna.</p>

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
export default SamaraHotelAuthenticHotel3;
