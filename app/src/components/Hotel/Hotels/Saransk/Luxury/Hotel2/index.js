// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const SaranskHotelLuxuryHotel2 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Hotel Victoria at the sports school</h1>
        <span>Carousel component</span>
        <p id="city-description">Located in Saransk, 6 km from Mordovia Arena, Hotel Victoria at the sports school features air-conditioned rooms with free WiFi throughout the property. The hotel has a hot tub and sauna, and guests can enjoy a drink at the bar. All rooms include a flat-screen TV with cable channels. Certain accommodations have a sitting area for your convenience. Enjoy a cup of tea while looking out at the garden or city. The rooms are equipped with a private bathroom. For your comfort, you will find bathrobes and slippers. You will find a 24-hour front desk and gift shop at the property. Bike rental is available at this hotel and the area is popular for hiking. Saransk Bus Station is 1.9 km from Hotel Victoria at the sports school, and Leninsky District Park is 2.1 km from the property. </p>

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
export default SaranskHotelLuxuryHotel2;
