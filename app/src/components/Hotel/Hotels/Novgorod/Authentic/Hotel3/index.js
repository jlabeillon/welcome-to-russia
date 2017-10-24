// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const NovgorodHotelAuthenticHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Nikitin Hotel</h1>
        <span>Carousel component</span>
        <p id="city-description">Free Wi-Fi and a full English breakfast are offered at this hotel, located just 350 m from where the River Volga meets the River Oka. The design hotel offers a 24-hour reception. Rooms at Nikitin Hotel feature a mixture of bright and deep colours. Each one comes with a flat-screen TV, minibar, and air conditioning. The private bathroom includes a bathrobe, slippers, and free toiletries. Nikitin Hotel offers a laundry and ironing service to guests, as well as a shoe shine. A shuttle  service is also available. The hotel is a 9-minute walk from Nizhniy Novgorod Fair Exhibition Grounds. Alexandra Nevskogo Cathedral is less than 1 minute away by foot. Nizhny Novgorod Main Station is 2 km away and Nizhny Novgorod Airport is 20 km away. </p>

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
export default NovgorodHotelAuthenticHotel3;
