// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const SamaraHotelLuxuryHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Hotel Moya Glinka</h1>
        <span>Carousel component</span>
        <p id="city-description">Located in Samara, Hotel Moya Glinka features a spa centre, and guests can enjoy a meal at the restaurant or a drink at the bar. Free WiFi is provided throughout the property and free private parking is available on site. The rooms are fitted with a flat-screen TV. Extras include free toiletries and a hairdryer. You will find a 24-hour front desk at the property. The nearest airport is Kurumoch International Airport, 13 km from the property.  </p>

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
            <textarea rows="4" cols="50" placeholder="Here you can send a message to the hotel. Note that it is preferable to send your message in English." />
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
// Export
export default SamaraHotelLuxuryHotel3;
