// Import
import React from 'react';
import PropTypes from 'prop-types';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
class SochiHotelEcoHotel3 extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">

          <div className="col-xs-2 nav">
            <a href="" className="nav-left">Hotel website</a>
          </div>

          <div className="col-xs-10" id="city-container">
            <h1 id="city-name">Marika Hotel</h1>
            <div id="carousel"><Carousel /></div>
            <p id="city-description">Offering an outdoor pool and barbecue, Marika Hotel is set in Sochi, a 10-minute walk of the Black Sea coast. Guests can enjoy the on-site restaurant. Free WiFi is provided and free private parking is available on site.

            Rooms come with a flat-screen TV. You will find a kettle in the room. For your comfort, you will find bathrobes and slippers.

            You will find a 24-hour front desk at the property.

            Green Theatre is 5 km from Marika Hotel, while Tayny Okeana Aquarium is 5 km from the property. The nearest airport is Adler-Sochi International Airport, 28 km from the property. </p>

            <section className="get-in-touch col-xs-6">
             <h1 className="title">Contact the hotel</h1>
             <form className="contact-form row" action="/email-sended">
                <div className="form-field col x-50">
                   <input id="name" className="input-text js-input" type="text" required />
                   <label className="label" htmlFor="name">Name</label>
                </div>
                <div className="form-field col x-50">
                   <input id="email" className="input-text js-input" type="email" required />
                   <label className="label" htmlFor="email">E-mail</label>
                </div>
                <div className="form-field col x-100">
                   <input id="message" className="input-text js-input" type="text" required />
                   <label className="label" htmlFor="message">Message</label>
                </div>
                <div className="form-field col x-100 align-center">
                   <input className="submit-btn" type="submit" value="Submit"/>
                </div>
             </form>
            </section>

            <div className="col-xs-6 map-hotel">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11551.635216767154!2d39.701607!3d43.629257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4915ab2a3f6454bc!2sHotel+in+Sochi+%22Marica-Sochi%22!5e0!3m2!1sen!2sfr!4v1508402593268" width="450" height="300" frameBorder="0" />
            </div>

          </div>


        </div>
        <Footer />
      </div>
    );
  };
}
// Export
export default SochiHotelEcoHotel3;
