// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KaliningradHotelLuxuryHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hotel Grand Palace</h1>
            <span>Carousel component</span>
            <p id="city-description">This property is 1 minute walk from the beach. Situated on the coast of the Baltic Sea, Grand Palace Hotel offers luxurious rooms with cable TV and Italian furniture. Facilities include a private beach and a heated outdoor swimming pool.

            All rooms of Grand Palace Hotel feature a balcony or terrace with either a view of the sea or the landscaped areas of the town.

            Grand Palace has a health club with a sauna, indoor swimming pool and a fitness room.

            Guests can enjoy authentic Russian and Italian cuisine in the Grand Palace restaurant. The lobby bar has a panoramic view of the Baltic Sea, and serves a wide variety of cocktails and snacks. </p>

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
export default KaliningradHotelLuxuryHotel1;
