// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const KaliningradHotelEcoHotel2 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Hotel Smile</h1>
        <span>Carousel component</span>
        <p id="city-description">Featuring free WiFi and a terrace, Smile Hostel and Mini-Hotel offers accommodation in Kaliningrad, 2.7 km from Königsberg Cathedral. Free private parking is available on site. A flat-screen TV with cable channels is provided. Guests use shared or private bathroom facilities. There is a shared kitchen at the property. Transfer and tour desk services are available. The property also offers bike hire. The central square is 1.5 km from Smile Hostel and Mini-Hotel, while Amber Museum is 3.4 km away. Kaliningrad Khrabrovo Airport is 20 km from the property. Couples particularly like the location — they rated it 8.2 for a two-person trip. This property is also rated for the best value in Kaliningrad! Guests are getting more for their money when compared to other properties in this city.</p>

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
export default KaliningradHotelEcoHotel2;
