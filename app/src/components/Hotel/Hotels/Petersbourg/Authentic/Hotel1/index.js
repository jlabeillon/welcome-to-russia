// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const PetersbourgHotelAuthenticHotel1 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Pushka INN hotel</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Pushka Inn is a 18th Century mansion located in an historic part of St. Petersburg, one minute walk from the Palace Square. It offers non-smoking rooms with air conditioning, satellite TV and free Wi-Fi. The Pushka Inn’s restaurant offers European and Russian cuisine and has an extensive wine list. Pushka Inn’s concierge service can provide assistance with booking of flights, train tickets, and theatre and concert tickets. Tsentralny district is a great choice for travellers interested in museums, culture and ambience. This is our guests’ favourite part of Saint Petersburg, according to independent reviews.</p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7993.876938126567!2d30.320667!3d59.940949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a21c1ee08547b2c!2sPushka+INN!5e0!3m2!1sen!2sfr!4v1508340421527"  width="450" height="300" frameBorder="0" />
        </div>

      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default PetersbourgHotelAuthenticHotel1;
