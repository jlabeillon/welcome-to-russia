// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class SochiHotelAuthenticHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Chebotarev Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">This property is 8 minutes walk from the beach. Situated along the Black Sea coast and surrounded by Russian Riviera’s palm and banana trees is this 4-star hotel offering comfortable accommodation in an ideal location.

            Rooms at Chebotaryov Hotel are cosy, air conditioned, with fully equipped bathrooms and refrigerators. All rooms provide bathrobes and slippers and balconies with views of the swimming pool and surrounding area.

            Chebotaryov guests can relax with a massage or take a spa bath. Play a round of billiards by the bar or take a swim in the outdoor pool. For your convenience, the hotel provides airport shuttle, babysitting and ironing services as well as 24 hour assistance.

            There is much to discover around the area. Head to the beaches, lakes, or rivers of Sochi or go mountain climbing. Chebotaryov’s staff are happy to arrange excursions or offer suggestions of what to see and do. There are also theatres, concert halls and museums boasting Sochis rich culture.</p>

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
export default SochiHotelAuthenticHotel2;
