// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class VolgogradHotelAuthenticHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Tsaritsinskaya Sloboda</h1>
            <span>Carousel component</span>
            <p id="city-description">Featuring a spa centre with a sauna and outdoor swimming pool, Tsaritsinskaya Sloboda is located in natural surroundings in Volgograd, a 10-minute drive to the city centre. It also offers a large garden with BBQ facilities. Free Wi-Fi and parking are available.

            The comfortable rooms are air conditioned and come with a flat-screen satellite TV and fridge. The private bathrooms feature a shower or bath, hairdryer and free toiletries. All cottages are made from ecological materials.

            The restaurant at Tsaritsinskaya Sloboda serves Russian and European cuisine. It features live music. The hotel has a horse riding club.</p>

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
export default VolgogradHotelAuthenticHotel3;
