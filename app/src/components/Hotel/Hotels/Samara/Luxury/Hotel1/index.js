// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SamaraHotelLuxuryHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Holiday Inn Samara</h1>
            <span>Carousel component</span>
            <p id="city-description">This property is 3 minutes walk from the beach. Holiday Inn Samara is located in the historic centre of Samara, a 5-minute walk from the Volga River Embankment. Free WiFi, Swedish and Finnish saunas, swimming pool and a 24-hour fitness centre are offered.

            All rooms are air conditioned and have satellite TV and tea/coffee facilities.

            A rich buffet breakfast is served every morning in the Atrium Restaurant. Brazeria Restaurant serves dishes of Russian and European cuisine. Guests can enjoy a dessert and a coffe at the Atrium lobby bar. The hotel also features 13 conference rooms.

            Samara Central Train Station is 3 km from Holiday Inn Samara. Kurumoch International Airport is 47 km away. </p>

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
export default SamaraHotelLuxuryHotel1;
