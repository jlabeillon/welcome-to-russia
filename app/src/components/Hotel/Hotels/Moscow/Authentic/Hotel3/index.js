// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelAuthenticHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Ivan Chai - hotel and coffee </h1>
            <span>Carousel component</span>
            <p id="city-description"> One of our bestsellers in Moscow!

            Featuring free WiFi throughout the property, Ivan Chai - hotel and coffee offers accommodation in Moscow.

            All rooms are equipped with a private bathroom. Extras include free toiletries and a hairdryer.

            You will find a 24-hour front desk at the property.

            The hotel also offers free use of bicycles. Gorky Park is 6 km from Ivan Chai - hotel and coffee, while Luzhniki Stadium is 7 km away. The nearest airport is Vnukovo International Airport, 24 km from Ivan Chai - hotel and coffee. </p>

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
export default MoscowHotelAuthenticHotel3;
