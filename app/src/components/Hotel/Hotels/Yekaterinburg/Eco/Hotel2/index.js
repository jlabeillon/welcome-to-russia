// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class YekaterinburgHotelEcoHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Bolshoy Ural na Stachek Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Located 1.5 km from Mashinostroiteley Metro Station in Yekaterinburg, Bolshoy Ural na Stachek offers a 24-hour front desk and luggage storage. Yekaterinburg city centre is a 30-minute drive away.

            The rooms come with shared bathroom facilities on every floor.

            Guests are welcome to eat out at the on-site cafe and use laundry services. Free WiFi is available in the public areas.

            Yekaterinburg Train Station is a 15-minute drive away. Koltsovo International Airport is 25 km from Bolshoy Ural na Stachek. </p>

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
export default YekaterinburgHotelEcoHotel2;
