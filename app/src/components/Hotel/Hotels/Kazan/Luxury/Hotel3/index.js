// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class KazanHotelLuxuryHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Spa Complex Premium Luciano</h1>
            <span>Carousel component</span>
            <p id="city-description">This spa hotel features 5 indoor swimming pools, 7 saunas, 3 thermal baths, and a fully-equipped fitness centre. It is located just one metro stop from the impressive Kazan Kremlin. Free private parking is featured.

            Spa Complex Premium Luciano offers air-conditioned rooms with a flat-screen TV, free WiFi, safe, free minibar and bathrobes, free toiletries and slippers in the bathroom. They feature a peaceful green colour scheme, soft lighting and wooden floors. Guests are granted unlimited access to the spa and fitness centre.

            Italian and European cuisine is offered at 2 Luciano’s restaurants, where a continental breakfast is also provided. After dinner, guests can relax in 3 stylish bars or play billiards.

            The luxurious wellness area includes a spa bath and Turkish steam room. A range of beauty treatments and massages are available in the hotel’s beauty salon and spa centre.</p>

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
export default KazanHotelLuxuryHotel3;
