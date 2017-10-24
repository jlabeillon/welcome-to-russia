// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const SaranskHotelAuthenticHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Hotel Makarovskaya</h1>
        <span>Carousel component</span>
        <p id="city-description">Located 8 km from the city centre of Saransk, Hotel Makarovskaya features an on-site restaurant serving Russian cuisine, free internet access, and free private parking. The classically designed rooms here provide guests with a flat-screen TV, a desk, heating, and a private bathroom with a shower and free toiletries. Other hotel facilities include a 24-hour front desk, meeting and banquet facilities, a garden, a billiards table and a tennis table.</p>

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
export default SaranskHotelAuthenticHotel3;
