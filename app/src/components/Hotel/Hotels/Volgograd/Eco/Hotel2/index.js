// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class VolgogradHotelEcoHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Kani</h1>
            <span>Carousel component</span>
            <p id="city-description">Offering a sauna and hammam, Kani is located in Volgograd in the Volgograd Region Region, 5 km from River Port.

            The rooms come with a flat-screen TV. Certain rooms have a seating area where you can relax. You will find a kettle in the room. For your comfort, you will find slippers, free toiletries and a hairdryer. Kani features free WiFi throughout the property.

            There is a 24-hour front desk at the property.

            Motherland Monument is 6 km from Kani, while Volgograd Arena is 6 km from the property. The nearest airport is Volgograd International Airport, 11 km from Kani.</p>

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
export default VolgogradHotelEcoHotel2;
