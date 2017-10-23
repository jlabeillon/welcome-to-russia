// Import
import React from 'react';

// Local import
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Carousel from 'src/components/Carousel';

// Code
const SochiHotelLuxuryHotel3 = () => (
  <div className="container">
    <Header />
    <div className="row">

      <div className="col-xs-2 nav">
        <a href="" className="nav-left">Hotel website</a>
      </div>

      <div className="col-xs-10" id="city-container">
        <h1 id="city-name">Rodina Grand Hotel & SPA</h1>
        <div id="carousel"><Carousel /></div>
        <p id="city-description">This property is 7 minutes walk from the beach. This luxury 5-star hotel is located on the Black Sea Coast in Sochi. It features a private beach, several gourmet restaurants, a Wellness and Spa by Rodina with indoor and outdoor pools and kids club. Rodina Grand Hotel & SPA is surrounded by 15-hectare sub-tropical gardens. Its stylish rooms and suites feature flat-screen TVs and designer furniture. Buffet breakfasts are served in the main Moscow Restaurant. The beachside BSBC Restaurant serves drinks and snacks, and guests can relax with a cocktail in one of the stylish bars. There is also a rooftop terrace, Nebesa. Rodina Grand Hotel & SPA is the only 5-star boutique hotel in Sochi. Other exclusive facilities include a private movie theatre, billiard room, tennis courts and basketball and volleyball courts. Rodina provides guests with golf carts for transport around the resort. </p>

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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11557.18689200724!2d39.7146967!3d43.6003631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c4d3eb46e017cd9!2sRodina+Grand+Hotel+%26+SPA!5e0!3m2!1sen!2sfr!4v1508401721230" width="450" height="300" frameBorder="0" />
        </div>

      </div>


    </div>
    <Footer />
  </div>
);
// Export
export default SochiHotelLuxuryHotel3;
