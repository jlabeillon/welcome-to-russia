// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const KazanHotelEcoHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Gvardeiskaya Hotel</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">Located 3 km from the large Koltso shopping mall, this hotel in South-East Kazan offers a 24-hour reception, and rooms feature refrigerators and free toiletries. Individually furnished rooms and suites await you at the Gvardeiskaya Hotel. Each room has a living area with desk and TV. Gvardeiskaya’s café-bar is open all day, and serves a range of international meals. Packed lunches can be prepared on request. The Ulitsa Adelya Kutuya Tram Stop is 100 m from Hotel Gvardeiskaya, and Omet’evo Train Station is 1 km away. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8973.867700545909!2d49.1716383!3d55.7851297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ec642e89f5cd2bd!2sGvardeyskaya!5e0!3m2!1sen!2sfr!4v1508406412538" width="450" height="300" frameBorder="0" />
        </div>

      </div>


    </div>
    <Footer />
  </div>
);
// Export
export default KazanHotelEcoHotel3;
