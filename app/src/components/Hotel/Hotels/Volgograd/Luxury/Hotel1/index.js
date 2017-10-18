// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

// Code
class VolgogradHotelLuxuryHotel1 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="#" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Hampton by Hilton Volgograd Profsoyuznaya</h1>
            <span>Carousel component</span>
            <p id="city-description">Hampton by Hilton Volgograd Profsoyuznaya is located in Volgograd, in a quiet residential area just 5 minutes’ drive from the city centre. It features a 24-hour reception and a gym. Free Wi-Fi and free private parking are provided.

            All bright, air-conditioned rooms come with a flat-screen TV, a safety deposit box and a kettle. Free toiletries, ironing facilities and a hairdryer are available.

            The on-site restaurant serves various Russian and European dishes. Also it is possible to have a drink or a snack at the bar. Fitness center is free for guests and is open 24/7.

            The Mamaev Kurgan Memorial is 7 km from Hampton by Hilton Volgograd Profsoyuznaya, and Volgograd Central Station is 3 km away. The distance to Volgograd International Airport is 20 km. </p>

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
              <textarea rows="4" cols="50" placeholder="Here you can send a message to the hotel. Note that it is preferable to send your message in English."></textarea>
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
  };
}
// Export
export default VolgogradHotelLuxuryHotel1;
