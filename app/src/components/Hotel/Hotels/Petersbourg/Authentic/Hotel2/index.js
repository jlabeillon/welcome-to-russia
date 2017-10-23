// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const PetersbourgHotelAuthenticHotel2 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Ekaterina Hotel</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Featuring free WiFi and a restaurant, Ekaterina Hotel offers accommodation in Saint Petersburg, 600 m from Church of the Savior on Spilled Blood and 700 m from Hermitage. Rooms are air conditioned and have a flat-screen TV. The private bathrooms come with bathrobes. There is a 24-hour front desk at the property. Plenty of dining options can be found within a 5-minute walk from Ekaterina Hotel. Palace Square is 700 m away. Moskovsky Train Station is 4 km from the hotel, and Pulkovo Airport is 20 km away. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7993.288211880747!2d30.3239981!3d59.943391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x154ebad3f62081d8!2sThe+hotel+%22Catherine%22+-+Hotel+%22Ekaterina%22!5e0!3m2!1sen!2sfr!4v1508340704034"  width="450" height="300" frameBorder="0" />
        </div>

      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default PetersbourgHotelAuthenticHotel2;
