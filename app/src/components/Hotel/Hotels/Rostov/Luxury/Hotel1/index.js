// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const RostovHotelLuxuryHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Residentsiya (Izvolte) Hotel</h1>
        <span>Carousel component</span>
        <p id="city-description">This hotel is situated in the historic building in the centre of Rostov. Hotel Residence features stylish rooms with free WiFi. It has a fitness centre, spa with massage services and wellness centre A flat-screen TV and a seating area with a sofa are included in each air-conditioned room. The bathrooms feature free free toiletries. A buffet breakfast is served daily. Guests can dine on Russian and European cuisine in the restaurant. Guests can also order dishes in the room. Guests can visit a fitness centre with modern state-of-the-art equipment free of charge. The spa centre is available at a special rate. The conference hall seating up to 100 people is also at guests’ service. Hotel Residence is centrally located, only 400 m from the National History Museum and 200 m from the Gorkogo Theatre. Ideal for a day trip is the Sea of Azov, 46 km away. A shuttle service is available upon request which takes guests too to the airport or local train station. </p>

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
export default RostovHotelLuxuryHotel1;
