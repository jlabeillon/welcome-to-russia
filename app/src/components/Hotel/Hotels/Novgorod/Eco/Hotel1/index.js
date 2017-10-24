// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
const NovgorodHotelEcoHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="#" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Hotel Mona Lisa</h1>
        <span>Carousel component</span>
        <p id="city-description">Located in a green area of Nizhniy Novgorod, a 30-minute drive to the city centre, Hotel Mona Lisa features an outdoor swimming pool. The Volga River is a 15-minute walk away. The comfortable rooms feature air conditioning and free Wi-Fi. They have a flat-screen satellite TV and fridge. The private bathrooms come with a shower or bath, hairdryer and free toiletries. The restaurant at Hotel Mona Lisa serves dishes of European and Russian cuisine. The 24-hour front desk offers laundry and ironing services. Free private parking is available. The nearest bus stop is a 3-minute walk from the hotel. Nizhniy Novgorod Moskovskiy Train Station is 10 km away, while Nizhniy Novgorod Airport is 33 km away. </p>

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
export default NovgorodHotelEcoHotel1;
