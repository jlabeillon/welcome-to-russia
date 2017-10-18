// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class YekaterinburgHotelEcoHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Lhouse Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Lhouse Hotel is located in Yekaterinburg, 4 km from the city centre. It offers en suite accommodation, a quiet private yard and free WiFi. Free public parking is possible on site.

            All the rooms at Lhouse Hotel features a TV, tea/coffee making facilities and a refrigerator. Each room benefits from an en suite shower room with free toiletries.

            At Lhouse Hotel you will find a communal sauna and a bar. Other facilities offered at the property include laundry facilities.

            The inn is 2.1 km from Trinity Cathedral, 3 km from Big Zlatoust and 3.4 km from State Academic Opera and Ballet. Koltsovo International Airport is 13 km away. </p>

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
export default YekaterinburgHotelEcoHotel3;
