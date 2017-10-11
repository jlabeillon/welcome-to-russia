// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KazanHotelLuxuryHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">DoubleTree by Hilton Kazan City Center</h1>
            <span>Carousel component</span>
            <p id="city-description">Located in the heart of Kazan city, the hotel is a 5-minute walk from historic sites such as the Kazan Kremlin, the National Museum of Tatarstan and Kazan Academic Drama Theatre. Free WiFi and free private parking are available on site.

            All light and airy rooms offer air conditioning, an electric kettle, minibar, tea/coffee facilities and flat-screen TV with satellite channels. The bathrooms provide a hairdryer. For extra space and city views, select a suite with a separate living area and two bathrooms. Some rooms also offer views of the Saints Peter and Paul Cathedral.

            European, Russian and Tatar cuisines are served in the hotel’s restaurant. The restaurant also offers breakfast and 24-hour room service. At the end of the day unwind at the lobby bar with a wide selection of wine, whisky and cocktails. Business travellers will appreciate a meeting room for up to 60 guests.</p>

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
export default KazanHotelLuxuryHotel1;
