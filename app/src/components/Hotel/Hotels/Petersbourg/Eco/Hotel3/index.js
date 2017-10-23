// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const PetersbourgHotelEcoHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Staraya Gora Hostel</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Featuring free WiFi throughout the property, Staraya Gora Hostel is located in Saint Petersburg, 900 m from State Russian Museum. You will find a kettle in the room. The rooms are fitted with a shared bathroom equipped with a shower. For your comfort, you will find free toiletries and a hairdryer. A flat-screen TV with cable channels is provided. There is a 24-hour front desk at the property. Church of the Savior on Spilled Blood is 1.1 km from Staraya Gora Hostel, while Palace Square is 1.8 km away. The nearest airport is Pulkovo Airport, 16 km from Staraya Gora Hostel. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7993.770139152768!2d30.347947!3d59.941392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x44445b6833fe1cc6!2sStaraya+Gora!5e0!3m2!1sen!2sfr!4v1508342317227" width="450" height="300" frameBorder="0" />
        </div>

      </div>


    </div>
    <Footer />
  </div>
);
// Export
export default PetersbourgHotelEcoHotel3;
