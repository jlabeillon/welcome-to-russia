// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const KazanHotelAuthenticHotel2 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Hotel Sapozhok-Kaushchi</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Set in Kazan, 200 m from Marcani Mosque, Kaushchi features air-conditioned rooms. The rooms have a flat-screen TV. Kaushchi features free WiFi throughout the property. You will find a 24-hour front desk at the property. Church of the Exaltation of the Holy Cross is 800 m from Kaushchi, while Kazan State University is 1.4 km away. Kazan International Airport is 22 km from the property. This is our guests’ favourite part of Kazan, according to independent reviews. Couples particularly like the location — they rated it 9.5 for a two-person trip.</p>
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8975.428094595332!2d49.1175561!3d55.778355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd2fb2944118fcd23!2sKaushchi!5e0!3m2!1sen!2sfr!4v1508405808413" width="450" height="300" frameBorder="0" />
        </div>

      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default KazanHotelAuthenticHotel2;
