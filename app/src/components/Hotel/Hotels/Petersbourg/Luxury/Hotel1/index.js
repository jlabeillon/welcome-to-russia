// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelLuxuryHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Ararat Park Hyatt</h1>
            <span>Carousel component</span>
            <p id="city-description">Ararat Park Hyatt has an excellent location 5 minutes from Red Square in the prime shopping area, moments from both TSUM and Detsky Mir department stores. It features superb service.

            The hotel rooms have been renovated in 2012 and feature new design by a famous architect Tony Chi.

            Energize at the fitness centre. Rejuvenate at the spa and Turkish bath. Pamper yourself at the solarium, or with a massage in one of the treatment rooms. Have a drink at the juice bar and a dip in the pool.

            When going out, ask for advice at the tours and tickets desk. Take a tasty packed lunch, and use the handy ATM. Return to write about the trip with the free Wi-Fi internet access, or to relax on the terrace.

            Enjoy European cuisine and speciality Armenian food, or the flavours at the Japanese sushi bar. The Café features marble columns and carvings, while the rooftop lounge offers stunning views over a drink.  </p>

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
export default MoscowHotelLuxuryHotel1;
