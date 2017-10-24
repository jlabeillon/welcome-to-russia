// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const NovgorodHotelLuxuryHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">City Hotel Sova</h1>
        <span>Carousel component</span>
        <p id="city-description">This 4-star business City Hotel Sova is located a 10-minute drive to the centre of Nizhniy Novgorod and offers free WiFi, a business centre and underground parking. The Kremlin and the pedestrian street Bolshaya Pokrovskaya are just a few bus stops away. The modern rooms are air conditioned and come with orthopedic mattresses, hypoallergenic pillows, a TV and a minibar. The private bathrooms feature a bath or shower, hairdryer and free toiletries. Bathrobes and slippers are offered. The Sova restaurant serves Russian and European cuisine, as well as buffet breakfast, business lunch and dinner. The hotel offers a sauna. Guests can use Fizkult fitness centre, located a 4-minute walk away. The property has an ATM on site and offers tour desk and car rental services. The nearest bus stop is a few metres away. Nizhniy Novgorod Train Station is 8 km away, while Nizhniy Novgorod International Airport is 23 km away. </p>

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
export default NovgorodHotelLuxuryHotel1;
