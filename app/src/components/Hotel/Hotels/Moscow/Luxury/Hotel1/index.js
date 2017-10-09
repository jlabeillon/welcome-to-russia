// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class Hotel extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">People Business Novinsky Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">One of our top picks in Moscow. Located 50 m from Moscow’s vibrant Noviy Arbat Street, PEOPLE Business Novinsky Hotel is just 2 metro stops from the Kremlin. Rooms feature a flat-screen TV and free Wi-Fi.

            Set in a historic building with a grand façade and private yard, the hotel offers simply decorated rooms. Guests have use of a lounge with a flat-screen TV. Public computers with free internet access are also available.

            PEOPLE Business Novinsky Hotel offers a 24-hour front desk, where guests can book a wide variety of tours in and around Moscow. Help with visas and registration is also provided. Smolenskaya Metro Station (500 m) offers direct connections to Moscow’s city centre and all Moscow train stations. The American Embassy is a 2-minute walk away. </p>

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
export default Hotel;
