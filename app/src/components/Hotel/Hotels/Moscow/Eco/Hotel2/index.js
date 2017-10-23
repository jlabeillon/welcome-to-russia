// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const MoscowHotelEcoHotel2 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Cosmos Hotel</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Located next to the All-Russia Exhibition Centre, this hotel offers a spa with a swimming pool, fitness centre and massage services. VDNKh Metro Station is 400 m away. The colourful rooms at the Cosmos Hotel have Wi-Fi access, a flat-screen TV with satellite channels, and a refrigerator. Toiletries and a hairdryer are provided in the private bathrooms. There are 11 restaurants and cafés at Cosmos Hotel. Planet Cosmos restaurant serves Russian and European cuisine and offers views of the Moscow skyline from the 25th floor. An American-style breakfast is served in the Kalinka restaurant. Guests can also enjoy Mediterranean dishes in the Il Gusto restaurant, and Chinese meals and karaoke in the Empress Hall restaurant. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.32264149996!2d37.64473251593322!3d55.82235898057199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5350814130abb%3A0x4e68b854c51f9eda!2sCosmos+Hotel!5e0!3m2!1sen!2sfr!4v1508336829812" width="450" height="300" frameBorder="0" />
        </div>

      </div>


    </div>
    <Footer />
  </div>
);
// Export
export default MoscowHotelEcoHotel2;
