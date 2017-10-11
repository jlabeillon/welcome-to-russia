// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class MoscowHotelLuxuryHotel2 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Vysotsky Hotel</h1>
            <span>Carousel component</span>
            <p id="city-description">Vysotsky Hotel is located on the 39th floor of a business centre in Yekaterinburg, within a 15-minute walk of Ploshchad 1905 Goda Metro Station. Wi-Fi access in all areas and private on-site parking are available free of charge.

            The luxurious air-conditioned rooms feature a minibar and a flat-screen TV with cable channels. The private bathroom comes with a hairdryer and free toiletries.

            The hotel’s à la carte restaurant serves dishes of European and Japanese cuisine and the bar offers a variety of drinks.

            At Vysotsky Hotel you can visit a nightclub and play billiards or bowling with friends. After a busy day, guests can relax in the hotel’s sauna or visit the spa and wellness centre with an indoor pool. </p>

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
export default MoscowHotelLuxuryHotel2;
