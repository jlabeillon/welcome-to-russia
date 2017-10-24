// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const NovgorodHotelAuthenticHotel2 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Joy Hotel</h1>
        <span>Carousel component</span>
        <p id="city-description">Joy Hotel is located in the historic centre, a 5-minute walk from Nizhny Novgorod Kremlin. The rooms offer air conditioning, a safety deposit box, flat-screen TV with cable channels, and kitchenette equipped with a fridge, microwave and electric kettle. The bathrooms include a hairdryer. Guests are welcome to eat out in the cafés and restaurants within a 5-minute walk away. Breakfasts in the room are served upon request. Free WiFi is available throughout the property and parking is provided at surcharge. Guests can enjoy billiards on site. The Oka River embankment is a 12-minute walk from the property. Nizhny Novgorod Train Station is 5.5 km away, and Nizhny Novgorod International Airport is 23 km from Joy Hotel. This is our guests’ favourite part of Nizhny Novgorod, according to independent reviews. This property also has one of the best-rated locations in Nizhny Novgorod! Guests are happier about it compared to other properties in the area.</p>

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
export default NovgorodHotelAuthenticHotel2;
