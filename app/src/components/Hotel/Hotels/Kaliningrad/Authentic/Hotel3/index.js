// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KaliningradHotelAuthenticHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hotel Usadba</h1>
            <span>Carousel component</span>
            <p id="city-description">Housed in an old German mansion, this hotel offers resort-style accommodation and is surrounded by the peaceful, green woodlands of Kaliningrad’s countryside. It is 7 km from Kaliningard city centre.

            Behind a grand, white exterior, Hotel Usadba offers a variety of classic-style rooms and suites, all featuring a satellite TV and minibar.

            Serving a buffet breakfast each morning the Usadba’s elegant antique-style restaurant features a sun terrace and offers a selection of delicious Russian cuisine.

            Guests can relax in the sauna and spa bath.

            A 24-hour front desk can help guests plan their visit to Kaliningrad. The Cathedral of Christ the Saviour and Königsberg Castle are within a 15-minute drive of Hotel Usadba. </p>

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
export default KaliningradHotelAuthenticHotel3;
