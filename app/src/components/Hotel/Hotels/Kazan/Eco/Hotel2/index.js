// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const KazanHotelEcoHotel2 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Berison Kamala</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Set in Kazan, 800 m from Marcani Mosque, Berison Kamala features free WiFi. The air-conditioned rooms have a flat-screen TV. Every room includes a private bathroom equipped with a shower. You will find a 24-hour front desk at the property. Kazan State University is 900 m from Berison Kamala, while Peter and Paul Cathedral is 900 m from the property. The nearest airport is Kazan International Airport, 23 km from the property. </p>
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.4636842765804!2d49.10917831593175!3d55.78518598056202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead1b9bff0525%3A0xeadc5d0c3d44562b!2sul.+Galiaskara+Kamala%2C+5%2C+Kazan%2C+Respublika+Tatarstan%2C+Russia%2C+420021!5e0!3m2!1sen!2sfr!4v1508406293399" width="450" height="300" frameBorder="0" />
        </div>

      </div>

    </div>
    <Footer />
  </div>
);
// Export
export default KazanHotelEcoHotel2;
