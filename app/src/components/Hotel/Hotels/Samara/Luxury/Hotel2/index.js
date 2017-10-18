// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SamaraHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Renaissance Samara Hotel </h1>
            <span>Carousel component</span>
            <p id="city-description">The Renaissance Samara Hotel is a luxury hotel with river views, located in the city centre. It combines impressive interiors with facilities that include restaurants and indoor swimming pool.

            Renaissance Samara Hotel also features a business centre with meeting rooms, sauna and 24-hour gym.

            All the rooms are equipped with air conditioning, minibar, safe and cable TV. You can easily stay in touch with Wi-Fi connection and double-line telephone, and benefit from 24-hour room service.

            The Renaissance Hotel includes a Viennese-style café, Sunlight restaurant and In Alto restaurant with panoramic views of the Volga River.

            Kurumoch International Airport is 31 km from the hotel. </p>

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
export default SamaraHotelLuxuryHotel2;
