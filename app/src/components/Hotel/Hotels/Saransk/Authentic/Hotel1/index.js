// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const SaranskHotelAuthenticHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Meridian</h1>
        <span>Carousel component</span>
        <p id="city-description">This hotel is located in the centre of Saransk, a 5-minute walk from the National Theatre of Mordovia. Free Wi-Fi, a sauna, billiards and a 24-hour reception are featured at Meridian Hotel. The bright, air-conditioned rooms offer warm-coloured interiors and classic-style décor. Each room includes a flat-screen TV, a minibar and a private bathroom. Meridian Restaurant serves European cuisine, and a variety of drinks is offered at the bar. Saransk Central Train Station is a 15-minute walk from Meridian Hotel, and Saransk Airport is 12 km away. </p>

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
export default SaranskHotelAuthenticHotel1;
