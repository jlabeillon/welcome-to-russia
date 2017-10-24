// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const NovgorodHotelAuthenticHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Na Volne Hotel</h1>
        <span>Carousel component</span>
        <p id="city-description">Offering a private beach area, Na Volne Hotel is set in the historic part of Nizhniy Novgorod. Moskovskaya Train Station is a 5-minute walk away. Free WiFi is featured throughout the hotel. Rooms are fitted with a TV and air conditioning. Each bed offers individual curtain and socket. You will find a 24-hour front desk and gift shop at the property. Guests can use a shared fully equipped kitchen with bar counters and panoramic windows. A shared lounge with deck chairs and barbecue facilities is available. A selection of activities are offered in the area, such as windsurfing, cycling and fishing. Water sports facilities rental is available and the hostel offers tour desk. Moskovsky Train Station is a 5-minute walk from the property. Nizhegorodsky Circus is located steps from the property. Spaso-Preobrazhensky Cathedral is 1.3 km from Na Volne Hotel, while Alexander Nevsky Cathedral is 1.8 km away. The nearest airport is Nizhny Novgorod International Airport, 15 km from the property.  </p>

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
export default NovgorodHotelAuthenticHotel1;
