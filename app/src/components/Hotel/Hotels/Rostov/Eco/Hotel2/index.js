// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class RostovHotelEcoHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Dobroslawa Apart Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">This property is 7 minutes walk from the beach. Featuring free Wi-Fi, a kitchen and 24-hour reception, this aparthotel is located in the South-Western suburb of Rostov-on-Don city, 200 m from the Don River Embankmet.

            Each apartment at Dobroslawa ApartHotel is decorated in neutral colours and includes a flat-screen TV. Bathrooms are fitted with a hairdryer.

            All apartments feature a fully equipped kitchen, which comes complete with a fridge, microwave and kettle. There is also a stove and dining area.

            Uritskogo bus stop is 10 minutes’ walk from Dobroslawa ApartHotel, offering access to Rostov-on-Don city centre and city’s main shopping malls. The Preopolovensky Cathedral is 700 m from the property.</p>

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
export default RostovHotelEcoHotel2;
