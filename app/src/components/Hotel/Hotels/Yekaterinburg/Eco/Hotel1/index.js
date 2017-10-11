// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class YekaterinburgHotelEcoHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Bolshoy Ural na Malysheva Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Situated in Yekaterinburg, 400 m from the central stadium and Cathedral of St. John the Baptist, Bolshoy Ural na Malysheva Hotel features air-conditioned rooms with free WiFi. Free private parking is available on site.

            A flat-screen TV with cable channels, as well as a computer are available. Certain units feature a seating area where you can relax. Certain rooms include views of the garden or city.

            You will find shops at the property. There is also a lounge area and conference rooms at the property.

            Yekaterinburg Train Station is a 12-minute tram ride away. Yekaterinburg city centre is a 5-minute drive away. Koltsovo International Airport is 17 km away. </p>

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
export default YekaterinburgHotelEcoHotel1;
