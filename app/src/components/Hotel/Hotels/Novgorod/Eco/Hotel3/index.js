// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const NovgorodHotelEcoHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">MaxxRoyal Hotel</h1>
        <span>Carousel component</span>
        <p id="city-description">Offering a restaurant, MaxxRoyal Hotel is located in Nizhniy Novgorod, a 20-minute drive from city centre. Free WiFi access is available. Each room here will provide you with a TV. Featuring a shower, private bathroom also comes with a hairdryer and free toiletries. Extras include a desk and a fan. Guests are welcome to visit the on-site cafe, which serves European, Caucasian and Italian cuisine. At MaxxRoyal Hotel you will find a 24-hour front desk and a bar. Other facilities offered at the property include an ironing service and laundry facilities. The distance to Nizhniy Novgorod Train Station is 10 km from the property, and Nizhniy Novgorod Airport is 15 km away. </p>

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
export default NovgorodHotelEcoHotel3;
