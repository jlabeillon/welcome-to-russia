// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class YekaterinburgHotelAuthenticHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">R.E.D. Inn</h1>
            <span>Carousel component</span>
            <p id="city-description">Featuring free WiFi throughout the property, R.E.D. Inn is located in Yekaterinburg, 400 m from Uralochka Sports Centre. Free private parking is available on site.

            Rooms are fitted with a flat-screen TV. All rooms are equipped with a shared bathroom. For your comfort, you will find bathrobes and slippers.

            There are shops at the property.

            The hotel also offers bike hire. Church of All Saints is 1 km from R.E.D. Inn, while Sevastyanov’s House is 1.4 km away. The nearest airport is Koltsovo International Airport, 17 km from R.E.D. Inn. </p>

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
export default YekaterinburgHotelAuthenticHotel1;
